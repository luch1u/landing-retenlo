"use client";

import Link from "next/link";
import posthog from "posthog-js";
import type { ComponentProps } from "react";

type CtaLocation = "hero" | "header" | "header_mobile" | "cta_section";
type CtaAction = "scroll_to_cta" | "open_mailto";

type TrackedCtaLinkProps = ComponentProps<typeof Link> & {
  location: CtaLocation;
  action: CtaAction;
};

export function TrackedCtaLink({ location, action, onClick, ...props }: TrackedCtaLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        posthog.capture("cta_click", {
          location,
          action,
          intent: action === "open_mailto" ? "high" : "explore",
        });
        onClick?.(e);
      }}
    />
  );
}
