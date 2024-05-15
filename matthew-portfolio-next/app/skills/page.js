
import List from "@/components/List";

export default function Skills() {
  let list1 = ["JavaScript","Node.JS","Express.JS","React.JS","Redux.JS","C#","Bootstrap","HTML","CSS"]
  let list2 = ["Visual Studio Code","Adobe XD","Adobe Illustrator","Xamarin","Microsoft Excel","Microsoft Powerpoint","Clip Studio Paint"]
  return (
    <>
      <h2>
        Skills
      </h2>
      <List header="Programming Languages" items={list1}/>
      <List header="Software" items={list2}/>
    </>
  );
}
