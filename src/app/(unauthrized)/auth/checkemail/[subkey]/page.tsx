import ChangePasswordTemplate from "@/components/Templates/Auth/ChangePassword";

function Page({ params }: { params: { subkey: string } }) {
  return <ChangePasswordTemplate subkey={params.subkey} />;
}

export default Page;
