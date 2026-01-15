const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate JWT Token
const generateToken = (userId) => {
    return jwt.sign({ id : userId }, process.env.JWT_SECRET, {expiresIn: "7d"});
}

// Register a User // public 
const registerUser = async (req, res) => {
    try {
        const { name , email, password, role } = req.body;

        // check user already exists 
        const userExists = await User.findOne({email});
        if(userExists) {
            return res.status(400).json({ message : "User already exists"})
        }

        // role validation 
         const allowedRoles = ["creator", "reviewer", "approver"];
          const finalRole = allowedRoles.includes(role) ? role : "creator";
        
        // Hash password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create a new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role : finalRole,
        });

        // return user Data with JWT 
        res.status(201).json({
            _id: user._id,
            name : user.name,
            email: user.email,
            role : user.role,
            token : generateToken(user._id),
        });
    } catch (error) {
        res.status(500).json({message : "Server error", error : error.message})
    }
}

// Login User // public 
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// get User Profile // private (JWT Required)
const getUserProfile = async (req,res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        if(!user) {
            return res.status(404).json({ message : "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({message : "Server error", error : error.message})
    }
}

// Update User Profile // private (JWT Required)
const updateUserProfile = async (req,res) => {
    try {
        const user = await User.findById(req.user._id);
        if(!user) {
            return res.status(404).json({ message : "User not found"});
        }

        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(req.body.password, salt);
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id : updatedUser._id,
            name : updatedUser.name,
            email : updatedUser.email,
            role : updatedUser.role,
            token : generateToken(updatedUser._id)
        });
    } catch (error) {
        res.status(500).json({message : "Server error", error : error.message})
    }
}

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };
