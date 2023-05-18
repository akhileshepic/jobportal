import useModel from "../models/useModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validation
    if (!name) {
      return res
        .status(400)
        .send({ success: false, message: "Name is Required" });
    }
    if (!email) {
      return res
        .status(400)
        .send({ success: false, message: "Email is Required" });
    }
    if (!password) {
      return res
        .status(400)
        .send({ success: false, message: "Password is Required" });
    }

    //check user

    const exitsinguser = await useModel.findOne({ email });
    if (exitsinguser) {
      return res.status(200).send({
        success: false,
        message: "Email Already Register Please Login",
      });
    }
    const user = await useModel.create({
      name,
      email,
      password,
    });
    return res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};
