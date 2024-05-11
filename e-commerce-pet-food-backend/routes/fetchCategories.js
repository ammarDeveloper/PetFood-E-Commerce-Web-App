const { apiRoot, projectKey } = require("../models/client.js");
const express = require('express');
const router = express.Router();

const getAllCategories = (where) => {
    return apiRoot.withProjectKey({projectKey})
    .categories().get({
        queryArgs: {
            where : where
        }
    }).execute();
}

router.get('/api/allCatgories', (req, res) => {
    getAllCategories(req.query.where)
    .then(response => res.send(response))
    .catch(error => res.send(error))
});

module.exports = router;