"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategory = void 0;
const connection_1 = require("../core/connection");
const sequelize_1 = require("sequelize");
const getCategory = async (req, res) => {
    try {
        const recursiveQuery = `
        WITH RECURSIVE category_recursive AS (
            -- Anchor member
            SELECT id, name, parentId
            FROM "categories"
            WHERE parentId IS NULL
          
            UNION ALL
          
            -- Recursive member
            SELECT c.id, c.name, c.parentId
            FROM "categories" c
            INNER JOIN category_recursive cr ON c.parentId = cr.id
          )
          
          SELECT *
          FROM category_recursive
        `;
        const categoriesWithSubcategories = await connection_1.sequelize.query(recursiveQuery, {
            type: sequelize_1.QueryTypes.SELECT,
        });
        // return categoriesWithSubcategories;
        res.status(200).json(categoriesWithSubcategories);
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.log(error);
    }
};
exports.getCategory = getCategory;
//# sourceMappingURL=category.controller.js.map