// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=how-to-learn-next
import * as fs from "fs";

export default function handler(req, res) {
  const slug = req.query.slug;
  console.log(req.query);
  fs.readFile(`blogdata/${slug}.json`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "No such blog found" });
    }
    res.status(200).json({ res: JSON.parse(data) });
  });
  //   res.status(200).json({ name: "Hello from Rajan Gupta!" });
}
