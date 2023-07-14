import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Datepick(props) {
  const { label, value, onChange, name } = props;

  const handleDateChange = (date) => {
    const event = {
      target: {
        name,
        value: date.toISOString(),
      },
    };
    onChange(event);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={handleDateChange}
        name={name}
        inputFormat="MM.dd.yyyy"
        className={`w-full`}
        inputVariant="outlined"
        inputProps={{
          sx: {
            "& fieldset": {
              borderColor: "gray",
            },
            "&.Mui-focused fieldset": {
              borderColor: "purple",
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default Datepick;
