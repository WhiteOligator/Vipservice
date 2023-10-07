import { FC } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { Logo } from "./Logo";
import { DataTime } from "./DataTime";
import { Road } from "./Road";
import { IconBag } from "./IconBag";
import { Value } from "../../DataWidget/aviaRoadSlice";
import { TimePeriod } from "./TimePeriod";

const CardSection = styled("section")({
  width: "100%",
  height: "200px",
  background: "#fff",
  borderRadius: "15px",
});

const Irrevocable = styled("div")({
  width: "100%",
  height: "26px",
  backgroundColor: "#8BA5D8",
  borderRadius: "15px 0px 15px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const IrrevocableText = styled("p")(`
    color: #FFF;
    text-align: start;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`);

const TopLine = styled("div")({
  width: "100%",
  borderTop: "1px dotted #5C87DB",
});

const TimeContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "20px",
  marginTop: "20px",
});

const massPeriod = [
  ["9:20", "11:05"],
  ["10:20", "12:05"],
  ["11:20", "13:05"],
];

type CardProps = {
  number: number;
  usePeriod: string[];
  value: Value;
};

export const Card: FC<CardProps> = ({ number, usePeriod, value }) => {
  console.log(value, "use");
  return (
    <CardSection>
      <Grid container justifyContent={"flex-start"}>
        <Grid item xs={2}>
          <Irrevocable>
            <IrrevocableText>Невозвратный</IrrevocableText>
          </Irrevocable>
        </Grid>
        {value.toDate !== "" && number === 1 && (
          <Grid item xs={10}>
            <TopLine />
          </Grid>
        )}
        <Grid container>
          <Grid item xs={2}>
            <Logo />
          </Grid>
          <Grid item xs={2}>
            <DataTime
              time={usePeriod[0]}
              city={value.fromCity}
              date={value.fromDate}
            />
          </Grid>
          <Grid item xs={4}>
            <Road />
          </Grid>
          <Grid item xs={2}>
            <DataTime
              time={usePeriod[1]}
              city={value.toCity}
              date={value.fromDate}
            />
          </Grid>
          <Grid item xs={2}>
            <IconBag />
          </Grid>
        </Grid>
        <TimeContainer>
          {massPeriod.map((period: string[], id) => (
            <TimePeriod
              key={`${usePeriod}-${id}`}
              activePeriod={usePeriod}
              number={number}
              period={period}
            />
          ))}
        </TimeContainer>
      </Grid>
    </CardSection>
  );
};
