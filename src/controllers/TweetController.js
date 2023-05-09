import model from "../models";

const { User, Tweet } = model;

export default {
  async createTweet(req, res) {
    let user = await User.findOne({ where: { authToken: req.body.authToken } });
    console.log(user);

    let newTweet = await user.createTweet({ text: req.body.tweetText });

    return res.status(500).send({
      message: " something cool.",
      tweet: newTweet,
    });
  },
};
