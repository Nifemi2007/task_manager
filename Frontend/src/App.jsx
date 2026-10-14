import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Nav from "./components/Nav";
import Dashboard from "./Pages/Dashboard";
import Overlay from "./components/Overlay";
import MyTasks from "./Pages/MyTasks";
import Today from "./Pages/Today";
import Upcoming from "./Pages/Upcoming";
import Completed from "./Pages/Completed";
import Settings from "./Pages/Settings";

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
    <div className=" bg-bluish min-h-screen">
      <Overlay control={AddTask || "hidden"} setAddTask={setAddTask} />
      <div className="p-6 lg:p-10 ">
        <BrowserRouter>
          <SideBar open={open} control_sidebar={control_sidebar} />
          <Nav control_sidebar={control_sidebar} />

          <Routes>
            <Route
              path="/"
              element={
                <Dashboard control_task={control_task} AddTask={AddTask} />
              }
            />

            <Route path="/mytasks" element={<MyTasks />} />
            <Route path="/today" element={<Today />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
