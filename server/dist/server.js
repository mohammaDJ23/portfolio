"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const x_xss_protection_1 = __importDefault(require("x-xss-protection"));
const morgan_1 = __importDefault(require("./middleware/morgan/morgan"));
const graphql_1 = __importDefault(require("./middleware/graphql/graphql"));
const app = express_1.default();
const PORT = process.env.PORT || 5000;
dotenv_1.default.config();
app.use(body_parser_1.json());
app.use(cors_1.default());
app.use(x_xss_protection_1.default());
app.use(compression_1.default());
app.use(helmet_1.default());
app.use(morgan_1.default);
app.use("/graphql", graphql_1.default);
(async function () {
    try {
        await mongoose_1.default.connect("mongodb+srv://mohammad-75:ZoIuMpkaDUTpKfRF@cluster0.zp1rc.mongodb.net/PORTFOLIO?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT, function () {
            console.log("server is running.");
        });
    }
    catch (error) {
        console.log(error);
    }
})();
