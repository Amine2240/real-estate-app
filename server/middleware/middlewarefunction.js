const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authmiddlewarefunction = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json("authentication failed");
    }
    const decodedtoken = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decodedtoken) {
      return res.json("authentication failed");
    }
    const user = decodedtoken.user;
    if (!user) {
      return res.json("authentication failed");
    }
    req.user = user;
    next();
  } catch (error) {
    res.json(error);
  }
};

module.exports = authmiddlewarefunction;
