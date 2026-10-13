import { cloneElement } from "react";
function SideBarActions({ icon, text }) {
  return (
    <div className="flex gap-4 hover:bg-violet-200 hover:cursor-pointer hover:rounded-md hover:p-2 hover:text-violet-500">
      {cloneElement(icon, { size: 18 })}
      <h3 className="text-gray-500 text-[16px]">{text}</h3>
    </div>
  );
}

export default SideBarActions;
