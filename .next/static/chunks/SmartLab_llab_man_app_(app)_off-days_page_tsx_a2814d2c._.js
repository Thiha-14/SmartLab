(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OffDaysPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SmartLab/llab_man/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function OffDaysPage() {
    _s();
    const [holidays, setHolidays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isModalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isViewAllOpen, setViewAllOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentMonth, setCurrentMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 0 = January, 11 = December
    const [currentYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2026);
    const [newHoliday, setNewHoliday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        date: '',
        type: 'National',
        description: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OffDaysPage.useEffect": ()=>{
            // Safety check for window object
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = JSON.parse(localStorage.getItem('sl_holidays') || '[]');
                setHolidays(saved);
            }
        }
    }["OffDaysPage.useEffect"], []);
    const saveHolidays = (updated)=>{
        setHolidays(updated);
        localStorage.setItem('sl_holidays', JSON.stringify(updated));
    };
    const handleAdd = ()=>{
        if (!newHoliday.name || !newHoliday.date) return;
        const holidayName = newHoliday.name;
        const item = {
            id: Date.now().toString(),
            name: newHoliday.name,
            date: newHoliday.date,
            type: newHoliday.type,
            description: newHoliday.description
        };
        saveHolidays([
            ...holidays,
            item
        ]);
        setModalOpen(false);
        setNewHoliday({
            name: '',
            date: '',
            type: 'National',
            description: ''
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            title: 'Holiday Added!',
            text: "".concat(holidayName, " has been registered successfully."),
            icon: 'success',
            confirmButtonColor: '#2563eb',
            confirmButtonText: 'Done'
        });
    };
    const handleDelete = (id)=>{
        const holidayToDelete = holidays.find((h)=>h.id === id);
        __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            title: 'Delete Entry?',
            text: "Are you sure you want to remove ".concat(holidayToDelete === null || holidayToDelete === void 0 ? void 0 : holidayToDelete.name, "? This action cannot be undone."),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc2626',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel'
        }).then((result)=>{
            if (result.isConfirmed) {
                saveHolidays(holidays.filter((h)=>h.id !== id));
                __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire('Deleted!', 'Holiday entry has been removed.', 'success');
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 md:space-y-10 pb-10 md:pb-20 animate-in fade-in duration-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl md:text-4xl font-black text-slate-900 tracking-tight",
                                children: "Holiday Registry"
                            }, void 0, false, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 font-bold text-sm md:text-lg",
                                children: "Define operational blackouts and institutional breaks."
                            }, void 0, false, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setModalOpen(true),
                        className: "w-full md:w-auto flex items-center justify-center gap-2 md:gap-3 bg-slate-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-3xl font-black shadow-lg md:shadow-2xl hover:bg-black hover:-translate-y-1 transition-all uppercase tracking-widest text-[10px] md:text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 18,
                                className: "md:w-5 md:h-5"
                            }, void 0, false, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            "Register Event"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-2 bg-white p-5 md:p-10 rounded-[32px] md:rounded-[48px] border border-slate-50 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-0 mb-6 md:mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg md:text-2xl font-black text-slate-900",
                                        children: [
                                            new Date(currentYear, currentMonth).toLocaleDateString('en-US', {
                                                month: 'long',
                                                year: 'numeric'
                                            }),
                                            " - Malaysia"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 md:gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrentMonth((prev)=>prev === 0 ? 11 : prev - 1),
                                                className: "p-2 md:p-3 hover:bg-slate-50 border border-slate-100 rounded-xl md:rounded-[18px] text-slate-400 hover:text-slate-900 transition-all shadow-sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    size: 20,
                                                    className: "md:w-6 md:h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrentMonth((prev)=>prev === 11 ? 0 : prev + 1),
                                                className: "p-2 md:p-3 hover:bg-slate-50 border border-slate-100 rounded-xl md:rounded-[18px] text-slate-400 hover:text-slate-900 transition-all shadow-sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 20,
                                                    className: "md:w-6 md:h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] md:text-xs font-bold text-slate-600",
                                                children: "National"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] md:text-xs font-bold text-slate-600",
                                                children: "Cultural"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 md:w-4 md:h-4 rounded-full bg-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] md:text-xs font-bold text-slate-600",
                                                children: "School"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] md:text-xs font-bold text-slate-600",
                                                children: "Weekend"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-7 gap-2 md:gap-6 mb-4 md:mb-8",
                                children: [
                                    'Mon',
                                    'Tue',
                                    'Wed',
                                    'Thu',
                                    'Fri',
                                    'Sat',
                                    'Sun'
                                ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-[0.15em] md:tracking-[0.3em]",
                                        children: day
                                    }, day, false, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-7 gap-2 md:gap-6",
                                children: (()=>{
                                    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
                                    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                                    const startDay = firstDay === 0 ? 6 : firstDay - 1; // Adjust for Monday start
                                    const cells = [];
                                    // Empty cells before month starts
                                    for(let i = 0; i < startDay; i++){
                                        cells.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square"
                                        }, "empty-".concat(i), false, {
                                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 28
                                        }, this));
                                    }
                                    // Days of the month
                                    for(let day = 1; day <= daysInMonth; day++){
                                        const dateStr = "".concat(currentYear, "-").concat((currentMonth + 1).toString().padStart(2, '0'), "-").concat(day.toString().padStart(2, '0'));
                                        const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();
                                        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                                        const found = holidays.find((h)=>h.date === dateStr);
                                        const getHolidayStyles = ()=>{
                                            if (!found && isWeekend) return 'bg-slate-100 border-slate-200 text-slate-500';
                                            if ((found === null || found === void 0 ? void 0 : found.type) === 'National') return 'bg-red-50 border-red-200 text-red-600 shadow-xl shadow-red-500/5';
                                            if ((found === null || found === void 0 ? void 0 : found.type) === 'Cultural') return 'bg-green-50 border-green-200 text-green-600 shadow-xl shadow-green-500/5';
                                            if ((found === null || found === void 0 ? void 0 : found.type) === 'School') return 'bg-amber-50 border-amber-200 text-amber-600 shadow-xl shadow-amber-500/5';
                                            if ((found === null || found === void 0 ? void 0 : found.type) === 'Weekend') return 'bg-blue-50 border-blue-200 text-blue-600 shadow-xl shadow-blue-500/5';
                                            return 'bg-white border-slate-50 text-slate-700 hover:border-blue-200 hover:scale-105';
                                        };
                                        cells.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square flex flex-col items-center justify-center rounded-xl md:rounded-[28px] border md:border-2 transition-all group relative cursor-pointer ".concat(getHolidayStyles()),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm md:text-lg font-black",
                                                    children: day
                                                }, void 0, false, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, this),
                                                (found || isWeekend) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-1 right-1 md:top-2 md:right-2 w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full ring-2 md:ring-4 ring-white shadow-md md:shadow-lg ".concat((found === null || found === void 0 ? void 0 : found.type) === 'National' ? 'bg-red-500' : (found === null || found === void 0 ? void 0 : found.type) === 'Cultural' ? 'bg-green-500' : (found === null || found === void 0 ? void 0 : found.type) === 'School' ? 'bg-amber-500' : (found === null || found === void 0 ? void 0 : found.type) === 'Weekend' ? 'bg-blue-500' : 'bg-slate-400')
                                                }, void 0, false, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 23
                                                }, this),
                                                found && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-x-0 bottom-0 py-1.5 md:py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-b-xl md:rounded-b-[28px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[7px] md:text-[8px] font-black uppercase truncate px-1 md:px-2 block",
                                                        children: found.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, day, true, {
                                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this));
                                    }
                                    return cells;
                                })()
                            }, void 0, false, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 md:p-10 rounded-[32px] md:rounded-[48px] border border-slate-50 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-6 md:mb-10 border-b border-slate-50 pb-4 md:pb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg md:text-xl font-black text-slate-900",
                                        children: "Scheduled Events"
                                    }, void 0, false, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewAllOpen(true),
                                        className: "text-[10px] md:text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl hover:bg-blue-50 transition-all",
                                        children: "View All"
                                    }, void 0, false, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 md:space-y-6",
                                children: [
                                    holidays.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8 md:py-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                size: 36,
                                                className: "md:w-12 md:h-12 mx-auto text-slate-100 mb-3 md:mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-300 font-black uppercase tracking-widest text-[10px] md:text-xs",
                                                children: "No entries detected"
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    holidays.sort((a, b)=>new Date(a.date).getTime() - new Date(b.date).getTime()).slice(0, 3).map((holiday)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group p-4 md:p-6 bg-slate-50/50 rounded-2xl md:rounded-[32px] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl md:hover:shadow-2xl hover:shadow-blue-500/5 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-3 md:mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[8px] md:text-[9px] font-black uppercase px-2 md:px-3 py-1 md:py-1.5 rounded-full tracking-widest ".concat(holiday.type === 'National' ? 'bg-red-100 text-red-600' : holiday.type === 'Cultural' ? 'bg-green-100 text-green-600' : holiday.type === 'School' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'),
                                                            children: holiday.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(holiday.id),
                                                                className: "p-2 md:p-2.5 text-slate-300 hover:text-rose-600 bg-white rounded-lg md:rounded-xl shadow-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    size: 14,
                                                                    className: "md:w-4 md:h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 174
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-black text-slate-900 text-base md:text-lg mb-2",
                                                    children: holiday.name
                                                }, void 0, false, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, this),
                                                holiday.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] md:text-xs text-slate-500 mb-3 font-medium",
                                                    children: holiday.description
                                                }, void 0, false, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 md:gap-3 text-xs md:text-sm font-bold text-slate-400 bg-white/50 w-fit px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            size: 14,
                                                            className: "md:w-4 md:h-4 text-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 19
                                                        }, this),
                                                        new Date(holiday.date).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, holiday.id, true, {
                                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-2xl animate-in fade-in duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-[32px] md:rounded-[48px] bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-3xl border border-white/40 shadow-2xl pointer-events-none",
                            style: {
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 100%)',
                                backdropFilter: 'blur(20px)',
                                boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255,255,255,0.2)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden p-5 md:p-8 bg-gradient-to-br from-blue-500/80 via-blue-400/60 to-blue-600/70 border-b border-white/30 backdrop-blur-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 opacity-20 bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex justify-between items-start md:items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-3xl md:text-4xl font-black mb-1 md:mb-3 text-white drop-shadow-lg",
                                                            children: "Define Event"
                                                        }, void 0, false, {
                                                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs md:text-sm text-white/90 font-semibold tracking-wide flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-white animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Register institutional holidays"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setModalOpen(false),
                                                    className: "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl md:rounded-3xl bg-white/20 hover:bg-white/30 border border-white/40 hover:border-white/60 transition-all backdrop-blur-sm group/close",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        size: 22,
                                                        className: "md:w-6 md:h-6 text-white group-hover/close:rotate-90 transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 md:p-10 space-y-6 md:space-y-8 overflow-y-auto bg-gradient-to-b from-white/10 via-white/5 to-white/5 backdrop-blur-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 md:space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 md:space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] md:text-xs font-black text-white uppercase tracking-widest",
                                                        children: "Event Label"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "e.g. Winter Research Break",
                                                        className: "w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base placeholder:text-white/50 backdrop-blur-sm text-white",
                                                        value: newHoliday.name,
                                                        onChange: (e)=>setNewHoliday({
                                                                ...newHoliday,
                                                                name: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 270,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 md:space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] md:text-xs font-black text-white uppercase tracking-widest",
                                                        children: "Event Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: "w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base placeholder:text-white/50 backdrop-blur-sm text-white",
                                                        value: newHoliday.date,
                                                        onChange: (e)=>setNewHoliday({
                                                                ...newHoliday,
                                                                date: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 md:space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] md:text-xs font-black text-white uppercase tracking-widest",
                                                        children: "Description (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "e.g. Federal public holiday",
                                                        className: "w-full px-4 md:px-6 py-3.5 md:py-5 bg-white/15 border border-white/40 rounded-2xl md:rounded-3xl outline-none focus:ring-2 focus:ring-white/60 focus:border-white/60 focus:bg-white/25 transition-all font-semibold text-base placeholder:text-white/50 backdrop-blur-sm text-white",
                                                        value: newHoliday.description,
                                                        onChange: (e)=>setNewHoliday({
                                                                ...newHoliday,
                                                                description: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 md:space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] md:text-xs font-black text-white uppercase tracking-widest",
                                                        children: "Classification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            'National',
                                                            'Cultural',
                                                            'School',
                                                            'Weekend'
                                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setNewHoliday({
                                                                        ...newHoliday,
                                                                        type: t
                                                                    }),
                                                                className: "py-3 rounded-2xl md:rounded-3xl font-black text-xs uppercase tracking-widest transition-all ".concat(newHoliday.type === t ? t === 'National' ? 'bg-red-600 text-white shadow-lg' : t === 'Cultural' ? 'bg-green-600 text-white shadow-lg' : t === 'School' ? 'bg-amber-600 text-white shadow-lg' : 'bg-blue-600 text-white shadow-lg' : 'bg-white/10 text-white/70 border border-white/20 hover:border-white/40 hover:bg-white/20'),
                                                                children: t
                                                            }, t, false, {
                                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                                lineNumber: 303,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 299,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-t from-white/10 to-transparent border-t border-white/30 backdrop-blur-md shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setModalOpen(false),
                                            className: "order-2 sm:order-1 flex-1 py-3 md:py-4 font-black text-white hover:text-white rounded-2xl md:rounded-3xl transition-all border border-white/40 hover:border-white/60 bg-white/10 hover:bg-white/20 text-sm md:text-base backdrop-blur-sm group/cancel",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleAdd,
                                            className: "order-1 sm:order-2 flex-1 py-3 md:py-4 bg-gradient-to-r from-white/40 to-white/30 text-white rounded-2xl md:rounded-3xl font-black shadow-xl md:shadow-2xl shadow-white/20 hover:shadow-white/30 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm md:text-base group/create backdrop-blur-sm border border-white/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 18,
                                                    className: "md:w-5 md:h-5 group-hover/create:rotate-12 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 19
                                                }, this),
                                                " Finalize Registration"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                    lineNumber: 234,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this),
            isViewAllOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white w-full max-w-3xl rounded-[48px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center p-10 border-b border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-black text-slate-900",
                                    children: "All Holidays"
                                }, void 0, false, {
                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewAllOpen(false),
                                    className: "w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                    lineNumber: 348,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-10 overflow-y-auto",
                            children: holidays.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        size: 64,
                                        className: "mx-auto text-slate-100 mb-6"
                                    }, void 0, false, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 355,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300 font-black uppercase tracking-widest text-sm",
                                        children: "No holidays scheduled"
                                    }, void 0, false, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                lineNumber: 354,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: holidays.sort((a, b)=>new Date(a.date).getTime() - new Date(b.date).getTime()).map((holiday)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group p-6 bg-slate-50/50 rounded-[32px] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest ".concat(holiday.type === 'National' ? 'bg-red-100 text-red-600' : holiday.type === 'Cultural' ? 'bg-green-100 text-green-600' : holiday.type === 'School' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'),
                                                        children: holiday.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            handleDelete(holiday.id);
                                                            if (holidays.length === 1) setViewAllOpen(false);
                                                        },
                                                        className: "p-2.5 text-slate-300 hover:text-rose-600 bg-white rounded-xl shadow-sm opacity-0 group-hover:opacity-100 transition-all",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-black text-slate-900 text-lg mb-2",
                                                children: holiday.name
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 23
                                            }, this),
                                            holiday.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 mb-3 font-medium",
                                                children: holiday.description
                                            }, void 0, false, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 text-sm font-bold text-slate-400 bg-white/50 w-fit px-3 py-1.5 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SmartLab$2f$llab_man$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        size: 16,
                                                        className: "text-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 25
                                                    }, this),
                                                    new Date(holiday.date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                                lineNumber: 385,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, holiday.id, true, {
                                        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                                lineNumber: 359,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                            lineNumber: 352,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                    lineNumber: 345,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
                lineNumber: 344,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/SmartLab/llab_man/app/(app)/off-days/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(OffDaysPage, "w02l3Tfk1btbTwQz5CXYojHeBZE=");
_c = OffDaysPage;
var _c;
__turbopack_context__.k.register(_c, "OffDaysPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=SmartLab_llab_man_app_%28app%29_off-days_page_tsx_a2814d2c._.js.map