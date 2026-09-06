(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/meta-pixel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trackContact",
    ()=>trackContact,
    "trackLead",
    ()=>trackLead,
    "trackPageView",
    ()=>trackPageView,
    "trackViewContent",
    ()=>trackViewContent
]);
function trackPageView(group) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.fbq?.("track", "PageView", {
        content_category: group
    });
}
function trackViewContent(group) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.fbq?.("track", "ViewContent", {
        content_category: group
    });
}
function trackContact(group, eventId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.fbq?.("track", "Contact", {
        content_category: group
    }, eventId ? {
        eventID: eventId
    } : undefined);
}
function trackLead(group, eventId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.fbq?.("track", "Lead", {
        content_category: group
    }, eventId ? {
        eventID: eventId
    } : undefined);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PixelTracker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PixelTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2d$pixel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/meta-pixel.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PixelTracker({ group }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PixelTracker.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2d$pixel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackPageView"])(group);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2d$pixel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackViewContent"])(group);
        }
    }["PixelTracker.useEffect"], [
        group
    ]);
    return null;
}
_s(PixelTracker, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PixelTracker;
var _c;
__turbopack_context__.k.register(_c, "PixelTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WhatsappButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsappButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2d$pixel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/meta-pixel.ts [app-client] (ecmascript)");
"use client";
;
;
function WhatsappButton({ href, children, trackingGroup, slug, fbclid }) {
    function handleClick(event) {
        event.preventDefault();
        window.open(href, "_blank");
        // Mesmo event_id no Pixel (aqui) e no evento server-side que o
        // promozap-admin dispara quando a entrada no grupo é confirmada — a Meta
        // deduplica sozinha os dois lados.
        const eventId = crypto.randomUUID();
        if (trackingGroup) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2d$pixel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackContact"])(trackingGroup, eventId);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2d$pixel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackLead"])(trackingGroup, eventId);
        } else {
            window.fbq?.("track", "Contact");
            window.fbq?.("track", "Lead");
        }
        // Registro do clique de verdade (LinkCurto no promozap-admin) — não
        // bloqueia a navegação: sendBeacon é fire-and-forget, sobrevive mesmo
        // que a aba perca o foco logo em seguida.
        if (slug) {
            const payload = JSON.stringify({
                inviteLink: href,
                fbclid: fbclid ?? null,
                eventId
            });
            navigator.sendBeacon?.(`/api/clique/${slug}`, new Blob([
                payload
            ], {
                type: "application/json"
            }));
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: "btn-whats",
        onClick: handleClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/WhatsappButton.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c = WhatsappButton;
var _c;
__turbopack_context__.k.register(_c, "WhatsappButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LiveStatsCycler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LiveStatsCycler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LiveStatsCycler({ values, recentJoiners, interval = 3000 }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveStatsCycler.useEffect": ()=>{
            const timer = setInterval({
                "LiveStatsCycler.useEffect.timer": ()=>{
                    setIndex({
                        "LiveStatsCycler.useEffect.timer": (prev)=>(prev + 1) % values.length
                    }["LiveStatsCycler.useEffect.timer"]);
                }
            }["LiveStatsCycler.useEffect.timer"], interval);
            return ({
                "LiveStatsCycler.useEffect": ()=>clearInterval(timer)
            })["LiveStatsCycler.useEffect"];
        }
    }["LiveStatsCycler.useEffect"], [
        values,
        interval
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "live-stats",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "live-online",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "live-dot"
                    }, void 0, false, {
                        fileName: "[project]/components/LiveStatsCycler.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            values[index],
                            " pessoas online"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LiveStatsCycler.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LiveStatsCycler.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "live-recent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "live-clock",
                        children: "⏱"
                    }, void 0, false, {
                        fileName: "[project]/components/LiveStatsCycler.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            recentJoiners,
                            " pessoas entraram nos últimos minutos"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LiveStatsCycler.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LiveStatsCycler.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LiveStatsCycler.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(LiveStatsCycler, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = LiveStatsCycler;
var _c;
__turbopack_context__.k.register(_c, "LiveStatsCycler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1af77gr._.js.map