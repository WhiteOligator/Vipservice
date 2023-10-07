import styled from "@emotion/styled";
import { FC } from "react";

const DateTimeContainer = styled("div")(`
    display: inline-flex;
    flex-direction: column;
    text-align: start;
    gap: 8px;
    margin-top: 20px;
`);

const Time = styled("p")(`
    color: #232323;
    text-align: start;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
`);

const City = styled("p")(`
    color: !#5C5C5C;
    font-family: !Roboto;
    font-size: !14px;
    font-style: !normal;
    font-weight: !500;
    line-height: !normal;
`);

const Date = styled("p")(`
    color: !#5C5C5C;
    font-family: !Roboto;
    font-size: !14px;
    font-style: !normal;
    font-weight: !400;
    line-height: !normal;
`);

const ContainerDateTime = styled("div")(`
    text-align: !start;
`);

type DataTimeProps = {
  time: string;
  city: string;
  date: string;
};

export const DataTime: FC<DataTimeProps> = ({ time, city, date }) => {
  const joinDate = date.split("-").reverse().join(".");

  return (
    <DateTimeContainer>
      <Time>{time}</Time>
      <ContainerDateTime>
        <City>{city}</City>
        <Date>{joinDate}</Date>
      </ContainerDateTime>
    </DateTimeContainer>
  );
};
