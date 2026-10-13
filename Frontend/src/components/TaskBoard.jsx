import { Calendar, LucideDelete, Edit2 } from "lucide-react";

function TaskBoard() {
  const tasks = [
    {
      id: 1,
      title: "Design dashboard",
      descrption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur, at tempore, perspiciatis quo iure ut placeat itaque, quidem modi veritatis consequatur. Exercitationem amet eos eveniet perferendis, nesciunt cum molestias..",
      priority: "High",
      status: "In Progress",
      dueDate: "Oct 15, 2026",
    },
    {
      id: 2,
      title: "Build sidebar",
      descrption: "design dah..............",
      priority: "Medium",
      status: "Pending",
      dueDate: "Oct 18, 2026",
    },
    {
      id: 3,
      title: "Create login page",
      descrption: "design dah..............",
      priority: "Low",
      status: "Completed",
      dueDate: "Oct 12, 2026",
    },
    {
      id: 1,
      title: "Design dashboard",
      descrption: "design dah..............",
      priority: "High",
      status: "In Progress",
      dueDate: "Oct 15, 2026",
    },
    {
      id: 2,
      title: "Build sidebar",
      descrption: "design dah..............",
      priority: "Medium",
      status: "Pending",
      dueDate: "Oct 18, 2026",
    },
    {
      id: 3,
      title: "Create login page",
      descrption: "design dah..............",
      priority: "Low",
      status: "Completed",
      dueDate: "Oct 12, 2026",
    },
  ];

  const colors = {
    red: "bg-red-200 text-red-600",
    yellow: " bg-yellow-200 text-yellow-600",
    green: "bg-green-200 text-green-600",
    blue: "bg-blue-200 text-blue-600",
  };

  return (
    <div className="rounded-xl bg-white p-5 h-[70%] overflow-scroll scrollbar-none ">
      {tasks.map((task) => (
        <div className="shadow-md p-6 mb-4 flex gap-10 items-center bg-white rounded-md">
          <input
            type="checkbox"
            id={task.id}
            className="h-5 w-5 hover:cursor-pointer "
          />
          <div className=" w-[90%] flex justify-between items-center gap-10">
            <span className="w-[70%] lg:w-[50%]">
              <h2 className="font-bold text-[20px]">{task.title}</h2>
              <p className="text-gray-500 text-[15px] ">{task.descrption}</p>
              <p
                className={`${task.status.toLowerCase() == "completed" ? colors["green"] : ""} ${task.status.toLowerCase() == "pending" ? colors["yellow"] : ""} ${task.status.toLowerCase() == "in progress" ? colors["blue"] : ""} text-[12px] lg:text-[14px] mt-2 rounded-xl inline-block px-3 py-1 `}
              >
                {task.status}
              </p>
            </span>

            <span className="">
              <p className="flex gap-2">
                <Calendar /> {task.dueDate}
              </p>
              <p
                className={`${task.priority.toLowerCase() == "low" ? colors["green"] : ""} ${task.priority.toLowerCase() == "medium" ? colors["yellow"] : ""} ${task.priority.toLowerCase() == "high" ? colors["red"] : ""} text-[12px] lg:text-[14px] px-2 lg:px-4 py-2 mt-4 rounded-xl inline-block`}
              >
                {task.priority}
              </p>
            </span>

            <span className="flex gap-3">
              <Edit2 className="text-gray-500 hover:cursor-pointer" />
              <LucideDelete className="text-gray-500 hover:cursor-pointer" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskBoard;
