const PASSWORD = process.env.ROUTE_PASSWORD;

const verifyAuth = (req, res, next) => {
  const authorization = req.headers["authorization"];
    if (!authorization || authorization !== PASSWORD) {
      return res.status(404).json({ message: "unathorised request" });
    }
  next();
};

module.exports = verifyAuth;
