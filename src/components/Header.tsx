import { styled } from "@mui/system";

const HeaderSection = styled("section")({
  width: "100%",
  height: "50px",
  backgroundColor: "#5C87DB",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
});

const Text = styled("h1")({
  color: "#fff",
});

export const Header = () => {
  return (
    <HeaderSection>
      <Text>Тестовое задание Випсервис</Text>
    </HeaderSection>
  );
};
