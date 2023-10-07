import { FC } from "react";
import { Header } from "./Header";
import { styled } from "@mui/material";

type PropsLayout = {
  children: JSX.Element | JSX.Element[];
};

const RootCss = styled("section")({
  maxWidth: "100%",
  margin: "0 auto",
  textAlign: "center",
});

const RootChildren = styled("div")({
  maxWidth: "100%",
  margin: "0 auto",
  padding: "100px",
});

export const Layout: FC<PropsLayout> = ({ children }) => {
  return (
    <RootCss>
      <Header />
      <RootChildren>{children}</RootChildren>
    </RootCss>
  );
};
