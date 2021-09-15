import { NextApiRequest, NextApiResponse } from "next";
import UsersJson from "@/assets/json/users.json";

export default function usersHundler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { uid },
    method,
  } = req;

  switch (method) {
    case "GET":
      res.status(200).json(UsersJson[uid]);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
