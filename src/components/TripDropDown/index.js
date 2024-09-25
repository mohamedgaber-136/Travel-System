import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const TripDropDown = ({ setFieldValue,setSelectedTrip }) => {
  const Trips = [
    { label: 'GanetSinai 3Nights 15-9', value: '1500' },
    { label: 'Ecotel', value: '1500' },
    { label: 'Oricana', value: '1500' },
    { label: 'GanetSinai', value: '1500' },
    { label: 'Ecotel', value: '1500' },
    { label: 'Oricana', value: '1500' },
  ];

  return (
    <Autocomplete
      disablePortal
      fullWidth
      options={Trips}
      getOptionLabel={(option) => option.label}
      onChange={(event, newValue) => {
        if (newValue) {
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
