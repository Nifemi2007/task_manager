import Button from "./Button";

function AddTaskForm({ control_task }) {
  return (
    <form className="flex flex-col gap-4  absolute top-[25%] left-[10%] lg:left-[30%]   h-[50%] w-[80%] lg:w-[40%] bg-white shadow-2xl rounded-xl p-8">
      <span className="flex justify-between mb-2">
        <h2 className="font-bold text-2xl">Add Task</h2>
        <span className="flex gap-2">
          <Button text={"Cancel"} control_task={control_task} />
          <Button text={"Save"} />
        </span>
      </span>

      <span>
        <label htmlFor="Title">Title</label>
        <input type="text" name="title" />
      </span>

      <span>
        <label htmlFor="Description">Description</label>
        <input type="text" name="title" />
      </span>

      <span className="flex flex-col gap-2">
        <label htmlFor="Priority">Priority</label>
        <select
          name="priority"
          className="border border-gray-400 rounded-md p-2"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </span>

      <span>
        <label htmlFor="due_date">Due Date</label>
        <input type="date" name="date" />
      </span>

      {/* <label htmlFor="Title">Title</label>
      <input type="text" name="title" /> */}
    </form>
  );
}

export default AddTaskForm;
