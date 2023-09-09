import { NextResponse } from "next/server";
import prisma from "@/app/chatpage/libs/prismadb";
import getCurrentUser from "@/app/chatpage/actions/getCurrentUser";

interface IParams {
  conversationId?: string;
}

// 投稿を取得するエンドポイント
export async function GET(
  req: Request,
  res: NextResponse,
  { params }: { params: IParams }
) {
  try {
    const { conversationId } = params;

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        post: true,
      },
    });

    if (!conversation) {
      return new NextResponse("Conversation not found", { status: 404 });
    }

    const post = conversation.post;

    if (!post) {
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

// 投稿を更新するエンドポイント
export async function PUT(
  req: Request,
  res: NextResponse,
  { params }: { params: IParams }
) {
  try {
    const { conversationId } = params;

    const { title, image, description } = await req.json();

    const updatedPost = await prisma.post.update({
      where: {
        id: conversationId,
      },
      data: {
        title,
        description,
        image,
      },
    });
    return NextResponse.json(updatedPost);
  } catch (err) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// 新しい投稿を作成するエンドポイント
export async function POST(
  req: Request,
  res: NextResponse,
  { params }: { params: IParams }
) {
  try {
    const { conversationId } = params;

    const { title, image, description } = await req.json();

    const newDetail = await prisma.post.create({
      data: {
        title,
        description,
        image,
        conversationId,
      },
    });
    return NextResponse.json(newDetail);
  } catch (err) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
