"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const deleteProduct = async (req, res) => {
    try {
        const user = req.body.userId;
        const { id } = req.body;
        const isAvailable = await product_model_1.default.findOne({ where: { id, ownerId: user } });
        console.log(isAvailable);
        if (!isAvailable) {
            return res.status(404).json({ message: 'Product not found for the given user.' });
        }
        // Delete the product if it exists
        await product_model_1.default.destroy({ where: { id, ownerId: user } });
        res.status(200).json({ message: 'Product Deleted.' });
    }
    catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=deleteProduct.controller.js.map