import { redirect } from "next/navigation";

function Page() {
  redirect("/auth/signin");
}

export default Page;
