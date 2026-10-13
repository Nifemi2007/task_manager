import {
  Check,
  ClipboardCheck,
  ChartNoAxesCombined,
  Clock,
  Plus,
} from "lucide-react";
import Headline from "./Header";
import StatsDisplayCard from "./StatsDisplayCard";
import TaskBoard from "./TaskBoard";
import Button from "./Button";
import AddTaskForm from "./AddTaskForm";
function LeftPanel({ control_task, AddTask }) {
  return (
    <section className="lg:w-[75%]">
      {AddTask && <AddTaskForm control_task={control_task} />}
      <Headline />
      {/* StatsDisplay  Section*/}
      <div className="grid-cols-2 grid lg:grid-cols-4 gap-5 mt-5">
        <StatsDisplayCard
          icon={<ClipboardCheck />}
          text={"Total Tasks"}
          number={7}
        />
        <StatsDisplayCard
          icon={<Check />}
          bgcolor={"bg-green-200"}
          smallcirclecolor={"bg-green-500"}
          text={"Completed"}
          number={10}
          color={"text-white"}
        />
        <StatsDisplayCard
          icon={<Clock />}
          bgcolor={"bg-yellow-200"}
          smallcirclecolor="bg-yellow-500"
          color={"text-white"}
          text={"Pending"}
          number={2}
        />
        <StatsDisplayCard
          icon={<ChartNoAxesCombined />}
          text={"Progress"}
          number={"38%"}
        />
      </div>

      {/* Task Controls */}
      <div className="flex items-center justify-between mt-15 mb-5">
        <h2 className="font-bold text-[20px] lg:text-2xl">My Tasks</h2>
        <span className="flex gap-5">
          <Button text={"All"} />
          <Button text={"Pending"} />
          <Button text={"Completed"} />
        </span>
        <Button
          color={"bg-violet-700"}
          txtColor="text-white"
          text={"Add task"}
          icon={<Plus size={20} />}
          control_task={control_task}
        />
      </div>
      <TaskBoard />
    </section>
  );
}

export default LeftPanel;
