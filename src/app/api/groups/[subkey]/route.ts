import { PrismaClient } from "@prisma/client";

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

export async function PATCH(request: Request) {}
