// pages/api/toggleLike.ts
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { postId, userId } = req.body;

    try {
      const existingLike = await prisma.like.findUnique({
        where: { userId_postId: { userId, postId } },
      });

      if (existingLike) {
        await prisma.like.delete({
          where: { userId_postId: { userId, postId } },
        });
      } else {
        await prisma.like.create({
          data: {
            postId,
            userId,
          },
        });
      }

      res.status(201).json({ success: true });
    } catch (error) {
      console.error("Error toggling like:", error);
      res.status(500).json({ success: false, message: "Failed to toggle like" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
