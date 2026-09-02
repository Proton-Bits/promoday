(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/meta-pixel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trackContact",
    ()=>trackContact,
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
function trackContact(group) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.fbq?.("track", "Contact", {
        content_category: group
    });
}
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
function WhatsappButton({ href, children, trackingGroup }) {
    function handleClick(event) {
        event.preventDefault();
        window.open(href, "_blank");
        if (trackingGroup) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2d$pixel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackContact"])(trackingGroup);
        } else {
            window.fbq?.("track", "Contact");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: "btn-whats",
        onClick: handleClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/WhatsappButton.tsx",
        lineNumber: 39,
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
]);

//# sourceMappingURL=_0x9ox_x._.js.map