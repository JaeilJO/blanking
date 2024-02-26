// Utils
import { getServerSession } from "next-auth";
import { NextAuthOption } from "@/lib/nextAuth/auth";
import { redirect } from "next/navigation";

// Components
import UserNamePageTemplate from "@/components/UserNamePage/Templates/UserNamePageTemplate";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const session = await getServerSession(NextAuthOption);
  const paramUsername = decodeURIComponent(params.username);
  const username = session?.user.name as string;

  if (paramUsername !== username) {
    redirect("/not-found");
  }

  return <UserNamePageTemplate />;
}
