import styled from "@emotion/styled";
import React, { FC } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { setPeriod } from "../timePeriodSlice";

const Container = styled("button")({
  width: "100px",
  height: "34px",
  borderRadius: "10px",
  border: "1px solid #B7BAC1",
  background: "#FFF",
});

const ActiveContainer = styled("button")({
  width: "130px",
  height: "40px",
  borderRadius: "10px",
  border: "1px solid #DDE3EE",
  background: "#DDE3EE",
});

type TimePeriodProps = {
  activePeriod: string[];
  number: number;
  period: string[];
};

export const TimePeriod: FC<TimePeriodProps> = ({
  activePeriod,
  number,
  period,
}) => {
  const dispatch = useAppDispatch();

  const handlePeriod = () => {
    dispatch(setPeriod({ period, number }));
  };

  console.log(activePeriod);

  return (
    <React.Fragment>
      {JSON.stringify(activePeriod) !== JSON.stringify(period) ? (
        <Container onClick={handlePeriod}>
          {`${period[0]} - ${period[1]}`}
        </Container>
      ) : (
        <ActiveContainer onClick={handlePeriod}>
          {`${period[0]} - ${period[1]}`}
        </ActiveContainer>
      )}
    </React.Fragment>
  );
};
