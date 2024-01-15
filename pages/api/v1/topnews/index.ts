import { NextApiRequest, NextApiResponse } from "next";
import { topNews } from "@/utils/topNews";

export default async function topnews(req: NextApiRequest, res: NextApiResponse) {

  const newsList = await topNews()
  res.status(200).json({
    newsList
  })
}