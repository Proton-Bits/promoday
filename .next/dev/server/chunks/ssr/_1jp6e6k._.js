module.exports = [
"[project]/lib/meta-pixel.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function trackViewContent(group) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function trackContact(group) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/components/WhatsappButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsappButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2d$pixel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/meta-pixel.ts [app-ssr] (ecmascript)");
"use client";
;
;
function WhatsappButton({ href, children, trackingGroup }) {
    function handleClick(event) {
        event.preventDefault();
        window.open(href, "_blank");
        if (trackingGroup) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meta$2d$pixel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackContact"])(trackingGroup);
        } else {
            window.fbq?.("track", "Contact");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
}),
];

//# sourceMappingURL=_1jp6e6k._.js.map