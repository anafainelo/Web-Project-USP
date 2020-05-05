import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import promotion from "../Images/promotion1.jpg";

import Paper from "@material-ui/core/Paper";

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

const PaperStyled = styled(Paper)`
  width: 80%;
  height: 350px;
  margin: 50px 0px;
`;
const BannerImage = styled(Carousel)`
  width: 70%;
  height: 70%;
`;

const Banners = () => {
  return (
    <BannerWrapper>
      <BannerImage>
        <div>
          <img src={promotion} alt="promoção" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={promotion} alt="promoção" />
          <p className="legend">Legend 1</p>
        </div>
      </BannerImage>
    </BannerWrapper>
  );
};

export default Banners;
