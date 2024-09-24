import { DateRange } from "react-date-range";
import { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import PropTypes from "prop-types";

const FromToDateRange = ({  setDateRange }) => {
  const [openDate, setOpenDate] = useState(false);
  const wrapperRef = useRef(null); // Ref for wrapping div

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Detect clicks outside the date picker to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ensure wrapperRef points to a valid element
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenDate(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="border h-100 align-items-center justify-content-center rounded d-flex">
      <div
        onClick={() => setOpenDate(!openDate)}
        className="headerSearchText rounded d-flex justify-content-around w-100"
      >
        <span className="text-success">
          {format(date[0]?.startDate, "MM/dd/yyyy")}
        </span>
        -
        <span className="text-danger">
          {format(date[0]?.endDate, "MM/dd/yyyy")}
        </span>
      </div>

      {openDate && (
        <div ref={wrapperRef}>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => {
              setDate([item.selection]);
              console.log(item.selection, "item.selection");
              setDateRange(
                format(item.selection.startDate, "MM/dd/yyyy"),
                format(item.selection.endDate, "MM/dd/yyyy")
              );
            }}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        </div>
      )}
    </div>
  );
};

FromToDateRange.propTypes = {
  setDateRange: PropTypes.any,
};

export default FromToDateRange;
