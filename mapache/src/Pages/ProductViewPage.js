import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Wrapper = styled(Container)`
  background: #f5f5f5;
  height: 100vh;
`;

const ProductViewPage = () => (
  <Wrapper maxWidth="xl">
    <Header />
    <h1> Pagina principal do produto </h1>
    <Link to="/">
      <Button size="small" color="primary">
        voltar para página principal
      </Button>
    </Link>
    <Footer />
  </Wrapper>
);

export default ProductViewPage;
