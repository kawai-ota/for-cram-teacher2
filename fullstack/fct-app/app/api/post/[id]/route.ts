import { NextResponse } from "next/server";
import prisma from "@/app/chatpage/libs/prismadb";
import { disconnect } from "process";

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Database Connection Unsuccessull");
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await prisma.$connect();
    const id = req.url.split("/article/")[1]; // クライアントからのリクエストURLからIDを抽出
    const post = await prisma.post.findFirst({ where: { id } }); // 指定されたIDに基づいて投稿を取得
    if (!post)
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/article/")[1];
    const { status, classname, information, description, image } =
      await req.json();
    const post = await prisma.post.update({
      data: { status, classname, information, description, image },
      where: { id },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/article/")[1];
    const post = await prisma.post.delete({ where: { id } });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
