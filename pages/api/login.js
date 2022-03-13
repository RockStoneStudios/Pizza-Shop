import cookie from "cookie";

const handler = (req, res) => {
    console.log(req.body);
    if (req.method === "POST") {
        const { username, password } = req.body;
        console.log("hello")
 
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json("Succesfull");
    } else {
        console.log("hello")
      res.status(401).json("Wrong Omar Credentials!");
    }
  }
};

export default handler;