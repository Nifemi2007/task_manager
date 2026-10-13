import { Bell, Menu, Search } from "lucide-react";

function Nav({ control_sidebar }) {
  return (
    <nav className="flex justify-between items-center">
      <Menu
        className="hover:cursor-pointer"
        onClick={() => control_sidebar()}
      />

      {/* Search segment */}
      <span className="bg-white w-[60%] lg:w-[50%] p-3 h-10 rounded-md flex gap-3">
        <Search className="h-4 w-4 hover:cursor-pointer" />
        <input
          type="text"
          className=" w-[95%] text-[15px] font-normal outline-0"
        />
      </span>

      {/* Profile segment and notification */}
      <span className="flex justify-between gap-2 items-center">
        <Bell />
        <span className="bg-violet-700 text-white rounded-full p-2">ON</span>
      </span>
    </nav>
  );
}

export default Nav;
