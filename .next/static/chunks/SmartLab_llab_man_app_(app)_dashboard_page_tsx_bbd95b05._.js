(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// --- Lazy Load Recharts (Performance Fix) ---
const AreaChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/SmartLab/llab_man/node_modules/recharts/es6/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.AreaChart), {
    loadableGenerated: {
        modules: [
            "[project]/SmartLab/llab_man/node_modules/recharts/es6/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = AreaChart;
const Area = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/SmartLab/llab_man/node_modules/recharts/es6/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.Area), {
    loadableGenerated: {
        modules: [
            "[project]/SmartLab/llab_man/node_modules/recharts/es6/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = Area;
const XAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/SmartLab/llab_man/node_modules/recharts/es6/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.XAxis), {
    loadableGenerated: {
        modules: [
            "[project]/SmartLab/llab_man/node_modules/recharts/es6/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = XAxis;
const YAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/SmartLab/llab_man/node_modules/recharts/es6/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.YAxis), {
    loadableGenerated: {
        modules: [
            "[project]/SmartLab/llab_man/node_modules/recharts/es6/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c3 = YAxis;
const Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/SmartLab/llab_man/node_modules/recharts/es6/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.Tooltip), {
    loadableGenerated: {
        modules: [
            "[project]/SmartLab/llab_man/node_modules/recharts/es6/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c4 = Tooltip;
const ResponsiveContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/SmartLab/llab_man/node_modules/recharts/es6/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.ResponsiveContainer), {
    loadableGenerated: {
        modules: [
            "[project]/SmartLab/llab_man/node_modules/recharts/es6/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c5 = ResponsiveContainer;
// --- Static Data ---
const dataUsage = [
    {
        name: 'Mon',
        usage: 45
    },
    {
        name: 'Tue',
        usage: 52
    },
    {
        name: 'Wed',
        usage: 38
    },
    {
        name: 'Thu',
        usage: 65
    },
    {
        name: 'Fri',
        usage: 48
    },
    {
        name: 'Sat',
        usage: 20
    },
    {
        name: 'Sun',
        usage: 15
    }
];
function DashboardPage() {
    _s();
    // --- Dashboard State ---
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        users: 0,
        labs: 0,
        equipment: 0,
        maintenance: 0
    });
    const [isBookingOpen, setIsBookingOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Booking Form State ---
    const [bookingData, setBookingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        labName: '',
        date: '',
        startTime: '',
        endTime: '',
        purpose: '',
        type: 'Research' // Default type
    });
    // --- Load Data ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const users = JSON.parse(localStorage.getItem('sl_users') || '[]');
                const labs = JSON.parse(localStorage.getItem('sl_labs') || '[]');
                const equip = JSON.parse(localStorage.getItem('sl_equipment') || '[]');
                const bookings = JSON.parse(localStorage.getItem('sl_bookings') || '[]');
                setCounts({
                    users: users.length,
                    labs: labs.length,
                    equipment: equip.length,
                    maintenance: bookings.filter({
                        "DashboardPage.useEffect": (b)=>b.type === 'Maintenance'
                    }["DashboardPage.useEffect"]).length
                });
            }
        }
    }["DashboardPage.useEffect"], []);
    // --- Handlers ---
    const handleSaveBooking = ()=>{
        if (!bookingData.labName || !bookingData.date || !bookingData.startTime) {
            __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                title: 'Missing Information',
                text: 'Please fill in all required fields',
                icon: 'warning',
                confirmButtonColor: '#f59e0b',
                confirmButtonText: 'OK'
            });
            return;
        }
        // Logic to save to localStorage
        const labName = bookingData.labName;
        const newBooking = {
            id: 'b' + Date.now(),
            ...bookingData,
            status: 'Confirmed',
            createdAt: new Date().toISOString()
        };
        const existingBookings = JSON.parse(localStorage.getItem('sl_bookings') || '[]');
        localStorage.setItem('sl_bookings', JSON.stringify([
            ...existingBookings,
            newBooking
        ]));
        // Reset and Close
        setBookingData({
            labName: '',
            date: '',
            startTime: '',
            endTime: '',
            purpose: '',
            type: 'Research'
        });
        setIsBookingOpen(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            title: 'Booking Created!',
            text: "Your booking for ".concat(labName, " has been confirmed."),
            icon: 'success',
            confirmButtonColor: '#2563eb',
            confirmButtonText: 'Done'
        });
    };
    const stats = [
        {
            label: 'Total Users',
            value: counts.users,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        },
        {
            label: 'Lab Rooms',
            value: counts.labs,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
            color: 'text-indigo-600',
            bg: 'bg-indigo-50'
        },
        {
            label: 'Equipment',
            value: counts.equipment,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
            color: 'text-emerald-600',
            bg: 'bg-emerald-50'
        },
        {
            label: 'Maintenance',
            value: counts.maintenance,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
            color: 'text-amber-600',
            bg: 'bg-amber-50'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl md:text-3xl font-bold text-slate-900 tracking-tight",
                                children: "Main Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm md:text-base text-slate-500 font-medium",
                                children: "An overview of lab status and users."
                            }, void 0, false, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 w-full md:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex-1 md:flex-none px-4 md:px-6 py-3 text-xs md:text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all",
                                children: "Report"
                            }, void 0, false, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsBookingOpen(true),
                                className: "flex-1 md:flex-none px-4 md:px-6 py-3 text-xs md:text-sm font-bold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 transition-all",
                                children: "New Booking"
                            }, void 0, false, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            isBookingOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-lg animate-in fade-in duration-300 p-0 sm:p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full sm:h-auto sm:max-w-lg sm:max-h-[95vh] flex flex-col overflow-hidden rounded-0 sm:rounded-[32px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-3xl border border-white/40 shadow-2xl pointer-events-none",
                            style: {
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)',
                                backdropFilter: 'blur(20px)',
                                boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255,255,255,0.2)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 overflow-hidden flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden px-5 sm:px-8 py-6 sm:py-8 bg-gradient-to-br from-blue-500/80 via-blue-400/60 to-blue-600/70 border-b border-white/30 backdrop-blur-md flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 opacity-20 bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex justify-between items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl sm:text-3xl font-black mb-1 sm:mb-2 text-white drop-shadow-lg",
                                                            children: "New Booking"
                                                        }, void 0, false, {
                                                            fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs sm:text-sm text-white/90 font-semibold tracking-wide flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-white animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Reserve a lab session"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsBookingOpen(false),
                                                    className: "w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-2xl sm:rounded-3xl bg-white/20 hover:bg-white/30 border border-white/40 hover:border-white/60 transition-all backdrop-blur-sm group/close",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        size: 20,
                                                        className: "sm:w-6 sm:h-6 text-white group-hover/close:rotate-90 transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-y-auto flex-1 px-5 sm:px-8 py-6 sm:py-8 space-y-4 sm:space-y-6 bg-gradient-to-b from-white/10 via-white/5 to-white/5 backdrop-blur-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 sm:space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 sm:space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] sm:text-xs font-black text-white uppercase tracking-widest",
                                                        children: "Select Lab"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: bookingData.labName,
                                                        onChange: (e)=>setBookingData({
                                                                ...bookingData,
                                                                labName: e.target.value
                                                            }),
                                                        className: "w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/15 border border-white/40 rounded-2xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-sm sm:text-base placeholder:text-white/50 backdrop-blur-sm text-white cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                className: "text-slate-800",
                                                                children: "Choose a lab..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Physics Lab A",
                                                                className: "text-slate-800",
                                                                children: "Physics Lab A"
                                                            }, void 0, false, {
                                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Chemistry Lab B",
                                                                className: "text-slate-800",
                                                                children: "Chemistry Lab B"
                                                            }, void 0, false, {
                                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Biology Lab C",
                                                                className: "text-slate-800",
                                                                children: "Biology Lab C"
                                                            }, void 0, false, {
                                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 sm:space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] sm:text-xs font-black text-white uppercase tracking-widest",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: bookingData.date,
                                                        onChange: (e)=>setBookingData({
                                                                ...bookingData,
                                                                date: e.target.value
                                                            }),
                                                        className: "w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/15 border border-white/40 rounded-2xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-sm sm:text-base placeholder:text-white/50 backdrop-blur-sm text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3 sm:gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 sm:space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] sm:text-xs font-black text-white uppercase tracking-widest",
                                                                children: "Start Time"
                                                            }, void 0, false, {
                                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "time",
                                                                value: bookingData.startTime,
                                                                onChange: (e)=>setBookingData({
                                                                        ...bookingData,
                                                                        startTime: e.target.value
                                                                    }),
                                                                className: "w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/15 border border-white/40 rounded-2xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-sm sm:text-base placeholder:text-white/50 backdrop-blur-sm text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 sm:space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] sm:text-xs font-black text-white uppercase tracking-widest",
                                                                children: "End Time"
                                                            }, void 0, false, {
                                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "time",
                                                                value: bookingData.endTime,
                                                                onChange: (e)=>setBookingData({
                                                                        ...bookingData,
                                                                        endTime: e.target.value
                                                                    }),
                                                                className: "w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/15 border border-white/40 rounded-2xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-sm sm:text-base placeholder:text-white/50 backdrop-blur-sm text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 sm:space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] sm:text-xs font-black text-white uppercase tracking-widest",
                                                        children: "Purpose"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: bookingData.purpose,
                                                        onChange: (e)=>setBookingData({
                                                                ...bookingData,
                                                                purpose: e.target.value
                                                            }),
                                                        className: "w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/15 border border-white/40 rounded-2xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-sm sm:text-base placeholder:text-white/50 backdrop-blur-sm text-white min-h-20 resize-none",
                                                        placeholder: "Enter description..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 sm:space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] sm:text-xs font-black text-white uppercase tracking-widest",
                                                        children: "Classification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2 sm:gap-3",
                                                        children: [
                                                            'Research',
                                                            'Class',
                                                            'Maintenance',
                                                            'Private'
                                                        ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setBookingData({
                                                                        ...bookingData,
                                                                        type: type
                                                                    }),
                                                                className: "py-2 sm:py-3 rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest transition-all ".concat(bookingData.type === type ? type === 'Research' ? 'bg-blue-600 text-white shadow-lg' : type === 'Class' ? 'bg-emerald-600 text-white shadow-lg' : type === 'Maintenance' ? 'bg-amber-600 text-white shadow-lg' : 'bg-slate-600 text-white shadow-lg' : 'bg-white/10 text-white/70 border border-white/20 hover:border-white/40 hover:bg-white/20'),
                                                                children: type
                                                            }, type, false, {
                                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4 px-5 sm:px-8 py-4 sm:py-6 bg-gradient-to-t from-white/10 to-transparent border-t border-white/30 backdrop-blur-md flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsBookingOpen(false),
                                            className: "order-2 sm:order-1 flex-1 py-3 sm:py-4 font-black text-white hover:text-white rounded-2xl transition-all border border-white/40 hover:border-white/60 bg-white/10 hover:bg-white/20 text-sm sm:text-base backdrop-blur-sm group/cancel",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSaveBooking,
                                            className: "order-1 sm:order-2 flex-1 py-3 sm:py-4 bg-gradient-to-r from-white/40 to-white/30 text-white rounded-2xl font-black shadow-xl shadow-white/20 hover:shadow-white/30 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm sm:text-base group/create backdrop-blur-sm border border-white/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 16,
                                                    className: "sm:w-[18px] sm:h-[18px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 19
                                                }, this),
                                                " Confirm Booking"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",
                children: stats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 md:p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 md:w-12 md:h-12 rounded-2xl ".concat(stat.bg, " ").concat(stat.color, " flex items-center justify-center mb-4"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                    size: 20,
                                    className: "md:w-6 md:h-6"
                                }, void 0, false, {
                                    fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl md:text-3xl font-bold text-slate-900 leading-none",
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 bg-white p-5 md:p-8 rounded-4xl border border-slate-100 shadow-sm overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 md:mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg md:text-xl font-bold text-slate-900",
                                        children: "Lab Usage History"
                                    }, void 0, false, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs md:text-sm text-slate-400",
                                        children: "Weekly activity summary"
                                    }, void 0, false, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-50 sm:h-62.5 md:h-75 w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResponsiveContainer, {
                                    width: "100%",
                                    height: 300,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AreaChart, {
                                        data: dataUsage,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: "colorUsage",
                                                    x1: "0",
                                                    y1: "0",
                                                    x2: "0",
                                                    y2: "1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "5%",
                                                            stopColor: "#2563eb",
                                                            stopOpacity: 0.1
                                                        }, void 0, false, {
                                                            fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "95%",
                                                            stopColor: "#2563eb",
                                                            stopOpacity: 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XAxis, {
                                                dataKey: "name",
                                                axisLine: false,
                                                tickLine: false,
                                                tick: {
                                                    fill: '#94a3b8',
                                                    fontSize: 10
                                                },
                                                dy: 10
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YAxis, {
                                                axisLine: false,
                                                tickLine: false,
                                                tick: {
                                                    fill: '#94a3b8',
                                                    fontSize: 10
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                                contentStyle: {
                                                    borderRadius: '12px',
                                                    border: 'none',
                                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Area, {
                                                type: "monotone",
                                                dataKey: "usage",
                                                stroke: "#2563eb",
                                                strokeWidth: 3,
                                                fillOpacity: 1,
                                                fill: "url(#colorUsage)"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 305,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950 p-6 md:p-8 rounded-4xl shadow-lg text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg md:text-xl font-bold mb-6 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                size: 20,
                                                className: "text-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 15
                                            }, this),
                                            " Recent Updates"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            {
                                                text: 'Lab 1 Temp: 22°C',
                                                type: 'Status',
                                                color: 'text-emerald-400'
                                            },
                                            {
                                                text: 'System Running Well',
                                                type: 'Stats',
                                                color: 'text-blue-400'
                                            },
                                            {
                                                text: '3 New Member Requests',
                                                type: 'Alert',
                                                color: 'text-amber-400'
                                            }
                                        ].map((alert, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 md:p-4 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] md:text-xs font-bold text-white mb-1",
                                                            children: alert.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] md:text-[10px] font-bold uppercase ".concat(alert.color),
                                                            children: alert.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 19
                                                }, this)
                                            }, idx, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full mt-6 md:mt-8 py-3 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all text-xs md:text-sm",
                                        children: [
                                            "View All",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-5 md:p-6 rounded-4xl border border-slate-100 shadow-sm flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            size: 20,
                                            className: "md:w-6 md:h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold text-slate-400 uppercase tracking-tight",
                                                children: "Current Time"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg md:text-xl font-bold text-slate-900",
                                                children: "08:42:15 AM"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/SmartLab/llab_man/app/(app)/dashboard/page.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "HjI+Pfy6YGRXSgIh49mqMZUWjJw=");
_c6 = DashboardPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "AreaChart");
__turbopack_context__.k.register(_c1, "Area");
__turbopack_context__.k.register(_c2, "XAxis");
__turbopack_context__.k.register(_c3, "YAxis");
__turbopack_context__.k.register(_c4, "Tooltip");
__turbopack_context__.k.register(_c5, "ResponsiveContainer");
__turbopack_context__.k.register(_c6, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=SmartLab_llab_man_app_%28app%29_dashboard_page_tsx_bbd95b05._.js.map