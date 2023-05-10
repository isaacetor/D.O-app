"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const instance = axios_1.default.create({
    baseURL: "https://dirty-online.onrender.com/api/",
    headers: {
        "Content-Type": "Application/json",
    },
});
exports.default = instance;
