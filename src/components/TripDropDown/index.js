import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export const TripDropDown = () => {


  // Function give me speciefc Day type of Month  ----------------------------------
  function getSundaysFromToday() {
    let sundays = [];
    let today = new Date("2024-09-17");
    let anotherDay = new Date("2024-09-30");
    // If today is not Sunday, adjust the date to the next Sunday
    let dayOfWeek = today.getDay();
    if (dayOfWeek !== 0) {
      today.setDate(today.getDate() + (7 - dayOfWeek));
    }
  
    // Collect all Sundays from today until the end of the month
    while (today.getMonth() === new Date().getMonth()) {
      sundays.push(new Date(today));
      today.setDate(today.getDate() + 7); // Move to the next Sunday
    }
    
    return sundays;
  }
  
  // Example: Get all Sundays from today until the end of the month
  let sundays = getSundaysFromToday();
  console.log(sundays);
  
    const Trips =[
  
            { label: 'GanetSinai 3Nights 15-9 ', value: '1500' },
            { label: 'Ecotel', date: 'Weekend' },
            { label: 'Oricana', date: 'Weekend' },
            { label: 'GanetSinai', date: 'sunday' },
            { label: 'Ecotel', date: 'sunday' },
            { label: 'Oricana', date: 'sunday' },
            
        ]
  return (
 
  
        <Autocomplete
          disablePortal
          fullWidth
          options={Trips}
          renderInput={(params) => <TextField {...params} label="Trip" />}
        />
  )
}
