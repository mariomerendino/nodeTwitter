import AuthController from "../controllers/AuthController";

const routes = (app) => {
  app.post("/register", AuthController.signUp);
  app.get("/login", AuthController.login);

  // Create a catch-all route for testing the installation.
  app.all("*", (req, res) =>
    res.status(200).send({
      message: "Hello World!",
    })
  );
};
export default routes;
