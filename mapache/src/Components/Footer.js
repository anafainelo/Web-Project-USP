import React from "react";
import styled from "styled-components";
import PaymentIcon from "@material-ui/icons/Payment";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const FooterWrapper = styled.div`
  background: #03a6a1;
  margin: 30px 0px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
`;

const WelcomeToMapache = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PaymentMethodsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PaymentMethods = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SocialNetworksBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SocialNetworks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 30px;
  color: white;
  margin-bottom: -10px;
`;

const Description = styled.p`
  font-family: "Arial", Gadget, sans-serif;
  font-size: 15px;
  color: white;
`;

const DescriptionBox = styled.p`
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 20px;
  color: white;
`;

const Method = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;

const SocialNetwork = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;

const StyledPaymentIcon = styled(PaymentIcon)`
  color: white;
  margin-bottom: -10px;
`;

const StyledLoyaltyIcon = styled(LoyaltyIcon)`
  color: white;
  margin-bottom: -10px;
`;

const StyledInstagramIcon = styled(InstagramIcon)`
  color: white;
  margin-bottom: -10px;
`;

const StyledFacebookIcon = styled(FacebookIcon)`
  color: white;
  margin-bottom: -10px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <WelcomeToMapache>
        <Title>mapache</Title>
        <Description>A melhor loja do Brasil.</Description>
      </WelcomeToMapache>

      <PaymentMethodsBox>
        <DescriptionBox>Formas de Pagamento</DescriptionBox>
        <PaymentMethods>
          <Method>
            <StyledPaymentIcon />
            <Description>Cartão de Crédito</Description>
          </Method>
          <Method>
            <StyledLoyaltyIcon />
            <Description>Cartão de Presente</Description>
          </Method>
        </PaymentMethods>
      </PaymentMethodsBox>

      <SocialNetworksBox>
        <DescriptionBox>Redes Sociais</DescriptionBox>
        <SocialNetworks>
          <SocialNetwork>
            <StyledInstagramIcon />
            <Description>Intagram</Description>
          </SocialNetwork>

          <SocialNetwork>
            <StyledFacebookIcon />
            <Description>Facebook</Description>
          </SocialNetwork>
        </SocialNetworks>
      </SocialNetworksBox>
    </FooterWrapper>
  );
};

export default Footer;
