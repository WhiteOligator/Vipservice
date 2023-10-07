import styled from "@emotion/styled";
import { Layout } from "../../components/Layout";
import { Link } from "react-router-dom";

const Not = styled("h1")({
  marginTop: "100px",
});

export const NotFound404 = () => {
  return (
    <Layout>
      <Not>NotFound404</Not>
      <Link to={"/avia"}>
        <Not>Перейти к выбору билетов</Not>
      </Link>
    </Layout>
  );
};
