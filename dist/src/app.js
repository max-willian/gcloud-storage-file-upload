"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
if (!process.env.PORT) {
    dotenv_1.default.config({ path: __dirname + '/../.env' });
}
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
app.use(routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map