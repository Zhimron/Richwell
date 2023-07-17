import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function Datepick(props) {
  const [focus, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const { error, name } = props;
  let registerProps = {};
  if (props.register) {
    registerProps = { ...props.register(name) };
  }
  return (
    <>
      <TextField
        onFocus={onFocus}
        onBlur={onBlur}
        InputProps={{
          classes: {
            input: "CustomTextField",
          },
        }}
        onChange={(e) => {
          if (e.target.value) setHasValue(true);
          else setHasValue(false);
        }}
        label="Date"
        type={hasValue || focus ? "date" : "text"}
        className="w-full"
        variant="filled"
        color="secondary"
        {...registerProps}
        error={!!error}
        helperText={error?.message}
        name={name}
      />
    </>
  );
}

export default Datepick;
