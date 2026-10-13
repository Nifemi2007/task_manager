import RightPanel from "../components/RightPanel";
import LeftPanel from "../components/LeftPanel";
function Dashboard({ control_task, AddTask }) {
  return (
    <main className="lg:flex lg:justify-between h-screen  mt-10">
      <LeftPanel control_task={control_task} AddTask={AddTask} />
      <RightPanel />
    </main>
  );
}

export default Dashboard;
