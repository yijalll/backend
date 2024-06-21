const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const RefreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.sendStatus(401);
    }
    const user = User.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });

    if (!user[0]) {
      return res.sendStatus(403);
    }

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          return res.sendStatus(403);
        }
        const id = user[0].userID;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign(
          { id, name, email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "15s",
          }
        );
        res.json({ accessToken });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = { RefreshToken };
