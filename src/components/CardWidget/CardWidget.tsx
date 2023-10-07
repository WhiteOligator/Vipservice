import { styled } from "@mui/material";
import { Card } from "./CardComponent/Card";
import { LeftLine } from "./CardComponent/LeftLine";
import { useAppSelector } from "../../hooks/hooks";
import { Value, selectData } from "../DataWidget/aviaRoadSlice";
import React from "react";
import { selectPeriod } from "./timePeriodSlice";

const SectionDate = styled("div")({
  maxWidth: "980px",
  boxShadow: "0px 0px 14px 0px rgba(112, 121, 153, 0.3)",
  borderRadius: "15px",
  display: "flex",
});

const Container = styled("div")({
  maxWidth: "800px",
  borderRadius: "15px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "end",
});

export const CardWidget = () => {
  const { value, road } = useAppSelector(selectData);
  const { valueThere, valueBack } = useAppSelector(selectPeriod);

  const backValue = (value: Value) => {
    return {
      fromCity: value.toCity,
      toCity: value.fromCity,
      fromDate: value.toDate,
      toDate: value.toDate,
    };
  };

  console.log(valueThere, "valueThere");

  return (
    <SectionDate>
      {road === 0 ? (
        <React.Fragment>
          <Card number={0} usePeriod={valueThere} value={value} />
          <LeftLine />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Container>
            <Card number={0} usePeriod={valueThere} value={value} />
            <Card number={1} usePeriod={valueBack} value={backValue(value)} />
          </Container>
          <LeftLine />
        </React.Fragment>
      )}
    </SectionDate>
  );
};
