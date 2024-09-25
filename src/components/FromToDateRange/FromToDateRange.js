import { DateRange } from "react-date-range";
import { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import PropTypes from "prop-types";
import { Button, Modal } from "@mui/material";
import data from "layouts/tables/data/authorsTableData";

const FromToDateRange = ({ setDateRange }) => {
  const [openDate, setOpenDate] = useState(false);
  const wrapperRef = useRef(null); // Ref for wrapping div
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        setOpen(false)
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef.current]);

  return (
    <div ref={wrapperRef} className='w-100 h-100'>
      <Button
        className="border h-100 p-0 w-100 align-items-center justify-content-center rounded d-flex flex-column"
        onClick={handleOpen}
      >
        <div >
          <div className="headerSearchText rounded d-flex justify-content-around w-100">
            <span className="text-success">
              {format(date[0]?.startDate, "MM/dd/yyyy")}
            </span>
            -
            <span className="text-danger">
              {format(date[0]?.endDate, "MM/dd/yyyy")}
            </span>
          </div>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className=' d-flex vh-100 justify-content-center align-items-center'>
          <div  ref={wrapperRef} >

          <DateRange
         
            editableDateInputs={true}
            onChange={(item) => {
              setDate([item.selection]);
              setDateRange(
                format(item.selection.startDate, "MM/dd/yyyy"),
                format(item.selection.endDate, "MM/dd/yyyy")
              );
            }}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date "
            minDate={new Date()}
          />
                    </div>

        </div>
      </Modal>
    </div>
  );
};

FromToDateRange.propTypes = {
  setDateRange: PropTypes.any,
};

export default FromToDateRange;
