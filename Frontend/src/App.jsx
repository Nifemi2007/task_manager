import SideBar from "./components/SideBar";
import Nav from "./components/Nav";
import Dashboard from "./Pages/Dashboard";
import { useState } from "react";
import Overlay from "./components/Overlay";

function App() {
  const [open, setOpen] = useState(false);
  const [AddTask, setAddTask] = useState(false);

  const control_task = function () {
    setAddTask((prev) => !prev);
  };

  const control_sidebar = function () {
    setOpen((prev) => !prev);
  };
  return (
    <div className=" bg-bluish">
      <Overlay control={AddTask || "hidden"} />
      <div className="p-6 lg:p-10 ">
        <SideBar open={open} control_sidebar={control_sidebar} />
        <Nav control_sidebar={control_sidebar} />
        <Dashboard control_task={control_task} AddTask={AddTask} />
      </div>
    </div>
  );
}

export default App;
