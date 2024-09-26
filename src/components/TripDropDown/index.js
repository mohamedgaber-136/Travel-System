import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const TripDropDown = ({ setFieldValue, setSelectedTrip }) => {
  const Trips = [
    { label: 'Ecotel', value: '1200' },
    { label: 'Oricana', value: '1300' },
    { label: 'GanetSinai', value: '12500' },
  ];

  // logic for trip dates begin here ..
  // const getDayNumberFromString = (dayString) => {
  //   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  //   const fullDayString = daysOfWeek.find(day =>
  //     day.toLowerCase().startsWith(dayString.toLowerCase())
  //   );

  //   if (!fullDayString) {
  //     throw new Error("Invalid day input");
  //   }

  //   return daysOfWeek.indexOf(fullDayString);
  // };

  // const getSpecificDaysBetweenDates = (startDate, endDate, dayNames) => {
  //   const daysDates = []; // To store all Sundays and Tuesdays

  //   // Convert day strings to day numbers using the helper function
  //   const dayNumbers = dayNames.map(getDayNumberFromString);

  //   // Loop through the date range
  //   while (startDate <= endDate) {
  //     const dayOfWeek = startDate.getDay();

  //     if (dayNumbers.includes(dayOfWeek)) {
  //       daysDates.push(new Date(startDate).toLocaleDateString()); // Clone and store the date
  //     }

  //     // Move to the next day
  //     startDate.setDate(startDate.getDate() + 1);
  //   }

  //   return daysDates;
  // };
  
  // test logic ..
  // useEffect(() => {
  //   console.log('hello there')
  //   // Example usage:
  //   const daysBetweenDateRange = getSpecificDaysBetweenDates(new Date(), new Date('2024-10-31'), ['sun', 'mon']);
  //   console.log(daysBetweenDateRange);
  // }, [])

  return (
    <Autocomplete
      disablePortal
      fullWidth
      options={Trips}
      isOptionEqualToValue={(option) => option.label}
      onChange={(event, newValue) => {
        if (newValue) {
          console.log(newValue.value)
          setFieldValue('person_cost', newValue.value);
          setSelectedTrip(newValue.value)// Set the person_cost based on selected trip value
        }
      }}
      renderInput={(params) => <TextField {...params} label="Trip" />}
    />
  );
};

TripDropDown.propTypes = {
  setFieldValue: PropTypes.any,
  setSelectedTrip: PropTypes.any,
};
