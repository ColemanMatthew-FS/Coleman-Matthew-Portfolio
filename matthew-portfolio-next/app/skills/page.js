
import List from "@/components/List";

export default function Skills() {
  let list1 = ["JavaScript","Node.JS","Express.JS","React.JS","Redux.JS","C#","Bootstrap","HTML","CSS"]
  let list2 = ["Visual Studio Code","Adobe XD","Adobe Illustrator","Xamarin","Microsoft Excel","Microsoft Powerpoint","Clip Studio Paint"]
  return (
    <>
      <h2 className="font-bold text-4xl m-16">
        Skills
      </h2>
      <div className="flex justify-between gap-x-6 ms-48 me-48">
        <List header="Programming Languages" items={list1}/>
        <List header="Software" items={list2}/>
      </div>
    </>
  );
}
