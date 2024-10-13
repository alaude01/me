(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_238c10._.js", {

"[project]/lib/utils.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "cn": ()=>cn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}

})()),
"[project]/components/ui/button.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Button": ()=>Button,
    "buttonVariants": ()=>buttonVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Button$React.forwardRef");
__turbopack_refresh__.register(_c1, "Button");

})()),
"[project]/components/ui/scroll-area.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ScrollArea": ()=>ScrollArea,
    "ScrollBar": ()=>ScrollBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const ScrollArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Viewport, {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/components/ui/scroll-area.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Corner, {}, void 0, false, {
                fileName: "[project]/components/ui/scroll-area.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/scroll-area.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = ScrollArea;
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root.displayName;
const ScrollBar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ScrollAreaScrollbar, {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ScrollAreaThumb, {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/components/ui/scroll-area.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/scroll-area.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this));
_c2 = ScrollBar;
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ScrollAreaScrollbar.displayName;
;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "ScrollArea$React.forwardRef");
__turbopack_refresh__.register(_c1, "ScrollArea");
__turbopack_refresh__.register(_c2, "ScrollBar");

})()),
"[project]/components/ui/file-tree.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CollapseButton": ()=>CollapseButton,
    "File": ()=>File,
    "Folder": ()=>Folder,
    "Tree": ()=>Tree
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileIcon$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as FileIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as FolderIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpenIcon$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpenIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/scroll-area.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature(), _s4 = __turbopack_refresh__.signature(), _s5 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const TreeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useTree = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TreeContext);
    if (!context) {
        throw new Error("useTree must be used within a TreeProvider");
    }
    return context;
};
_s(useTree, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const Tree = /*#__PURE__*/ _s1((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s1(({ className, elements, initialSelectedId, initialExpandedItems, children, indicator = true, openIcon, closeIcon, dir, ...props }, ref)=>{
    _s1();
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSelectedId);
    const [expandedItems, setExpandedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialExpandedItems);
    const selectItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setSelectedId(id);
    }, []);
    const handleExpand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setExpandedItems((prev)=>{
            if (prev?.includes(id)) {
                return prev.filter((item)=>item !== id);
            }
            return [
                ...prev ?? [],
                id
            ];
        });
    }, []);
    const expandSpecificTargetedElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((elements, selectId)=>{
        if (!elements || !selectId) return;
        const findParent = (currentElement, currentPath = [])=>{
            const isSelectable = currentElement.isSelectable ?? true;
            const newPath = [
                ...currentPath,
                currentElement.id
            ];
            if (currentElement.id === selectId) {
                if (isSelectable) {
                    setExpandedItems((prev)=>[
                            ...prev ?? [],
                            ...newPath
                        ]);
                } else {
                    if (newPath.includes(currentElement.id)) {
                        newPath.pop();
                        setExpandedItems((prev)=>[
                                ...prev ?? [],
                                ...newPath
                            ]);
                    }
                }
                return;
            }
            if (isSelectable && currentElement.children && currentElement.children.length > 0) {
                currentElement.children.forEach((child)=>{
                    findParent(child, newPath);
                });
            }
        };
        elements.forEach((element)=>{
            findParent(element);
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialSelectedId) {
            expandSpecificTargetedElements(elements, initialSelectedId);
        }
    }, [
        initialSelectedId,
        elements
    ]);
    const direction = dir === "rtl" ? "rtl" : "ltr";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TreeContext.Provider, {
        value: {
            selectedId,
            expandedItems,
            handleExpand,
            selectItem,
            setExpandedItems,
            indicator,
            openIcon,
            closeIcon,
            direction
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-full", className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                ref: ref,
                className: "h-full relative px-2",
                dir: dir,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root, {
                    ...props,
                    type: "multiple",
                    defaultValue: expandedItems,
                    value: expandedItems,
                    className: "flex flex-col gap-1",
                    onValueChange: (value)=>setExpandedItems((prev)=>[
                                ...prev ?? [],
                                value[0]
                            ]),
                    dir: dir,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/file-tree.tsx",
                    lineNumber: 161,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/file-tree.tsx",
                lineNumber: 156,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/file-tree.tsx",
            lineNumber: 155,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/file-tree.tsx",
        lineNumber: 142,
        columnNumber: 7
    }, this);
}, "pRvOOc9GWFS3JsQAxZH/lEZi0Vc=")), "pRvOOc9GWFS3JsQAxZH/lEZi0Vc=");
_c1 = Tree;
Tree.displayName = "Tree";
const TreeIndicator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_s2(({ className, ...props }, ref)=>{
    _s2();
    const { direction } = useTree();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        dir: direction,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-px bg-muted absolute left-1.5 rtl:right-1.5 py-3 rounded-md hover:bg-slate-300 duration-300 ease-in-out", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/file-tree.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}, "KRREPASH58No9/h8yTaIeh0d81M=", false, function() {
    return [
        useTree
    ];
}));
_c2 = TreeIndicator;
TreeIndicator.displayName = "TreeIndicator";
const Folder = /*#__PURE__*/ _s3((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c3 = _s3(({ className, element, value, isSelectable = true, isSelect, children, ...props }, ref)=>{
    _s3();
    const { direction, handleExpand, expandedItems, indicator, setExpandedItems, openIcon, closeIcon } = useTree();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Item, {
        ...props,
        value: value,
        className: "relative overflow-hidden h-full ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(`flex items-center gap-1 text-sm rounded-md`, className, {
                    "bg-muted rounded-md": isSelect && isSelectable,
                    "cursor-pointer": isSelectable,
                    "cursor-not-allowed opacity-50": !isSelectable
                }),
                disabled: !isSelectable,
                onClick: ()=>handleExpand(value),
                children: [
                    expandedItems?.includes(value) ? openIcon ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpenIcon$3e$__["FolderOpenIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/file-tree.tsx",
                        lineNumber: 260,
                        columnNumber: 28
                    }, this) : closeIcon ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__["FolderIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/file-tree.tsx",
                        lineNumber: 261,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: element
                    }, void 0, false, {
                        fileName: "[project]/components/ui/file-tree.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/file-tree.tsx",
                lineNumber: 246,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content, {
                className: "text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down relative overflow-hidden h-full",
                children: [
                    element && indicator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TreeIndicator, {
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/file-tree.tsx",
                        lineNumber: 265,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root, {
                        dir: direction,
                        type: "multiple",
                        className: "flex flex-col gap-1 py-1 ml-5 rtl:mr-5 ",
                        defaultValue: expandedItems,
                        value: expandedItems,
                        onValueChange: (value)=>{
                            setExpandedItems?.((prev)=>[
                                    ...prev ?? [],
                                    value[0]
                                ]);
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/ui/file-tree.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/file-tree.tsx",
                lineNumber: 264,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/file-tree.tsx",
        lineNumber: 241,
        columnNumber: 7
    }, this);
}, "+NBz4LycSQrKqpv+/qdn6An4OOY=", false, function() {
    return [
        useTree
    ];
})), "+NBz4LycSQrKqpv+/qdn6An4OOY=", false, function() {
    return [
        useTree
    ];
});
_c4 = Folder;
Folder.displayName = "Folder";
const File = /*#__PURE__*/ _s4((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = _s4(({ value, className, handleSelect, isSelectable = true, isSelect, fileIcon, children, ...props }, ref)=>{
    _s4();
    const { direction, selectedId, selectItem } = useTree();
    const isSelected = isSelect ?? selectedId === value;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Item, {
        value: value,
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger, {
            ref: ref,
            ...props,
            dir: direction,
            disabled: !isSelectable,
            "aria-label": "File",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 cursor-pointer text-sm pr-1 rtl:pl-1 rtl:pr-0 rounded-md  duration-200 ease-in-out", {
                "bg-muted": isSelected && isSelectable
            }, isSelectable ? "cursor-pointer" : "opacity-50 cursor-not-allowed", className),
            onClick: ()=>selectItem(value),
            children: [
                fileIcon ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileIcon$3e$__["FileIcon"], {
                    className: "size-4"
                }, void 0, false, {
                    fileName: "[project]/components/ui/file-tree.tsx",
                    lineNumber: 329,
                    columnNumber: 24
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/file-tree.tsx",
            lineNumber: 313,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/file-tree.tsx",
        lineNumber: 312,
        columnNumber: 7
    }, this);
}, "RPRtgMoE0FXmAcgcT5Np4wliRHE=", false, function() {
    return [
        useTree
    ];
})), "RPRtgMoE0FXmAcgcT5Np4wliRHE=", false, function() {
    return [
        useTree
    ];
});
_c6 = File;
File.displayName = "File";
const CollapseButton = /*#__PURE__*/ _s5((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = _s5(({ className, elements, expandAll = false, children, ...props }, ref)=>{
    _s5();
    const { expandedItems, setExpandedItems } = useTree();
    const expendAllTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((elements)=>{
        const expandTree = (element)=>{
            const isSelectable = element.isSelectable ?? true;
            if (isSelectable && element.children && element.children.length > 0) {
                setExpandedItems?.((prev)=>[
                        ...prev ?? [],
                        element.id
                    ]);
                element.children.forEach(expandTree);
            }
        };
        elements.forEach(expandTree);
    }, []);
    const closeAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setExpandedItems?.([]);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log(expandAll);
        if (expandAll) {
            expendAllTree(elements);
        }
    }, [
        expandAll
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "ghost",
        className: "h-8 w-fit p-1 absolute bottom-1 right-2",
        onClick: expandedItems && expandedItems.length > 0 ? closeAll : ()=>expendAllTree(elements),
        ref: ref,
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle"
            }, void 0, false, {
                fileName: "[project]/components/ui/file-tree.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/file-tree.tsx",
        lineNumber: 372,
        columnNumber: 5
    }, this);
}, "1GsyklBDCWIlyo0HBRXjS30t064=", false, function() {
    return [
        useTree
    ];
})), "1GsyklBDCWIlyo0HBRXjS30t064=", false, function() {
    return [
        useTree
    ];
});
_c8 = CollapseButton;
CollapseButton.displayName = "CollapseButton";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_refresh__.register(_c, "Tree$forwardRef");
__turbopack_refresh__.register(_c1, "Tree");
__turbopack_refresh__.register(_c2, "TreeIndicator");
__turbopack_refresh__.register(_c3, "Folder$forwardRef");
__turbopack_refresh__.register(_c4, "Folder");
__turbopack_refresh__.register(_c5, "File$forwardRef");
__turbopack_refresh__.register(_c6, "File");
__turbopack_refresh__.register(_c7, "CollapseButton$forwardRef");
__turbopack_refresh__.register(_c8, "CollapseButton");

})()),
"[project]/app/authentication/Boxcode.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__ = __turbopack_import__("[project]/node_modules/react-syntax-highlighter/dist/esm/prism.js [app-client] (ecmascript) <export default as Prism>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$one$2d$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-syntax-highlighter/dist/esm/styles/prism/one-light.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$one$2d$dark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-syntax-highlighter/dist/esm/styles/prism/one-dark.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const CodeBlock = ({ code, language })=>{
    _s();
    const { theme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])(); // Use resolvedTheme to handle SSR.
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Ensure correct rendering only after mount.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true); // Indicate that the component has been mounted.
    }, []);
    const customStyle = {
        borderRadius: "0.75rem"
    };
    // Prevent rendering until mounted to avoid hydration mismatches.
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__["Prism"], {
        language: language,
        style: resolvedTheme === "light" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$one$2d$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$one$2d$dark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        customStyle: customStyle,
        showLineNumbers: true,
        children: code
    }, void 0, false, {
        fileName: "[project]/app/authentication/Boxcode.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
_s(CodeBlock, "FdYNd/l6WgAzHtpAjGSneNo5ZTQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = CodeBlock;
const __TURBOPACK__default__export__ = CodeBlock;
var _c;
__turbopack_refresh__.register(_c, "CodeBlock");

})()),
"[project]/app/authentication/data.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "code": ()=>code,
    "details": ()=>details
});
const details = {
    title: "การ Authentication (ออเทนทิเคชั่น) หรือการยืนยันตัวตน คือ กระบวนการตรวจสอบและยืนยันว่า ผู้ใช้หรือระบบที่กำลังพยายามเข้าถึงข้อมูลหรือบริการต่าง ๆ เป็นใคร โดยใช้ข้อมูลที่ใช้ยืนยัน เช่น ชื่อผู้ใช้และรหัสผ่าน, การส่งรหัส OTP ทางข้อความ, หรือการสแกนลายนิ้วมือ การทำเช่นนี้มีจุดประสงค์เพื่อให้แน่ใจว่าผู้ใช้มีสิทธิ์ในการเข้าถึงข้อมูลหรือบริการนั้น ๆ โดยป้องกันไม่ให้บุคคลที่ไม่มีสิทธิ์เข้ามาใช้งาน"
};
const code = {
    main: `package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
	"github.com/phonsing-Hub/EmployeeSystem/src/db"
	"github.com/phonsing-Hub/EmployeeSystem/src/middleware"
	"github.com/phonsing-Hub/EmployeeSystem/src/routing/auth"
	"github.com/phonsing-Hub/EmployeeSystem/src/routing/emp"
	"os"
	"time"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}
	api := os.Getenv("API_VERSION")
	dbuser := os.Getenv("DB_USER")
	dbpass := os.Getenv("DB_PASS")
	dbhost := os.Getenv("DB_HOST")
	dbname := os.Getenv("DB_NAME")

	db, err := db.New(dbuser, dbpass, dbhost, dbname)
	if err != nil {
		panic("failed to connect to database")
	}
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:5173",                       
		AllowMethods:     "GET, POST, PUT, DELETE, OPTIONS",             
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization", 
		AllowCredentials: true,                                          
		MaxAge:           int(24 * time.Hour / time.Second),             
	}))

	app.Use(logger.New())
	//localhost/v1/auth
	auth_v1 := app.Group(api + "/auth")
	auth.SetAuthentication(auth_v1, db.DB)
	emp_v1 := app.Group(api+"/employees", middleware.Token)
	emp.EmployeesRouting(emp_v1, db.DB)
	app.Listen(":3000")
}
  `,
    db: `package db

import (
	"fmt"
	"os"
	"time"
	"github.com/phonsing-Hub/EmployeeSystem/src/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"log"
)

type Db struct {
	DB *gorm.DB
}

func New(dbuser string, dbpass string, dbhost string, dbname string) (*Db, error) {
	dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		dbuser, dbpass, dbhost, dbname)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{Logger: loggerConfig(true)})
	if err != nil {
		return nil, err
	}
	err = db.AutoMigrate(
		&models.Region{},
		&models.Country{},
		&models.Location{},
		&models.Job{},
		&models.Department{},
		&models.Employee{},
		&models.Dependent{},
		&models.AuthUser{},
		&models.Token{},
		&models.Image{},
	)

	if err != nil {
		log.Fatalf("ไม่สามารถ migrate ตารางได้: %v", err)
	}
	return &Db{DB: db}, nil
}

func loggerConfig(enable bool) logger.Interface {
	if enable {
		newLogger := logger.New(
			log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
			logger.Config{
				SlowThreshold:             time.Second, // Slow SQL threshold
				LogLevel:                  logger.Info, // Set log level
				IgnoreRecordNotFoundError: true,        // Ignore ErrRecordNotFound errors
				ParameterizedQueries:      true,        // Don't include raw SQL queries in logs
				Colorful:                  true,        // Colorize logs
			},
		)
		return newLogger
	}

	// Default silent logger if not enabled
	return logger.Default.LogMode(logger.Silent)
}
`,
    md: `package middleware
import(
	"github.com/gofiber/fiber/v2"
	"github.com/phonsing-Hub/EmployeeSystem/src/utils"

)

func Token(c *fiber.Ctx) error {
	_, err := utils.VerifyToken(c.Cookies("emp_auth"));
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).SendString("Unauthorized");
	}
	return c.Next();
}
`,
    models: `package models

import "time"

type Region struct {
	ID         int       \`gorm:"column:region_id;primaryKey;autoIncrement" json:"region_id"\`
	RegionName string    \`gorm:"column:region_name" json:"region_name"\`
	Countries  []Country \`gorm:"foreignKey:RegionID" json:"countries"\`
}

type Country struct {
	ID          string     \`gorm:"column:country_id;primaryKey;size:2" json:"country_id"\`
	CountryName string     \`gorm:"column:country_name" json:"country_name"\`
	RegionID    int        \`gorm:"column:region_id" json:"region_id"\`
	Region      Region     \`gorm:"foreignKey:RegionID" json:"region"\`
	Locations   []Location \`gorm:"foreignKey:CountryID" json:"locations"\`
}

type Location struct {
	ID            int          \`gorm:"column:location_id;primaryKey;autoIncrement" json:"location_id"\`
	StreetAddress string       \`gorm:"column:street_address" json:"street_address"\`
	PostalCode    string       \`gorm:"column:postal_code" json:"postal_code"\`
	City          string       \`gorm:"column:city;not null" json:"city"\`
	StateProvince string       \`gorm:"column:state_province" json:"state_province"\`
	CountryID     string       \`gorm:"column:country_id;size:2;not null" json:"country_id"\`
	Country       Country      \`gorm:"foreignKey:CountryID" json:"country"\`
	Departments   []Department \`gorm:"foreignKey:LocationID" json:"departments"\`
}

type Job struct {
	ID        int        \`gorm:"column:job_id;primaryKey;autoIncrement" json:"job_id"\`
	JobTitle  string     \`gorm:"column:job_title;not null" json:"job_title"\`
	MinSalary float64    \`gorm:"column:min_salary" json:"min_salary"\`
	MaxSalary float64    \`gorm:"column:max_salary" json:"max_salary"\`
	Employees []Employee \`gorm:"foreignKey:JobID" json:"employees"\`
}

type Department struct {
	ID             int        \`gorm:"column:department_id;primaryKey;autoIncrement" json:"department_id"\`
	DepartmentName string     \`gorm:"column:department_name;not null" json:"department_name"\`
	LocationID     int        \`gorm:"column:location_id" json:"location_id"\`
	Location       Location   \`gorm:"foreignKey:LocationID" json:"location"\`
	Employees      []Employee \`gorm:"foreignKey:DepartmentID" json:"employees"\`
}

type Employee struct {
	ID           int         \`gorm:"column:employee_id;primaryKey;autoIncrement" json:"employee_id"\`
	FirstName    string      \`gorm:"column:first_name" json:"first_name"\`
	LastName     string      \`gorm:"column:last_name;not null" json:"last_name"\`
	Email        string      \`gorm:"column:email;not null" json:"email"\`
	PhoneNumber  string      \`gorm:"column:phone_number" json:"phone_number"\`
	HireDate     time.Time   \`gorm:"column:hire_date;not null" json:"hire_date"\`
	JobID        int         \`gorm:"column:job_id;not null" json:"job_id"\`
	Job          Job         \`gorm:"foreignKey:JobID" json:"job"\`
	Salary       float64     \`gorm:"column:salary;not null" json:"salary"\`
	ManagerID    *int        \`gorm:"column:manager_id" json:"manager_id"\`
	Manager      *Employee   \`gorm:"foreignKey:ManagerID" json:"manager"\`
	DepartmentID *int        \`gorm:"column:department_id" json:"department_id"\`
	Department   *Department \`gorm:"foreignKey:DepartmentID" json:"department"\`
	Subordinates []Employee  \`gorm:"foreignKey:ManagerID" json:"subordinates"\`
	Dependents   []Dependent \`gorm:"foreignKey:EmployeeID" json:"dependents"\`
}

type Dependent struct {
	ID           int      \`gorm:"column:dependent_id;primaryKey;autoIncrement" json:"dependent_id"\`
	FirstName    string   \`gorm:"column:first_name;not null" json:"first_name"\`
	LastName     string   \`gorm:"column:last_name;not null" json:"last_name"\`
	Relationship string   \`gorm:"column:relationship;not null" json:"relationship"\`
	EmployeeID   int      \`gorm:"column:employee_id;not null" json:"employee_id"\`
	Employee     Employee \`gorm:"foreignKey:EmployeeID" json:"employee"\`
}

// AuthUser model for authentication
type AuthUser struct {
	EmployeeID       int        \`gorm:"primaryKey;" json:"employee_id"\`
	Email            string     \`gorm:"type:varchar(100);unique;not null"\`
	Password         string     \`gorm:"type:varchar(255);not null"\` // Password should be hashed
	LastLogin        *time.Time // Track the last login time
	Role             string     \`gorm:"type:varchar(20);default:admin"\` // Default role is admin
	ResetToken       string     \`gorm:"type:varchar(255)"\`              // For password reset functionality
	ResetTokenExpiry *time.Time // For tracking token expiration
	Employee         Employee   \`gorm:"foreignKey:EmployeeID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE" json:"employee"\`
}

// Token model for managing JWT tokens
type Token struct {
	UserID    int       \`gorm:"not null"\`
	Token     string    \`gorm:"type:text;not null"\`
	ExpiresAt time.Time \`gorm:"not null"\`
	User      AuthUser  \`gorm:"foreignKey:UserID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE"\`
}

type Image struct {
	ID         int      \`gorm:"column:id;primaryKey;autoIncrement" json:"id"\`
	EmployeeID int      \`gorm:"column:employee_id;not null" json:"employee_id"\`
	FileName   string   \`gorm:"column:file_name;size:100" json:"file_name"\`
	FileType   string   \`gorm:"column:file_type;size:100" json:"file_type"\`
	FileData   []byte   \`gorm:"column:file_data;type:LONGBLOB" json:"file_data"\`
	Employee   Employee \`gorm:"foreignKey:EmployeeID;constraint:OnUpdate:CASCADE,OnDelete:Cascade" json:"employee"\`
}
`,
    auth: `package auth

import (
	"errors"

	"github.com/gofiber/fiber/v2"
	"github.com/phonsing-Hub/EmployeeSystem/src/models"
	"github.com/phonsing-Hub/EmployeeSystem/src/utils"
	"gorm.io/gorm"
	"time"
)

func SetAuthentication(app fiber.Router, db *gorm.DB) {
	app.Get("/", func(c *fiber.Ctx) error {
		return auth(c, db)
	})
	app.Post("/register", func(c *fiber.Ctx) error {
		return register(c, db)
	})
	app.Post("/login", func(c *fiber.Ctx) error {
		return login(c, db)
	})
}

type Employees struct {
	ID       uint   \`json:"id"\`
	Email    string \`json:"email"\`
	Password string \`json:"pass"\`
	Role     string \`json:"role"\`
}

func auth(c *fiber.Ctx, db *gorm.DB) error {
	var user struct {
		ID         uint    \`json:"id"\`
		Name       string  \`json:"firstname"\`
		Lastname   string  \`json:"lastname"\`
		Email      string  \`json:"email"\`
		Phone      string  \`json:"phone"\`
		Department string  \`json:"departmentname"\`
		JobTitle   string  \`json:"positions"\`
		Salary     float64 \`json:"salary"\`
	}
	token := c.Cookies("emp_auth")
	if token == "" {
		return c.Status(fiber.StatusUnauthorized).SendString("Unauthorized")
	}
	deta, err := utils.VerifyToken(c.Cookies("emp_auth"))
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).SendString("Unauthorized")
	}
	id, ok := deta["id"]
	if !ok {
		return c.Status(fiber.StatusInternalServerError).SendString("Failed to retrieve id")
	}

	query := \`
	SELECT
	    e.employee_id AS id,
	    e.first_name AS name,
	    e.last_name AS lastname,
	    e.email,
	    e.phone_number AS phone,
	    d.department_name AS department,
	    j.job_title AS job_title,
	    e.salary
	FROM
	    employees e
	LEFT JOIN
	    departments d ON e.department_id = d.department_id
	LEFT JOIN
	    jobs j ON e.job_id = j.job_id
	WHERE e.employee_id = ?;\`

	if err := db.Raw(query, id).Scan(&user).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Could not fetch employee"})
	}

	if user.ID == 0 {
		return c.Status(404).JSON(fiber.Map{"error": "Employee not found"})
	}

	return c.Status(200).JSON(user)
}

func register(c *fiber.Ctx, db *gorm.DB) error {
	e := new(Employees)
	if err := c.BodyParser(e); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}

	hash, _ := utils.HashPassword(e.Password)
	data := models.AuthUser{
		EmployeeID: int(e.ID),
		Email:      e.Email,
		Password:   hash,
		Role:       e.Role,
	}
	result := db.Create(&data)
	if result.Error != nil {
		return c.Status(fiber.StatusConflict).SendString("create user unsuccessful: " + result.Error.Error())
	}

	return c.Status(fiber.StatusCreated).SendString("create user successful!")
}

func login(c *fiber.Ctx, db *gorm.DB) error {
	e := new(Employees)
	if err := c.BodyParser(e); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}
	var user models.AuthUser
	//   SELECT id, email, password, role FROM mydb.auth_users WHERE email = ?
	if err := db.Select("employee_id, email, password, role").Where("email = ?", e.Email).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return c.Status(fiber.StatusNotFound).SendString("user not found")
		}
		return c.Status(fiber.StatusInternalServerError).SendString("error retrieving user")
	}

	if !utils.CheckPasswordHash(e.Password, user.Password) {
		return c.Status(fiber.StatusUnauthorized).SendString("invalid password")
	}

	//set Tonken
	token, err := utils.CreateToken(uint(user.EmployeeID), user.Email, user.Role)
	if err != nil {
		return c.Status(fiber.StatusConflict).SendString("create user unsuccessful: " + err.Error())
	}
	now := time.Now()
	user.LastLogin = &now
	//UPDATE auth_users SET last_login = <time.Now> WHERE id = <user.ID>;
	if err := db.Model(&user).Update("last_login", user.LastLogin).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString("error updating last login time: " + err.Error())
	}

	var existingToken models.Token
	err = db.Where("user_id = ?", user.EmployeeID).First(&existingToken).Error
	if err != nil && !errors.Is(err, gorm.ErrRecordNotFound) {
		return c.Status(fiber.StatusInternalServerError).SendString("error checking for existing token: " + err.Error())
	}

	if errors.Is(err, gorm.ErrRecordNotFound) {
		//INSERT INTO mydb.tokens (user_id, token, expires_at) VALUES(?, ?, ?);
		tokenModel := models.Token{
			UserID:    user.EmployeeID,
			Token:     token,
			ExpiresAt: time.Now().Add(24 * time.Hour),
		}
		if err := db.Create(&tokenModel).Error; err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("error creating token: " + err.Error())
		}
	} else {
		// UPDATE tokens SET token = <newTokenValue>, expires_at = <newExpiryTime>, updated_at = <currentTime> WHERE id = existingTokenID;
		if err := db.Model(&existingToken).
			Where("user_id = ?", user.EmployeeID).
			Updates(models.Token{Token: token, ExpiresAt: time.Now().Add(24 * time.Hour)}).Error; err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString("error updating token: " + err.Error())
		}
	}
	// set database : CREATE EVENT delete_expired_tokens ON SCHEDULE EVERY 1 HOUR DO DELETE FROM tokens WHERE expires_at < NOW();

	c.Cookie(&fiber.Cookie{
		Name:     "emp_auth",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true,
		Secure:   true,
		SameSite: "Strict",
	})

	return c.Status(fiber.StatusOK).SendString("login successful!")
}
`,
    emp: `package emp

import (
	"github.com/gofiber/fiber/v2"
	"github.com/phonsing-Hub/EmployeeSystem/src/models"
	"github.com/phonsing-Hub/EmployeeSystem/src/utils"
	"gorm.io/gorm"
	"io"
	//"time"
)

func EmployeesRouting(app fiber.Router, db *gorm.DB) {
	app.Get("/", func(c *fiber.Ctx) error {
		return getAllEmployeeDetails(c, db)
	})
	app.Get("/:id", func(c *fiber.Ctx) error {
		return getAllEmployeeById(c, db)
	})
	app.Post("/new", func(c *fiber.Ctx) error {
		return upLoadImage(c, db)
	})

	app.Get("image/:id", func(c *fiber.Ctx) error {
		return getImage(c, db)
	})

}

func getAllEmployeeDetails(c *fiber.Ctx, db *gorm.DB) error {
	var employeeDetails []struct {
		ID         uint    \`json:"id"\`
		Name       string  \`json:"firstname"\`
		Lastname   string  \`json:"lastname"\`
		Email      string  \`json:"email"\`
		Phone      string  \`json:"phone"\`
		Department string  \`json:"department"\`
		JobTitle   string  \`json:"positions"\`
		Hiredate   string  \`json:"hiredate"\`
		Salary     float64 \`json:"salary"\`
	}

	query := \`
	SELECT
	    e.employee_id AS id,
	    e.first_name AS name,
	    e.last_name AS lastname,
	    e.email,
	    e.phone_number AS phone,
	    d.department_name AS department,
	    j.job_title AS job_title,
		e.hire_date AS hiredate,
	    e.salary
	FROM
	    employees e
	LEFT JOIN
	    departments d ON e.department_id = d.department_id
	LEFT JOIN
	    jobs j ON e.job_id = j.job_id;\`

	if err := db.Raw(query).Scan(&employeeDetails).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Could not fetch employee details"})
	}

	return c.Status(200).JSON(employeeDetails)
}

func getAllEmployeeById(c *fiber.Ctx, db *gorm.DB) error {
	id := c.Params("id")
	var employeeById struct {
		ID         uint    \`json:"id"\`
		Name       string  \`json:"firstname"\`
		Lastname   string  \`json:"lastname"\`
		Email      string  \`json:"email"\`
		Phone      string  \`json:"phone"\`
		Department string  \`json:"departmentname"\`
		JobTitle   string  \`json:"positions"\`
		Salary     float64 \`json:"salary"\`
	}

	query := \`
	SELECT
	    e.employee_id AS id,
	    e.first_name AS name,
	    e.last_name AS lastname,
	    e.email,
	    e.phone_number AS phone,
	    d.department_name AS department,
	    j.job_title AS job_title,
	    e.salary
	FROM
	    employees e
	LEFT JOIN
	    departments d ON e.department_id = d.department_id
	LEFT JOIN
	    jobs j ON e.job_id = j.job_id
		WHERE e.employee_id = ?;\`

	if err := db.Raw(query, id).Scan(&employeeById).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Could not fetch employee"})
	}

	if employeeById.ID == 0 {
		return c.Status(404).JSON(fiber.Map{"error": "Employee not found"})
	}

	return c.Status(200).JSON(employeeById)
}

func upLoadImage(c *fiber.Ctx, db *gorm.DB) error {
	// รับไฟล์จาก request
	result, _ := utils.VerifyToken(c.Cookies("emp_auth"))
	id, ok := result["id"].(float64)
	if !ok {
		return c.Status(fiber.StatusInternalServerError).SendString("Failed to retrieve id")
	}

	file, err := c.FormFile("image")
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Cannot get image file",
		})
	}

	// เปิดไฟล์เพื่ออ่านข้อมูล
	fileHeader, err := file.Open()
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Cannot open image file",
		})
	}
	defer fileHeader.Close()

	// อ่านข้อมูลไฟล์ทั้งหมด
	fileData, err := io.ReadAll(fileHeader)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Cannot read image file",
		})
	}

	// สร้าง record ในฐานข้อมูล
	image := models.Image{
		EmployeeID: int(id),
		FileName:   file.Filename,
		FileType:   file.Header.Get("Content-Type"),
		FileData:   fileData,
	}

	// บันทึกข้อมูลลงในฐานข้อมูล
	if err := db.Create(&image).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Cannot save image information",
		})
	}

	// ส่ง response กลับไป
	return c.JSON(fiber.Map{
		"message":   "Image uploaded successfully",
		"image_id":  image.ID,
		"file_name": image.FileName,
	})

}

func getImage(c *fiber.Ctx, db *gorm.DB) error {
	// รับ id ของภาพจาก URL parameter
	imageID := c.Params("id")

	// สร้างโครงสร้างของ Image สำหรับการค้นหาจากฐานข้อมูล
	var image models.Image
	if err := db.First(&image, "employee_id = ?", imageID).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Image not found",
		})
	}

	// ตั้งค่า Content-Type ให้ตรงกับประเภทของไฟล์
	c.Set("Content-Type", image.FileType)

	// ส่งข้อมูลไฟล์กลับไป
	return c.Send(image.FileData)
}

`,
    bcrypt: `package utils

import(
	"golang.org/x/crypto/bcrypt"
)

func HashPassword(password string) (string, error) {
    bytes, err := bcrypt.GenerateFromPassword([]byte(password), 10)
    return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
    err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
    return err == nil
}

`,
    jwt: `package utils

import (
	"crypto/rsa"
	"errors"
	"github.com/golang-jwt/jwt/v5"
	"os"
	"time"
)
// sh
// # create Private Key
// openssl genpkey -algorithm RSA -out private.key-pkeyopt rsa_keygen_bits:2048

// # create Public Key จาก Private Key
// openssl rsa -pubout -in private.key -out public.key

var (
	privateKey *rsa.PrivateKey
	publicKey  *rsa.PublicKey
)

// Initialize keys
func init() {
	// Load Private Key
	privateKeyData, err := os.ReadFile("src/utils/private.key")
	if err != nil {
		panic(err)
	}

	privateKey, err = jwt.ParseRSAPrivateKeyFromPEM(privateKeyData)
	if err != nil {
		panic(err)
	}

	// Load Public Key
	publicKeyData, err := os.ReadFile("src/utils/public.key")
	if err != nil {
		panic(err)
	}

	publicKey, err = jwt.ParseRSAPublicKeyFromPEM(publicKeyData)
	if err != nil {
		panic(err)
	}
}

// CreateToken generates a new JWT token with the provided user ID, email, and role
func CreateToken(id uint, email string, role string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodRS256,
		jwt.MapClaims{
			"id":    id,
			"email": email,
			"role":  role,
			"exp":   time.Now().Add(time.Hour * 24).Unix(), // Token expires in 24 hours
		})

	tokenString, err := token.SignedString(privateKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

// VerifyToken parses and validates the provided JWT token string
func VerifyToken(tokenString string) (jwt.MapClaims, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Ensure the token's signing method is RSA and the same as expected
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, errors.New("unexpected signing method")
		}
		return publicKey, nil
	})

	if err != nil {
		return nil, err
	}

	// Check if the token is valid and contains claims
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims, nil
	}

	return nil, errors.New("invalid token")
}
`
};
;

})()),
"[project]/app/authentication/display.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$scroll$2d$shadow$2f$dist$2f$chunk$2d$NCVCYSZZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__scroll_shadow_default__as__ScrollShadow$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/scroll-shadow/dist/chunk-NCVCYSZZ.mjs [app-client] (ecmascript) <export scroll_shadow_default as ScrollShadow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/file-tree.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authentication$2f$Boxcode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/authentication/Boxcode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authentication$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/authentication/data.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function Display() {
    _s();
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("main.go");
    const [syntaxcode, setSyntaxCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authentication$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["code"].main);
    const activeClass = "bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-md px-1 ";
    const handleSelectFile = (file)=>{
        setSelectedFile(file);
        switch(file){
            case "main.go":
                setSyntaxCode(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authentication$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["code"].main);
                break;
            case "db.go":
                setSyntaxCode(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authentication$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["code"].db);
                break;
            case "middleware.go":
                setSyntaxCode(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authentication$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["code"].md);
                break;
            case "models.go":
                setSyntaxCode(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authentication$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["code"].models);
                break;
            case "auth.go":
                setSyntaxCode(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authentication$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["code"].auth);
                break;
            case "emp.go":
                setSyntaxCode(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authentication$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["code"].emp);
                break;
            case "bcrypt.go":
                setSyntaxCode(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authentication$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["code"].bcrypt);
                break;
            case "jwt.go":
                setSyntaxCode(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authentication$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["code"].jwt);
                break;
            default:
                break;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: " flex mt-4 relative rounded-md border p-1 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex w-1/5 min-w-44 flex-col items-center justify-center overflow-hidden bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tree"], {
                    className: "p-2 overflow-hidden rounded-md bg-background",
                    initialSelectedId: "main",
                    initialExpandedItems: [
                        "src"
                    ],
                    elements: ELEMENTS,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder"], {
                            element: "src",
                            value: "src",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder"], {
                                    value: "db",
                                    element: "db",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File"], {
                                        value: "db.go",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: selectedFile === "db.go" ? activeClass : "",
                                            onClick: ()=>handleSelectFile("db.go"),
                                            children: "db.go"
                                        }, void 0, false, {
                                            fileName: "[project]/app/authentication/display.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/authentication/display.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/authentication/display.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder"], {
                                    value: "middleware",
                                    element: "middleware",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File"], {
                                        value: "middleware.go",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: selectedFile === "middleware.go" ? activeClass : "",
                                            onClick: ()=>handleSelectFile("middleware.go"),
                                            children: "middleware.go"
                                        }, void 0, false, {
                                            fileName: "[project]/app/authentication/display.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/authentication/display.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/authentication/display.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder"], {
                                    value: "models",
                                    element: "models",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File"], {
                                        value: "models.go",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: selectedFile === "models.go" ? activeClass : "",
                                            onClick: ()=>handleSelectFile("models.go"),
                                            children: "models.go"
                                        }, void 0, false, {
                                            fileName: "[project]/app/authentication/display.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/authentication/display.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/authentication/display.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder"], {
                                    value: "routing",
                                    element: "routing",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder"], {
                                            value: "auth",
                                            element: "auth",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File"], {
                                                value: "auth.go",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: selectedFile === "auth.go" ? activeClass : "",
                                                    onClick: ()=>handleSelectFile("auth.go"),
                                                    children: "auth.go"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/authentication/display.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/authentication/display.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/authentication/display.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder"], {
                                            value: "emp",
                                            element: "emp",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File"], {
                                                value: "emp.go",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: selectedFile === "emp.go" ? activeClass : "",
                                                    onClick: ()=>handleSelectFile("emp.go"),
                                                    children: "emp.go"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/authentication/display.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/authentication/display.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/authentication/display.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/authentication/display.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder"], {
                                    value: "utils",
                                    element: "utils",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File"], {
                                            value: "bcrypt.go",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: selectedFile === "bcrypt.go" ? activeClass : "",
                                                onClick: ()=>handleSelectFile("bcrypt.go"),
                                                children: "bcrypt.go"
                                            }, void 0, false, {
                                                fileName: "[project]/app/authentication/display.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/authentication/display.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File"], {
                                            value: "jwt.go",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: selectedFile === "jwt.go" ? activeClass : "",
                                                onClick: ()=>handleSelectFile("jwt.go"),
                                                children: "jwt.go"
                                            }, void 0, false, {
                                                fileName: "[project]/app/authentication/display.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/authentication/display.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/authentication/display.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/authentication/display.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File"], {
                            value: "main",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: selectedFile === "main.go" ? activeClass : "",
                                onClick: ()=>handleSelectFile("main.go"),
                                children: "main.go"
                            }, void 0, false, {
                                fileName: "[project]/app/authentication/display.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/authentication/display.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/authentication/display.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/authentication/display.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-4/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$scroll$2d$shadow$2f$dist$2f$chunk$2d$NCVCYSZZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__scroll_shadow_default__as__ScrollShadow$3e$__["ScrollShadow"], {
                    className: "max-h-[790px]",
                    size: 5,
                    hideScrollBar: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authentication$2f$Boxcode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        code: syntaxcode,
                        language: "go"
                    }, void 0, false, {
                        fileName: "[project]/app/authentication/display.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/authentication/display.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/authentication/display.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/authentication/display.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Display, "OUE+jXipRXpcqzVt+DeV9fnVhfI=");
_c = Display;
const __TURBOPACK__default__export__ = Display;
const ELEMENTS = [
    {
        id: "src",
        isSelectable: true,
        name: "src",
        children: [
            {
                id: "db",
                isSelectable: true,
                name: "db",
                children: [
                    {
                        id: "db.go",
                        isSelectable: true,
                        name: "db.go"
                    }
                ]
            },
            {
                id: "middleware",
                isSelectable: true,
                name: "middleware",
                children: [
                    {
                        id: "middleware.go",
                        isSelectable: true,
                        name: "middleware.go"
                    }
                ]
            },
            {
                id: "models",
                isSelectable: true,
                name: "models",
                children: [
                    {
                        id: "models.go",
                        isSelectable: true,
                        name: "models.go"
                    }
                ]
            },
            {
                id: "routing",
                isSelectable: true,
                name: "routing",
                children: [
                    {
                        id: "auth",
                        isSelectable: true,
                        name: "auth",
                        children: [
                            {
                                id: "auth.go",
                                isSelectable: true,
                                name: "auth.go"
                            }
                        ]
                    },
                    {
                        id: "emp",
                        isSelectable: true,
                        name: "emp",
                        children: [
                            {
                                id: "emp.go",
                                isSelectable: true,
                                name: "emp.go"
                            }
                        ]
                    }
                ]
            },
            {
                id: "utils",
                isSelectable: true,
                name: "utils",
                children: [
                    {
                        id: "bcrypt.go",
                        isSelectable: true,
                        name: "bcrypt.go"
                    },
                    {
                        id: "jwt.go",
                        isSelectable: true,
                        name: "jwt.go"
                    }
                ]
            }
        ]
    },
    {
        id: "main",
        isSelectable: true,
        name: "main.go"
    }
];
var _c;
__turbopack_refresh__.register(_c, "Display");

})()),
"[project]/app/authentication/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=_238c10._.js.map