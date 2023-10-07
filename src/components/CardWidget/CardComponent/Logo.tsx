import svg from "../../../assets/logo.svg";
import styled from "@emotion/styled";

const LogoContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  rowGap: "8px",
  width: "90px",
  marginTop: "28px",
});

const LogoText = styled("p")(`
    color: #5C5C5C;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`);

export const Logo = () => {
  return (
    <LogoContainer>
      <img src={svg} />
      <LogoText>S7 Airlines</LogoText>
    </LogoContainer>
  );
};
