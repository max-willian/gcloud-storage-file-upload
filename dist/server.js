"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
app.use(routes_1.default);
const port = 3000;
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server  listening on ${port}`);
});
//# sourceMappingURL=server.js.map