// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import PostsJson from "@/assets/json/posts.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(PostsJson);
}
