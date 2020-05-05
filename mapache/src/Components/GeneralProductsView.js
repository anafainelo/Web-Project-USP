import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import tv from "../Images/tv.jpg";
import tv2 from "../Images/tv2.jpg";
import tv3 from "../Images/tv3.jpg";
import fogao1 from "../Images/fogao1.jpg";
import fogao2 from "../Images/fogao2.jpg";

import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";

const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPaper = styled(Paper)`
  margin: 20px 50px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background: #03a6a1;
  margin-bottom: 10px;
`;
const Category = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 10px;
  width: 50%;
  color: white;
`;

const MoreInfo = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;
const ProductList = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledCard = styled(Card)`
  width: 20%;
  margin: 10px 20px;
`;

const GeneralProductsView = () => {
  const singleCard = (image) => {
    return (
      <StyledCard>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="TV"
            height="140"
            image={image}
            title="TV"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              TV Led Samsung
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              R$2000,00
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/product">
            <Button size="small" color="primary">
              veja o produto
            </Button>
          </Link>
        </CardActions>
      </StyledCard>
    );
  };

  return (
    <ListsContainer>
      <StyledPaper elevation={20}>
        <Header>
          <Category>Hardware</Category>
          <MoreInfo>
            <Button>
              ver todos
              <KeyboardArrowRightOutlinedIcon />
            </Button>
          </MoreInfo>
        </Header>
        <ProductList>
          {singleCard(tv)}
          {singleCard(fogao1)}
          {singleCard(tv2)}
          {singleCard(fogao2)}
          {singleCard(tv3)}
        </ProductList>
      </StyledPaper>

      <StyledPaper elevation={20}>
        <Header>
          <Category>Eletrônicos</Category>
          <MoreInfo>
            <Button>
              ver todos
              <KeyboardArrowRightOutlinedIcon />
            </Button>
          </MoreInfo>
        </Header>
        <ProductList>
          {singleCard(tv)}
          {singleCard(fogao1)}
          {singleCard(tv2)}
          {singleCard(fogao2)}
          {singleCard(tv3)}
        </ProductList>
      </StyledPaper>
    </ListsContainer>
  );
};

export default GeneralProductsView;
