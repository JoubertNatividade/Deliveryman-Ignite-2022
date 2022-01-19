"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(function (err, request, response, next) {
    if (err instanceof Error) {
        return response.status(400).json({ err: err.message });
    }
    return response.status(500).json({ status: 'Error', message: 'Internal Server' });
});
app.listen(3330, function () { console.log("Server Started"); });
//# sourceMappingURL=server.js.map