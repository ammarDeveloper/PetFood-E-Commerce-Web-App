const { apiRoot, projectKey } = require("../models/client.js");
const express = require('express');
const router = express.Router();

const getAllProductsWithCatogery = (categoryId, limit, offset) => {
    return apiRoot.withProjectKey({projectKey})
    .productProjections().search().get({
        queryArgs : {
            offset: offset,
            filter : `categories.id:"${categoryId}"`,
            limit : limit,
        }
    }).execute();
}

router.get('/api/allProductsWithCategory', (req, res) => {
    const queryParams = req.query;
    console.log(queryParams)
    getAllProductsWithCatogery(queryParams.categoryId, queryParams.limit, queryParams.offset)
    .then(response => res.send(response))
    .catch(error =>res.send(error))
});

module.exports = router;