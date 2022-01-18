import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    res.status(200).json("Success");
  } else {
    res.status(400).json({ message: "fuck off" });
  }
}
