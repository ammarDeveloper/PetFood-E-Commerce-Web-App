const { apiRoot, projectKey } = require("../models/client.js");
const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

const createSignupCustomer = (body) => {
  console.log(body)
  return apiRoot.withProjectKey({projectKey})
  .customers().post({
    body: body 
  })
  .execute();
} 

const loginCustomer = (body) => {
  console.log(body)
  return apiRoot.withProjectKey({projectKey})
  .login().post({
    body: body
  })
  .execute();
}

router.post('/api/signin', [
  body('firstName').isLength({ min: 1 }).withMessage('First name is required'),
  body('lastName').isLength({ min: 1 }).withMessage('Last name is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('phone').isMobilePhone('en-IN').withMessage('Invalid phone number'), 
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters') 
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(req.body);
    return res.status(400).json({errors: errors.array()})
  }
  createSignupCustomer(req.body)
  .then(response => res.send(response))
  .catch(error => res.status(error.statusCode).json({errors: error.message})) 
});

router.post('/api/login', [
  body('email').isEmail().withMessage('Account with the given credentials not found.'),
  body('password').isLength({ min: 6 }).withMessage('Account with the given credentials not found.') 
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(req.body);
    return res.status(400).json({body: {message: errors.array()[0].msg}})
  }
  
  loginCustomer(req.body)
  .then(response => res.send(response))
  .catch(error => res.status(error.statusCode).json(error)) 
});

module.exports = router;