"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
console.log(`porta setada ${process.env.PORT}`);
const port = process.env.PORT || `3000`;
app_1.app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server listening on ${port}.`);
});
//# sourceMappingURL=server.js.map