import { HomeIcon } from "@heroicons/react/outline";

type HeaderItemProps = {
  Icon: Function;
  title: String;
};

function HeaderItem(props: HeaderItemProps) {
  //group is to group the div below it into hover
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <props.Icon className="h-8 mb-1 group-hover:animate-bounce"></props.Icon>{" "}
      {/*you can pass in components as props*/}
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {props.title}
      </p>
    </div>
  );
}
export default HeaderItem;
