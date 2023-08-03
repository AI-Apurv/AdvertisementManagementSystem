"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBid = exports.getProduct = exports.addProduct = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const addProduct = async (req, res) => {
    const detail = req.body;
    try {
        await product_model_1.default.create(detail);
        res.status(201).json({ message: "product registered successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.log(error);
    }
};
exports.addProduct = addProduct;
const getProduct = async (req, res) => {
    try {
        // console.log("Params:  ",  req.params);
        // console.log("Query Params:  ", req.query);
        let prod = await product_model_1.default.findByPk(req.query.id);
        res.status(201).json(prod);
    }
    catch (err) {
        res.status(500).json({ message: "Server Error" });
        console.log(err);
    }
};
exports.getProduct = getProduct;
const addBid = async (req, res) => {
    const pid = req.params.id;
    const current_Bid = req.body.currentBid;
    try {
        var product = await product_model_1.default.findOne({ where: { id: pid } });
        console.log(product);
        if (product.currentBid < current_Bid) {
            product_model_1.default.update({ currentBid: current_Bid }, { where: {
                    id: pid
                } });
        }
        else {
            res.status(402).json({ message: "current Bid price is high" });
        }
        res.status(201).json("bid updated");
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
exports.addBid = addBid;
//# sourceMappingURL=product.controller.js.map