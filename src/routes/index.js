import AuthController from "../controllers/AuthController";
import TweetController from "../controllers/TweetController";

const routes = (app) => {
  // Auth
  app.post("/register", AuthController.signUp);
  app.get("/login", AuthController.login);
  // Tweets
  app.post("/tweet", TweetController.createTweet);

  // Create a catch-all route for testing the installation.
  app.all("*", (req, res) =>
    res.status(200).send({
      message: "Hello World!",
    })
  );
};
export default routes;
