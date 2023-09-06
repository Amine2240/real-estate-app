const Usermodel = require("../schemas/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handlesignin = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.confirmpassword) {
      return res.json({ error: "textfields required" });
    }
    if (req.body.password.length < 6) {
      return res.json({ error: "password too short" });
    }
    if (req.body.password !== req.body.confirmpassword) {
      return res.json({ error: "please cofirm password" });
    }
    const existinguser = await Usermodel.findOne({ email: req.body.email });
    if (existinguser) {
      return res.json({ error: "user already existed" });
    }
    const salt = await bcrypt.genSalt();
    const hashedpassword = await bcrypt.hash(req.body.password, salt);

    const newuser = new Usermodel({
      email: req.body.email,
      password: hashedpassword,
      confirmpassword: hashedpassword,
    });
    await newuser.save();
    const token = await jwt.sign(
      {
        user: newuser._id,
      },
      process.env.SECRET_KEY
    );
    await res.cookie("token", token, { httpOnly: true }).send();
    res.json(newuser);
  } catch (error) {
    console.log("error in signing", error);
  }
};

const handlelogin = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.confirmpassword) {
      return res.json({ error: "textfields required" });
    }
    if (req.body.password.length < 6) {
      return res.json({ error: "password too short" });
    }
    if (req.body.password !== req.body.confirmpassword) {
      return res.json({ error: "please cofirm password" });
    }
    const existinguser = await Usermodel.findOne({ email: req.body.email });
    if (!existinguser) {
      return res.json({ error: "no such user" });
    }
    const hashedpassword = await bcrypt.compare(
      req.body.password,
      existinguser.password
    );
    if (!hashedpassword) {
      return res.json({ error: "error while logging" });
    }
    const token = await jwt.sign(
      { user: existinguser._id },
      process.env.SECRET_KEY
    );
    await res.cookie("token", token, { httpOnly: true, path: "/" }).send();
    res.json(existinguser);
  } catch (error) {
    console.log("error in logging", error);
  }
};

const handlelogout = async (req, res) => {
  res.clearCookie("token", { httpOnly: true });
  res.status(200).json({ message: "logout succesfully" });
};

const authmiddlewarebooleen = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      console.log("no token in cookies");
      return res.json(false);
    }
    const tokenverif = jwt.verify(token, process.env.SECRET_KEY);
    if (!tokenverif) {
      return res.json(false);
    }
    return res.json(true);
  } catch (error) {
    return res.json({ error: error });
  }
};
module.exports = {
  handlelogin,
  handlesignin,
  handlelogout,
  authmiddlewarebooleen,
};
