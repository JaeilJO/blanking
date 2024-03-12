import containsSpecialCharacters from "@/utils/containsSpecialCharacters";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { subkey: string } },
  res: Response
) {
  const subkey = params.subkey;
  const prisma = new PrismaClient();

  const groups = await prisma.group.findMany({
    where: {
      usersubkey: subkey,
    },
    include: {
      pages: true,
    },
  });
  return new Response(JSON.stringify(groups), { status: 200 });
}

// Create Group
export async function POST(
  req: Request,
  { params }: { params: { subkey: string } }
) {
  const data = await req.json();

  const subkey = params.subkey;

  const groupname = data.groupname;

  const prisma = new PrismaClient();

  const isContainsSpecialCharacters = containsSpecialCharacters(groupname);

  if (isContainsSpecialCharacters) {
    return new Response("그룹 이름에 특수문자를 포함할 수 없습니다", {
      status: 422,
    });
  }

  try {
    await prisma.group.create({
      data: {
        groupname: groupname,
        usersubkey: subkey,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return new Response("OK", { status: 201 });
  } catch (e) {
    // P200P는 Unique Constraint에 걸린 경우 (이미 존재하는 그룹인 경우)
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return new Response("이미 존재하는 그룹입니다", { status: 409 });
      }
    }

    return new Response(
      "그룹 생성에 실패했습니다. Modal창을 껐다가 다시 시도해주시겠습니까?",
      { status: 400 }
    );
  }
}

export async function PATCH(request: Request) {}
