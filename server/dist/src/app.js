"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
require("reflect-metadata");
dotenv_1.default.config();
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
app.use(body_parser_1.default.json());
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/intro', (req, res) => {
    console.log('hi');
    res.send({ intro: 'introduction' });
});
app.post('/retrospect', (req, res) => {
    console.log(req.body);
    res.send({ retrospect: 'retrospect' });
});
app.listen(port, () => {
    console.log('port', port);
});
