const express = require('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "MYTODOAPP1244"

function auth(req,res,next) {
    const token = req.headers.authorization;
    const decodeddata = jwt.verify(token,JWT_SECRET);

    if(decodeddata) {
        req.id = decodeddata.id;
        next();
    }else {
        res.status(403).json({
            message : "Incorrect Cred"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}