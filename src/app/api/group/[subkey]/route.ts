import containsSpecialCharacters from "@/utils/containsSpecialCharacters";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// Create Group
export async function POST(
  req: Request,
  { params }: { params: { subkey: string } }
) {
  // Prisma 객체 생성
  const prisma = new PrismaClient();

  // 그룹 이름을 받아옵니다.
  const data = await req.json();
  const groupname = data.groupname;

  // 그룹을 등록하기 위해서는 subkey가 필요합니다.
  const subkey = params.subkey;

  // 그룹 이름에 특수문자가 포함되어 있는지 확인합니다.
  const isContainsSpecialCharacters = containsSpecialCharacters(groupname);
  if (isContainsSpecialCharacters) {
    return new Response("그룹 이름에 특수문자를 포함할 수 없습니다", {
      status: 422,
    });
  }

  try {
    // 그룹을 생성합니다.
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
