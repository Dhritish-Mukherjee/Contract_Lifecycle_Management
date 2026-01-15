const jwt = require("jsonwebtoken");
const User = require("../models/User");

// middlewares to protect routes 
const protect = async (req, res, next) => {
    try {
        let token = req.headers.authorization;

        if(token && token.startsWith("Bearer ")){
            token = token.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        }else {
            res.status(401).json({message : "Not authorized , no token"});
        }
    } catch (error) {
        res.status(401).json({ message : "Token failed", error : error.message });
    }
}

// middleware for creator only access 
const creatorOnly = (req,res,next) => {
    if(req.user && req.user.role === "creator") {
        next();
    }else {
        res.status(403).json({ message : "Access denied, Creator Only"});
    }
}

module.exports = { protect, creatorOnly };