// Next.js API route support: https://nextjs.org/docs/api-routes/
// http://localhost:3000/api/blog
const fs = require("node:fs");

export default async function handler(req, res) {
  let allBlogs = [];
  //   fs.readdir("blogdata", "utf8", (err, data) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     data.forEach((item) => {
  //       console.log(item);
  //       allBlogs.push(item);
  //     });
  //     res.status(200).json(allBlogs);
  //   });

  const data = await fs.promises.readdir("blogdata");
  for (const item of data) {
    const filedata = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    allBlogs.push(JSON.parse(filedata));
  }
  console.log(data);
  res.status(200).json(allBlogs);
}
