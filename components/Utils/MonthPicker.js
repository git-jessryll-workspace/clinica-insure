import { useState, forwardRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";
export const MonthPicker = ({ onChange, datePick }) => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      onClick={onClick}
    >
      {value}
    </button>
  ));

  const __handleDecreaseMonth = (e) => {
      e.preventDefault();
      var date = startDate.setMonth(startDate.getMonth() - 1);
      setStartDate(new Date(date));
  }

  const __handelIncreaseMonth = (e) => {
    e.preventDefault();
      var date = startDate.setMonth(startDate.getMonth() + 1);
      setStartDate(new Date(date));
  }
  
  return (
    <div className="relative text-gray-400 focus-within:text-gray-600">
      <div className="absolute flex inset-y-0 left-0 items-center z-10 hover:text-gray-800 cursor-pointer" onClick={__handleDecreaseMonth}>
        <ChevronLeftIcon className="xs:h-5 xs:w-5 sm:h-4 sm:w-4 md:h-10 md:w-10" aria-hidden="true"/>
      </div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MMM Y"
        showMonthYearPicker
        customInput={<CustomInput />}
      />
      <div className="absolute ml-8 inset-y-0 right-0 z-10 flex items-center hover:text-gray-800 cursor-pointer" onClick={__handelIncreaseMonth}>
        <ChevronRightIcon className="xs:w-0 xs:h-0 sm:w-4 sm:h-4 md:h-10 md:w-10" aria-hidden="true" />
      </div>
    </div>
  );
};
