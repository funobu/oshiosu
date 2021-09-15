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
      const u = typeof uid == "string" ? uid : uid[0];
      res.status(200).json(UsersJson[Number(u)]);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
