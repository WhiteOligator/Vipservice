import styled from "@emotion/styled";
import React, { FC, FocusEvent } from "react";
import { FormikTouched, FormikErrors } from "formik";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

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
  nameFrom: string;
  nameTo: string;
  value: {
    fromCity: string;
    toCity: string;
    fromDate: string;
    toDate: string;
  };
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
  error: FormikErrors<{
    fromCity: string;
    toCity: string;
    fromDate: string;
    toDate: string;
  }>;
  touched: FormikTouched<{
    fromCity: string;
    toCity: string;
    fromDate: string;
    toDate: string;
  }>;
};

export const DateInput: FC<PropsCity> = ({
  nameFrom,
  nameTo,
  value,
  setFieldValue,
  error,
  onBlur,
  touched,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.name, event.target.value);
  };

  return (
    <Grid container alignItems={"start"} justifyContent={"center"}>
      <Grid item xs={5}>
        <Grid item xs={12}>
          <div style={{ textAlign: "start", color: "#fff" }}>
            <p>{"Туда"}</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <TextInput
            name={nameFrom}
            value={value.fromDate}
            fullWidth
            onChange={handleChange}
            error={
              Boolean(error.fromDate) &&
              touched.fromDate &&
              Boolean(error.fromDate)
            }
            helperText={
              Boolean(error.fromDate) && touched.fromDate && error.fromDate
            }
            onBlur={onBlur}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <Grid item xs={12}>
          <HorizontalRuleIcon style={{ color: "white", marginTop: "30px" }} />
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Grid item xs={12}>
          <div style={{ textAlign: "start", color: "#fff" }}>
            <p>{"Обратно"}</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <TextInput
            name={nameTo}
            value={value.toDate}
            fullWidth
            onChange={handleChange}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
