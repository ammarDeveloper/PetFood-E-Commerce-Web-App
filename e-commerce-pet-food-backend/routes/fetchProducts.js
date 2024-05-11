const { apiRoot, projectKey } = require("../models/client.js");
const express = require('express');
const router = express.Router();

const getAllProducts = (limit, offset) => {
    return apiRoot.withProjectKey({projectKey})
    .products().get({
        queryArgs: {
            limit: limit,
            offset: offset
        }
    }).execute();
}

router.get('/api/allProducts', (req, res) => {
    const queryParams = req.query;
    getAllProducts(queryParams.limit, queryParams.offset)
    .then(response => res.send(response))
    .catch(error =>res.send(error))
});

module.exports = router;