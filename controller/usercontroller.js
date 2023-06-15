const osas = require("mongoose");
const userModel = require("../model/usermodel");

// get all blogs

const getallblogs = async (req, res) => {
  try {
    const allblogs = await userModel.find();
    res.status(200).json({
      message: "gotten all blogs user",
      data: allblogs,
    });
  } catch (error) {
    res.status(404).json({
      message: "couldn't get all user",
    });
  }
};

// create new blog

const createnewblog = async (req, res) => {
  try {
    const { name, entertainment, lifestyle, celebrities, sport } = req.body;
    const newblog = await userModel.create({
      name,
      entertainment,
      lifestyle,
      celebrities,
      sport,
    });
    res,
      status(200).json({
        message: "create new blogs",
        data: newblog,
      });
  } catch (error) {
    res.status(404).json({
      message: "couldn't create blog",
    });
  }
};
