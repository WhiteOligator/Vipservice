import styled from "@emotion/styled";
import { useAppSelector } from "../../../hooks/hooks";
import { selectData } from "../../DataWidget/aviaRoadSlice";

const Container = styled("div")({
  width: "20%",
  borderLeft: "1px solid #DDE3EE",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Cost = styled("p")(`
    color: #232323;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`);

export const LeftLine = () => {
  const { road } = useAppSelector(selectData);
  return (
    <Container>
      <div>
        <Cost>{road === 0 ? `${4_150} ₽` : `${4_150 * 2} ₽`}</Cost>
      </div>
    </Container>
  );
};
