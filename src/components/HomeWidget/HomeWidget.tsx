import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Container = styled("div")({
  maxWidth: "660px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  rowGap: "100px",
});

const TextH1 = styled("h1")({
  fontFamily: "Roboto",
  color: "#275E8C",
});

export const HomeWidget = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/avia");
  };

  return (
    <Container>
      <TextH1>Добро пожаловать на сайт покупки авиабилетов Випсервис</TextH1>
      <Button
        onClick={handleClick}
        variant="contained"
        style={{
          width: "300px",
          height: "80px",
          fontFamily: "Roboto",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        Купить билет
      </Button>
    </Container>
  );
};
