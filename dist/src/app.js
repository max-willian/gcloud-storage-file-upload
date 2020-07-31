"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
if (!process.env.PORT) {
    dotenv_1.default.config({ path: __dirname + '/../.env' });
}
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = express_1.default();
exports.app = app;
app.use(routes_1.router);
//# sourceMappingURL=app.js.map