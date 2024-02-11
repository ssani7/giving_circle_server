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
exports.UserServices = exports.login = exports.register = void 0;
const config_1 = __importDefault(require("../../../../config"));
const usr_model_1 = require("./usr.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = (userdata) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield usr_model_1.User.findOne({ email: userdata.email });
    if (existing)
        throw new Error('User already exists for email: ' + userdata.email);
    const user = yield usr_model_1.User.create(userdata);
    const token = jsonwebtoken_1.default.sign(user.toJSON(), config_1.default.jwt_token, {
        expiresIn: '1D',
    });
    return { user, token };
});
exports.register = register;
const login = (userdata) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('🚀 ~ login ~ userdata:', userdata);
    const user = yield usr_model_1.User.findOne({ email: userdata.email });
    if (!user)
        throw new Error('No user found for : ' + userdata.email);
    const token = jsonwebtoken_1.default.sign(user.toJSON(), config_1.default.jwt_token, {
        expiresIn: '1D',
    });
    return { user, token };
});
exports.login = login;
exports.UserServices = {
    register: exports.register,
    login: exports.login,
};
