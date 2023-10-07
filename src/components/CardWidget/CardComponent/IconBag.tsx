import bag from "../../../assets/bag.svg";
import sum from "../../../assets/sum.svg";
import styled from "@emotion/styled";

const LogoContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "end",
  columnGap: "10px",
  width: "50px",
  height: "46px",
});

export const IconBag = () => {
  return (
    <LogoContainer>
      <img src={sum} />
      <img src={bag} />
    </LogoContainer>
  );
};
