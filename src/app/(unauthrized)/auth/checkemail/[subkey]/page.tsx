import ChangePasswordTemplate from "@/components/AuthComponent/Templates/ChangePasswordTemplate";

function Page({ params }: { params: { subkey: string } }) {
  return <ChangePasswordTemplate subkey={params.subkey} />;
}

export default Page;
