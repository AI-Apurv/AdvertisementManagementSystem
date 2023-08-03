"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const session_model_1 = __importDefault(require("../models/session.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const redis_1 = require("redis");
const login = async (req, res) => {
    //redis connection
    const client = (0, redis_1.createClient)();
    client.on("error", (err) => console.log("redis client error <-------------", err));
    client.connect().then(() => {
        console.log("connected");
    }).then((error) => {
        console.log("error");
    });
    const { userName, password } = req.body;
    try {
        const user = await user_model_1.default.findOne({ where: { userName } });
        if (!user)
            return res.status(404).send('user not find');
        const comp = await bcrypt_1.default.compare(password, user.password);
        if (comp) {
            const token = jsonwebtoken_1.default.sign({ userId: user.id }, 'secretKey');
            const isSession = await session_model_1.default.findOne({ where: { userId: user.id } });
            if (isSession && isSession.status == false) {
                isSession.status = true;
                isSession.save();
            }
            if (!isSession) {
                const sess = await session_model_1.default.create({
                    userId: user.id,
                    status: true,
                });
            }
            const redisSession = await client.get(`x`);
            console.log(redisSession);
            if (!redisSession) {
                let session_payload = {
                    userId: user.id,
                    isActive: true
                };
                await client.set(`${user.id}_session`, JSON.stringify(session_payload));
            }
            res.send({ token });
            console.log("login sucessfull");
        }
        else {
            res.send("incorrect password");
        }
    }
    catch (error) {
        console.error('Failed to login:', error);
        res.status(500).json({ error: 'Failed to login' });
    }
};
exports.login = login;
//# sourceMappingURL=login.controller.js.map