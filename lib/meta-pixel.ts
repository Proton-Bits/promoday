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

export function trackContact(group: PixelGroup, eventId?: string) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Contact", { content_category: group }, eventId ? { eventID: eventId } : undefined);
}

// eventId, quando passado, é o mesmo usado no evento server-side (Conversions
// API, disparado a partir da entrada confirmada no grupo) — a Meta deduplica
// sozinha eventos de Pixel e CAPI que compartilham o event_id, evitando
// contar a mesma pessoa duas vezes (clique no navegador + entrada real).
export function trackLead(group: PixelGroup, eventId?: string) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Lead", { content_category: group }, eventId ? { eventID: eventId } : undefined);
}
