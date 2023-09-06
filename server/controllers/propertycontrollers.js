const Propertymodel = require("../schemas/propertymodel");
let requestData = null;
const postproperty = async (req, res) => {
  try {
    const newproperty = new Propertymodel({
      ...req.body.item,
      likedelement: true,
      user: req.body.user,
    });
    await newproperty.save();
    console.log("req.user : ", req.body.user);
    requestData = req.body.user;
    return res.json(newproperty);
  } catch (error) {
    return res.json(error);
  }
};
const deleteproperty = async (req, res) => {
  try {
    const propertytodelete = await Propertymodel.findByIdAndDelete(
      req.params.id
    );
    if (!propertytodelete) {
      return res.json("no such elemenet");
    }
    return res.json(propertytodelete);
  } catch (error) {
    return res.json(error);
  }
};

const findallelements = async (req, res) => {
  try {
    const allelements = await Propertymodel.find({ user: requestData });
    if (!allelements) {
      return res.json("no element in db");
    }
    console.log("reqesdata", requestData);
    return res.json(allelements);
  } catch (error) {
    return res.json(error);
  }
};

const updatebool = async (req, res) => {
  try {
    const updatedelement = await Propertymodel.findByIdAndUpdate(
      req.params.id,
      { likedelement: req.body }
    );
    if (!updatedelement) {
      return res.json("error in updating");
    }
    return res.json(updatedelement);
  } catch (error) {
    return res.json(error);
  }
};

const findoneelement = async (req, res) => {
  try {
    const elementfound = await Propertymodel.findById(req.params.id);
    if (!elementfound) {
      return res.json("no element in db");
    }
    return res.json(elementfound);
  } catch (error) {
    return res.json(error);
  }
};

module.exports = {
  postproperty,
  deleteproperty,
  findallelements,
  updatebool,
  findoneelement,
};
