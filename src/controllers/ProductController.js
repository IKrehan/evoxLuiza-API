const Product = require('../models/Product');

const { validationResult } = require('express-validator')

module.exports = {
    async create(req, res) {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, price, url_image } = req.body;

        const product = await Product.create({ name, price, url_image })
        product.update({ url: req.protocol  + "://" + req.get('host') + "/product/" + product.id })

        return res.json(product);
    },

    async index(req, res) {
        const products = await Product.findAll({
            order: [
                ['id', 'ASC'],
            ]
        });
        return res.json(products);
    },

    async find(req, res) {
        const product = await Product.findByPk(req.params.id)
        return res.json(product)
    },

    async update(req, res) {
        const product = await Product.findByPk(req.params.id);
        const { name, price, url_image } = req.body;

        product.update({ name, price, url_image });
        return res.json(product);
    },
    
    async delete(req, res) {
        const product = await Product.findByPk(req.params.id);
        product.destroy();
        return res.json(product);
    },
};