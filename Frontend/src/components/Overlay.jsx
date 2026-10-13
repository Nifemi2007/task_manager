function Overlay({ control }) {
  return (
    <div
      className={`${control} blur-bg h-full w-full opacity-[0.9] bg-white absolute`}
    ></div>
  );
}

export default Overlay;
