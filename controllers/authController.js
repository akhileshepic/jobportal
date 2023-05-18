import useModel from "../models/useModel.js";

export const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  //validation
  if (!name) {
    next("Name is Required");
  }
  if (!email) {
    next("Email is Required");
  }
  if (!password) {
    next("Password is Required");
  }
  //check user
  const exitsinguser = await useModel.findOne({ email });
  if (exitsinguser) {
    next("Email Already Register Please Login");
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
};
