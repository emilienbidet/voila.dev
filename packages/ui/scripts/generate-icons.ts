#!/usr/bin/env bun
/**
 * Script to generate explicit icon re-exports from lucide-react
 * This enables proper tree-shaking - only imported icons will be bundled
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lucideTypesPath = join(
	process.cwd(),
	"../../node_modules/lucide-react/dist/lucide-react.d.ts",
);

const outputPath = join(process.cwd(), "src/icons.ts");

// Read lucide-react type definitions
const typeDefinitions = readFileSync(lucideTypesPath, "utf-8");

// Extract all icon names from type definitions
// Pattern: `declare const IconName: react.ForwardRefExoticComponent<...>`
const iconNameRegex =
	/^declare const (\w+): react\.ForwardRefExoticComponent/gm;
const iconNames = new Set<string>();

let match: RegExpExecArray | null;
while (true) {
	match = iconNameRegex.exec(typeDefinitions);
	if (match === null) {
		break;
	}
	const iconName = match[1];
	// Filter out non-icon type definitions
	const excludedNames = [
		"LucideIcon",
		"IconNode",
		"LucideProps",
		"createLucideIcon",
		"defaultAttributes",
	];
	if (!excludedNames.includes(iconName)) {
		iconNames.add(iconName);
	}
}

// Sort icon names alphabetically
const sortedIconNames = Array.from(iconNames).sort();

// Generate the icons.ts file content
const fileContent = `/**
 * Icon exports from lucide-react
 * 
 * This file is auto-generated. To regenerate, run:
 * bun run scripts/generate-icons.ts
 * 
 * All icons are explicitly re-exported to enable tree-shaking.
 * Only icons that are imported will be included in the bundle.
 */

// Re-export all Lucide icons with explicit named exports for tree-shaking
${sortedIconNames.map((name) => `export { ${name} } from "lucide-react";`).join("\n")}

// Custom icons can be added below this line
// Example:
// export { MyCustomIcon } from "./icons/custom/my-custom-icon";
`;

writeFileSync(outputPath, fileContent, "utf-8");

console.log(
	`✅ Generated ${sortedIconNames.length} icon exports in ${outputPath}`,
);
console.log(
	`📦 Icons will be tree-shakeable - only imported icons will be bundled`,
);
