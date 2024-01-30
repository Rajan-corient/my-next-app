// http://localhost:3000/api/postcontact
import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const contactList = await fs.promises.readdir("contactdata");
    fs.promises.writeFile(
      `contactdata/${contactList.length + 1}.json`,
      JSON.stringify(req.body)
    );
    console.log("body", req.body);
    res.status(200).json(req.body);
  } else {
    // Handle any other HTTP method
    res.status(200).json("Data from GET req");
  }
}
