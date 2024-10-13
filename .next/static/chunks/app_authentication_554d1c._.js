(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_authentication_554d1c._.js", {

"[project]/app/authentication/code.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__ = __turbopack_import__("[project]/node_modules/react-syntax-highlighter/dist/esm/prism.js [app-client] (ecmascript) <export default as Prism>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$coy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-syntax-highlighter/dist/esm/styles/prism/coy.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const code = `
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
		AllowOrigins:     "http://localhost:5173",                       // กำหนด URL ที่อนุญาตให้เข้าถึง API
		AllowMethods:     "GET, POST, PUT, DELETE, OPTIONS",             // กำหนด HTTP Methods ที่อนุญาตให้ใช้
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization", // กำหนด Headers ที่อนุญาต
		AllowCredentials: true,                                          // อนุญาตให้ใช้คุกกี้หรือข้อมูลรับรองระหว่างโดเมน
		MaxAge:           int(24 * time.Hour / time.Second),             // กำหนดเวลาที่เบราว์เซอร์จะจดจำการตั้งค่า CORS
	}))

	app.Use(logger.New())
	//localhost/v1/auth
	auth_v1 := app.Group(api + "/auth")
	auth.SetAuthentication(auth_v1, db.DB)
	emp_v1 := app.Group(api+"/employees", middleware.Token)
	emp.EmployeesRouting(emp_v1, db.DB)
	app.Listen(":3000")
}
  `;
const CodeBlock = ()=>{
    const customStyle = {
        borderRadius: "0.75rem"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__["Prism"], {
        language: "go",
        style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$coy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        customStyle: customStyle,
        showLineNumbers: true,
        children: code
    }, void 0, false, {
        fileName: "[project]/app/authentication/code.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
_c = CodeBlock;
const __TURBOPACK__default__export__ = CodeBlock;
var _c;
__turbopack_refresh__.register(_c, "CodeBlock");

})()),
"[project]/app/authentication/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=app_authentication_554d1c._.js.map