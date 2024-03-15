import HeadingWithDescription from "@/components/Molecules/HeadingWithDescription";

interface AuthPageHeader {
  title: string;
  description: string;
}

function AuthPageHeader({ title, description }: AuthPageHeader) {
  return (
    <HeadingWithDescription
      title={title}
      description={description}
      alignText="left"
      titleSize="tit-03"
      gap="gap-3"
      titleFontWeight="font-bold"
      descriptionSize="body-02"
      descriptionFontWeight="font-regular"
    />
  );
}

export default AuthPageHeader;
