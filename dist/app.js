"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === "/") {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write('호영아 오늘은 이기자');
            res.end();
        }
    }
});
server.listen(3000, () => {
    console.log();
});
//# sourceMappingURL=app.js.map