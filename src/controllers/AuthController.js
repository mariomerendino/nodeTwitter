import { Op } from "sequelize";
import model from "../models";
import AuthTokenHelper from "../helpers/AuthTokenHelper";

const { User } = model;

export default {
  async signUp(req, res) {
    const { email, password, name, phone } = req.body;
    try {
      const user = await User.findOne({
        where: { [Op.or]: [{ phone }, { email }] },
      });
      if (user) {
        return res
          .status(422)
          .send({ message: "User with that email or phone already exists" });
      }
      let authToken = AuthTokenHelper.genAuthToken();
      let newUser = await User.create({
        name,
        email,
        password,
        phone,
        authToken,
      });
      return res.status(201).send({
        message: "Account created successfully",
        authToken: newUser.authToken,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message:
          "Could not perform operation at this time, kindly try again later.",
      });
    }
  },
  async login(req, res) {
    let { email, password, phone } = req.query;

    const user = await User.findOne({
      where: { [Op.or]: [{ phone: phone ?? "" }, { email: email ?? "" }] },
    });

    if (user == null) {
      return res
        .status(422)
        .send({ message: "No user with that phone or email" });
    }

    if (user.password != password) {
      return res.status(422).send({ message: "Incorrect password" });
    }

    user.authToken = AuthTokenHelper.genAuthToken();
    await user.save();

    return res
      .status(200)
      .send({ message: "Log in sucessful", authToken: user.authToken });
  },
};
