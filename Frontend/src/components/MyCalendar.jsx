import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

function MyCalendar() {
  //   const [selected, setSelected] = useState(new Date());
  const [selected, setSelected] = useState(new Date());

  return (
    <div className=" h-full">
      <h2 className="font-bold text-[18px] mb-4 text-right">View Calendar</h2>
      <div className="bg-bluish p-5 overflow-auto rounded-lg ">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          classNames={{
            root: "w-full",
            today: "font-bold text-violet-600 text-[20px]",
            selected: "text-red-400 font-bold text-[20px]",
            month_caption: "mb-10 font-bold ",
            month: "border-none ",
            day_button: "h-10 w-5 rounded-full border-0 hover:cursor-pointer ",
            day: "border-seperate border-0",
          }}
        />
      </div>
    </div>
  );
}

export default MyCalendar;
