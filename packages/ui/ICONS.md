# Icon Exports & Tree-Shaking

## How It Works

The `icons.ts` file uses **explicit named exports** instead of `export *` to enable proper tree-shaking. This means:

- ✅ Only icons that are **actually imported** will be included in your bundle
- ✅ The bundler can trace each import back to the specific icon file
- ✅ You get all the benefits of lucide-react's tree-shaking

## How lucide-react Enables Tree-Shaking

1. **Individual icon files**: Each icon is in its own file (`dist/esm/icons/icon-name.js`)
2. **Explicit exports**: The main file has explicit named exports (not `export *`)
3. **`sideEffects: false`**: Tells bundlers the package has no side effects

## Regenerating Icons

When lucide-react is updated, regenerate the icons file:

```bash
bun run generate:icons
```

This script:
- Reads lucide-react's type definitions
- Extracts all icon names
- Generates explicit re-exports for tree-shaking

## Adding Custom Icons

You can add custom icons at the bottom of `icons.ts`:

```typescript
// Custom icons can be added below this line
export { MyCustomIcon } from "./icons/custom/my-custom-icon";
```

Custom icons will be tree-shakeable just like Lucide icons!

## Usage

Import icons as before - nothing changes:

```typescript
import { AlertCircle, BookOpen, Users } from "@voila.dev/ui/icons";
```

Only these three icons will be bundled, not all 1600+ icons! 🎉

