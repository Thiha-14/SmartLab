(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/projects/SmartLab/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
// import { useRouter } from 'next/navigation';
// import { useAuth } from './AuthContext';
// import { useEffect } from 'react';
// export default function RootPage() {
//     const { user, loading } = useAuth();
//     const router = useRouter();
//     useEffect(() => {
//         router.prefetch('/dashboard');
//         router.prefetch('/login');
//     }, [router]);
//     useEffect(() => {
//         if (!loading) {
//             if (user) {
//                 router.push('/dashboard');
//             } else {
//                 router.push('/login');
//             }
//         }
//     }, [user, loading, router]);
//     return (
//         <div className="flex h-screen items-center justify-center bg-zinc-950">
//             <div className="flex flex-col items-center gap-4 text-center">
//                 <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//                 <div className="space-y-1">
//                     <span className="text-white font-bold tracking-[0.2em] text-lg block uppercase">Smart Lab</span>
//                     <span className="text-blue-500 font-medium tracking-widest text-xs animate-pulse">Loading...</span>
//                 </div>
//             </div>
//         </div>
//     );
// }
__turbopack_context__.s([
    "default",
    ()=>RootPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$SmartLab$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/SmartLab/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$SmartLab$2f$app$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/SmartLab/app/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$SmartLab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/SmartLab/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function RootPage() {
    _s();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$SmartLab$2f$app$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$SmartLab$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$SmartLab$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootPage.useEffect": ()=>{
            if (!loading) {
                router.replace('/login');
            }
        }
    }["RootPage.useEffect"], [
        user,
        loading,
        router
    ]);
    return null;
}
_s(RootPage, "Zr2WDa/YWeMetzDhcnOimt0LiKE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$SmartLab$2f$app$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$SmartLab$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RootPage;
var _c;
__turbopack_context__.k.register(_c, "RootPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/SmartLab/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/projects/SmartLab/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_projects_SmartLab_372897e7._.js.map