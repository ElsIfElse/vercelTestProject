"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "https://front-test-project.vercel.app/"
}));
app.get("/getdata", (req, res) => {
    res.send({ data: { msg: "You are very okay i guess", number: "2" } });
});
app.post("/postdata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = yield req.body;
        if (!payload) {
            console.log("Body is not found");
        }
        const response = yield fetch('https://reqres.in/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            console.log("Response is not OK");
            throw Error;
        }
        const data = yield response.json();
        console.log(data);
        res.send(data);
    }
    catch (error) {
        console.log(error);
    }
}));
app.listen(port, () => {
    console.log(`Server running at http://localhost:5000`);
});
