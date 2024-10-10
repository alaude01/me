(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_c451dc._.js", {

"[project]/components/background/Globe.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Globe": ()=>Globe
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cobe$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/cobe/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
const GLOBE_CONFIG = {
    width: 800,
    height: 800,
    onRender: ()=>{},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [
        1,
        1,
        1
    ],
    markerColor: [
        251 / 255,
        100 / 255,
        21 / 255
    ],
    glowColor: [
        1,
        1,
        1
    ],
    markers: [
        {
            location: [
                14.5995,
                120.9842
            ],
            size: 0.03
        },
        {
            location: [
                19.076,
                72.8777
            ],
            size: 0.1
        },
        {
            location: [
                23.8103,
                90.4125
            ],
            size: 0.05
        },
        {
            location: [
                30.0444,
                31.2357
            ],
            size: 0.07
        },
        {
            location: [
                39.9042,
                116.4074
            ],
            size: 0.08
        },
        {
            location: [
                -23.5505,
                -46.6333
            ],
            size: 0.1
        },
        {
            location: [
                19.4326,
                -99.1332
            ],
            size: 0.1
        },
        {
            location: [
                40.7128,
                -74.006
            ],
            size: 0.1
        },
        {
            location: [
                34.6937,
                135.5022
            ],
            size: 0.05
        },
        {
            location: [
                41.0082,
                28.9784
            ],
            size: 0.06
        }
    ]
};
function Globe({ className, config = GLOBE_CONFIG }) {
    _s();
    let phi = 0;
    let width = 0;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerInteracting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerInteractionMovement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [r, setR] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const updatePointerInteraction = (value)=>{
        pointerInteracting.current = value;
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value ? "grabbing" : "grab";
        }
    };
    const updateMovement = (clientX)=>{
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            setR(delta / 200);
        }
    };
    const onRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((state)=>{
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + r;
        state.width = width * 2;
        state.height = width * 2;
    }, [
        r
    ]);
    const onResize = ()=>{
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.addEventListener("resize", onResize);
        onResize();
        const globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cobe$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(canvasRef.current, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender
        });
        setTimeout(()=>canvasRef.current.style.opacity = "1");
        return ()=>globe.destroy();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            className: cn("size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"),
            ref: canvasRef,
            onPointerDown: (e)=>updatePointerInteraction(e.clientX - pointerInteractionMovement.current),
            onPointerUp: ()=>updatePointerInteraction(null),
            onPointerOut: ()=>updatePointerInteraction(null),
            onMouseMove: (e)=>updateMovement(e.clientX),
            onTouchMove: (e)=>e.touches[0] && updateMovement(e.touches[0].clientX)
        }, void 0, false, {
            fileName: "[project]/components/background/Globe.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/background/Globe.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(Globe, "1gUubOb/jYgATa5mCIT5WDhp+/Y=");
_c = Globe;
var _c;
__turbopack_refresh__.register(_c, "Globe");

})()),
"[project]/components/background/WordAnimation.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
const WordAnimation = ()=>{
    _s();
    const spansRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        spansRef.current.forEach((span, idx)=>{
            if (!span) return;
            // Event listener for click
            const handleClick = (e)=>{
                e.target.classList.add("active");
            };
            span.addEventListener("click", handleClick);
            // Event listener for animation end
            const handleAnimationEnd = (e)=>{
                e.target.classList.remove("active");
            };
            span.addEventListener("animationend", handleAnimationEnd);
            // Initial animation
            setTimeout(()=>{
                span.classList.add("active");
            }, 750 * (idx + 1));
            // Clean up event listeners
            return ()=>{
                span.removeEventListener("click", handleClick);
                span.removeEventListener("animationend", handleAnimationEnd);
            };
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "word flex gap-4 font-bold",
        children: [
            "W",
            "E",
            "L",
            "C",
            "O",
            "M",
            "E"
        ].map((letter, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: (el)=>{
                    spansRef.current[idx] = el;
                },
                className: "text-4xl md:text-8xl th",
                children: letter
            }, idx, false, {
                fileName: "[project]/components/background/WordAnimation.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/background/WordAnimation.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
};
_s(WordAnimation, "m72I8crHJiTvJzbGCNCdWHhmgO4=");
_c = WordAnimation;
const __TURBOPACK__default__export__ = WordAnimation;
var _c;
__turbopack_refresh__.register(_c, "WordAnimation");

})()),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=_c451dc._.js.map