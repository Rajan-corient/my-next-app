// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// This api will work with only /api endpoint, we dont need to put /api/index in url.
export default function handler(req, res) {
  res.status(200).json({ name: "This is home page content!" });
}
