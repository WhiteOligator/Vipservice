import React, { FC, FocusEvent } from "react";
import TextField from "@mui/material/TextField";
import { FormikErrors } from "formik";
import Autocomplete from "@mui/material/Autocomplete";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";

const TextInput = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
    borderRadius: "10px",
  },
  "& label.Mui-error": {
    borderColor: "red",
    borderRadius: "10px",
  },
  "& helperText": {
    borderColor: "red",
    borderRadius: "10px",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "black",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "black",
      borderRadius: "10px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
      borderRadius: "10px",
    },
    "&.Mui-error fieldset": {
      borderColor: "red",
      borderRadius: "10px",
    },
  },
});

type PropsCity = {
  name: string;
  options: string[];
  value: string;
  label: string;
  Label2: string;
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          fromCity: string;
          toCity: string;
          fromDate: string;
          toDate: string;
        }>
      >;
  onBlur: (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => void;
  error: string | undefined;
  touched: boolean | undefined;
};

export const CityInput: FC<PropsCity> = ({
  name,
  options,
  value,
  label,
  Label2,
  setFieldValue,
  onBlur,
  error,
  touched,
}) => {
  const handleChange = (_e: React.SyntheticEvent, valChang: string) => {
    setFieldValue(name, valChang);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <div style={{ textAlign: "start", color: "#fff" }}>
          <p>{label}</p>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          value={value}
          freeSolo
          onChange={(event, valueChange) =>
            handleChange(event, valueChange !== null ? valueChange : "")
          }
          disablePortal
          fullWidth
          options={options}
          renderInput={(params) => (
            <TextInput
              error={Boolean(error) && touched && Boolean(error)}
              helperText={Boolean(error) && touched && error}
              onBlur={onBlur}
              placeholder={Label2}
              {...params}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};
