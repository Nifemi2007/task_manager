function Overlay({ control, setAddTask }) {
  return (
    <div
      className={`${control} blur-bg h-full w-full opacity-[0.9]  bg-white absolute`}
      onClick={() => setAddTask(false)}
    ></div>
  );
}

export default Overlay;
