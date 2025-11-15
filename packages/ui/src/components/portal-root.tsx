import type { PropsWithChildren } from "react";

export function PortalRoot({ children }: PropsWithChildren) {
	return <div className="root isolate">{children}</div>;
}
