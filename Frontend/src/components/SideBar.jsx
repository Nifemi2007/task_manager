import {
  ArrowDown01,
  ArrowDown10,
  Calendar,
  CheckIcon,
  CheckSquare,
  Clock,
  Droplet,
  Home,
  LineChart,
  MoveDown,
  PanelLeftClose,
  Settings,
} from "lucide-react";
// import logo from "../assets/check.png";
import { Link } from "react-router-dom";
import SideBarActions from "./SideBarActions";

function SideBar({ control_sidebar, open }) {
  return (
    <aside
      className={`w-[50%] md:w-[40%] lg:w-[20%] fixed left-0 top-0 h-full bg-white p-8 transform transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : " -translate-x-full"
      }`}
    >
      <PanelLeftClose
        onClick={control_sidebar}
        className="h-5 w-5 ml-auto cursor-pointer"
      />
      <div className="flex gap-2 ">
        {/* Logo */}
        <CheckSquare className="text-white bg-violet-700 rounded-md p-2 h-10 w-10" />

        <span>
          <h1 className="text-[25px] font-bold">TaskFlow</h1>
          <p className="text-[13px] text-gray-500">Get things done</p>
        </span>
      </div>

      {/* group of task */}
      <div className="mt-15 flex flex-col gap-5">
        <Link to={"/"}>
          <SideBarActions icon={<Home />} text={"Home"} />
        </Link>
        <Link to={"/mytasks"}>
          <SideBarActions icon={<LineChart />} text={"My Tasks"} />
        </Link>
        <Link to={"/today"}>
          <SideBarActions icon={<Calendar />} text={"Today"} />
        </Link>
        <Link to={"/upcoming"}>
          <SideBarActions icon={<Clock />} text={"Upcoming"} />
        </Link>
        <Link to={"/completed"}>
          <SideBarActions icon={<CheckIcon />} text={"Completed"} />
        </Link>
        <Link to={"/settings"}>
          <SideBarActions icon={<Settings />} text={"Settings"} />
        </Link>
      </div>

      <div className="bg-violet-500 w-[80%] h-[25%] rounded-md fixed bottom-25 "></div>

      {/* Profile shortcut */}
      <span className="bg-white fixed left-0 bottom-10 flex w-full justify-around  items-center  ">
        <span className="bg-violet-700 text-white rounded-full p-2">ON</span>
        <h3>Oyinloye Nifemi</h3>
        <ArrowDown10 className="hover:cursor-pointer" />
      </span>
    </aside>
  );
}

export default SideBar;
