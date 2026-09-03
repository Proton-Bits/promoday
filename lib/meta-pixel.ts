export type PixelGroup =
  | "grupo_18_30"
  | "grupo_31_50"
  | "grupo_50_plus"
  | "achadinhos";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackPageView(group: PixelGroup) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "PageView", {
    content_category: group,
  });
}

export function trackViewContent(group: PixelGroup) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "ViewContent", {
    content_category: group,
  });
}

export function trackContact(group: PixelGroup) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Contact", {
    content_category: group,
  });
}

export function trackLead(group: PixelGroup) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Lead", {
    content_category: group,
  });
}
