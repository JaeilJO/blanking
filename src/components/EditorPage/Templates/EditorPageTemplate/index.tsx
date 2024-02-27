import GetPageDataWrapper from "../../Organisms/GetPageDataWrapper";

function EditorPageTemplate({
  subkey,
  pagename,
  groupname,
}: {
  subkey: string;
  pagename: string;
  groupname: string;
}) {
  return (
    <GetPageDataWrapper
      subkey={subkey}
      pagename={pagename}
      groupname={groupname}
    />
  );
}

export default EditorPageTemplate;
