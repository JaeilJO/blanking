"use client";

// Utils
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useCreateGroup from "@/hooks/useCreateGroup";
import useForm from "@/hooks/useForm";

// Components
import GroupMakerMackingBox from "../../Atoms/GroupMakerMakingBox";
import GroupMakerTitle from "../../Atoms/GroupMakerTitle";
import GroupMakerWrapper from "../../Atoms/GroupMakerWrapper";

function GroupMaker() {
  const session = useSession();
  const subkey = session.data?.user.subkey as string;
  const router = useRouter();

  const { register, handleSubmit, values } = useForm({
    groupname: "",
  });

  const { mutate } = useCreateGroup({
    subkey,
    groupname: values.groupname,
    router,
    isModal: false,
  });

  const onSubmit = () => {
    mutate();
  };

  return (
    <GroupMakerWrapper>
      <GroupMakerTitle />
      <GroupMakerMackingBox
        onSubmit={handleSubmit(onSubmit)}
        register={register}
      />
    </GroupMakerWrapper>
  );
}

export default GroupMaker;
