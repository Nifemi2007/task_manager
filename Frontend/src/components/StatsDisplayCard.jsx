function StatsDisplayCard({
  icon,
  text,
  number,
  bgcolor = "bg-violet-200",
  color = "text-violet-600",
  smallcirclecolor = "bg-violet-200",
}) {
  return (
    <div className="flex gap-5 bg-white shadow-md rounded-lg p-5 h-25">
      {/* Outer circle */}
      <span
        className={`${bgcolor} p-2 h-12 w-12 rounded-full flex justify-center items-center ${color}`}
      >
        {/* small circle */}
        <span
          className={`p-1 h-8 w-8 rounded-full ${smallcirclecolor} flex justify-center items-center`}
        >
          {icon}
        </span>
      </span>
      <span>
        <p className="text-[14px] text-gray-500">{text}</p>
        <h1 className="font-bold text-3xl">{number}</h1>
      </span>
    </div>
  );
}

export default StatsDisplayCard;
