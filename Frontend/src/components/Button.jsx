function Button({
  icon,
  text,
  color = "bg-gray-200",
  txtColor = "text-gray-600",
  control_task,
}) {
  return (
    <button
      onClick={() => control_task()}
      className={`flex items-center gap-2 ${color}  ${txtColor}  rounded-se-lg rounded-es-lg p-2 h-8 lg:p-4 lg:h-10 text-[15px] hover:cursor-pointer hover:bg-violet-300`}
    >
      {icon}
      <p>{text}</p>
    </button>
  );
}

export default Button;
