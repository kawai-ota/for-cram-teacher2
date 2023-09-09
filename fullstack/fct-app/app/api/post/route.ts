import { NextResponse } from "next/server";
import prisma from "@/app/chatpage/libs/prismadb";

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Database Connection Unsuccessull");
  }
}

export async function GET(req: Request, res: NextResponse) {
  try {
    await main();
    const post = await prisma.post.findMany({
      orderBy: {
        date: "desc",
      },
    });

    if (post.length === 0) {
      return new NextResponse("Post not found", {
        status: 404,
      });
    }

    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request, res: NextResponse) {
  try {
    const { status, classname, information, description, image } =
      await req.json();
    await main();
    const post = await prisma.post.create({
      data: {
        status,
        classname,
        information,
        description,
        image,
      },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
