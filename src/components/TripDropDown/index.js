import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';

export const TripDropDown = ({ setFieldValue,setSelectedTrip }) => {
  const Trips = [
    { label: 'Ecotel', value: '1200' },
    { label: 'Oricana', value: '1300' },
    { label: 'GanetSinai', value: '12500' },
  ];

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
