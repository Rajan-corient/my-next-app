// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("node:fs");
export default function handler(req, res) {
  let fileData = "";
  fs.readdir("blogdata", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(typeof data);
    console.log(data);
    res.status(200).json(data);
  });
  //   res.status(200).json({ name: "Hello from Rajan Gupta!" });
}
