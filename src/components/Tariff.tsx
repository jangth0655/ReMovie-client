import React from "react";
import styled from "styled-components";
import { Button } from "./Shared";

const TariffItems = styled.div`
  width: 100%;
  height: 20rem;
  @media screen and (max-width: 1024px) {
    height: 13rem;
    &:nth-child(n + 1) {
      margin-bottom: 0.5rem;
    }
  }
`;
const TariffItem = styled.div`
  background-color: #1a1a22;
  padding: ${(props) => props.theme.gap.small};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius.lg};

  &:hover {
    border: 1px solid ${(props) => props.theme.color.active.strong};
  }
`;

const TariffDescription = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const TariffTitleBox = styled.div`
  margin-bottom: ${(props) => props.theme.gap.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
const TariffTitle = styled.span`
  margin-bottom: ${(props) => props.theme.gap.micro};
`;
const TariffPrice = styled.span`
  font-size: ${(props) => props.theme.fontSize.big};
`;

const TariffRange = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.fontSize.micro};
  margin-bottom: ${(props) => props.theme.gap.small};
`;
const WhoTariff = styled.span`
  color: ${(props) => props.theme.color.text.dark};
`;
const PeriodTariff = styled.span`
  color: ${(props) => props.theme.color.active.medium};
`;

const TariffInfoBox = styled.div`
  font-size: ${(props) => props.theme.fontSize.micro};
  margin-bottom: ${(props) => props.theme.gap.small};
`;
const TariffInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.gap.micro};
`;
const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.3rem;
`;
const Check = styled.svg`
  width: 1rem;
  height: 1rem;
`;
const InfoSpan = styled.span``;

const ChooseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Choose = styled(Button)`
  width: 100%;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
`;

type Title = "Base" | "Comfort" | "Premium";

interface TariffProps {
  title: Title;
  price: number;
}

const Tariff: React.FC<TariffProps> = ({ title, price }) => {
  return (
    <TariffItems>
      <TariffItem>
        <TariffDescription>
          <div>
            <TariffTitleBox>
              <TariffTitle>{title}</TariffTitle>
              <TariffPrice>$ {price}</TariffPrice>
            </TariffTitleBox>
            <TariffRange>
              {title === "Premium" ? (
                <WhoTariff>For a home cinema feel !</WhoTariff>
              ) : (
                <WhoTariff>For fun and views with the family</WhoTariff>
              )}
              <PeriodTariff>30 days free</PeriodTariff>
            </TariffRange>
          </div>

          <TariffInfoBox>
            <TariffInfo>
              <CheckBox>
                <Check
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="4"
                >
                  <path d="M5 13l4 4L19 7" />
                </Check>
              </CheckBox>
              <InfoSpan>Unlimited movies, TV series and more</InfoSpan>
            </TariffInfo>
            {title === "Comfort" || title === "Premium" ? (
              <TariffInfo>
                <CheckBox>
                  <Check
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </Check>
                </CheckBox>
                <InfoSpan>Simultaneous viewing on 4 screens</InfoSpan>
              </TariffInfo>
            ) : (
              <TariffInfo>
                <CheckBox>
                  <Check
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </Check>
                </CheckBox>
                <InfoSpan>Simultaneous viewing on 4 screens</InfoSpan>
              </TariffInfo>
            )}
            {title === "Comfort" ? (
              <TariffInfo>
                <CheckBox>
                  <Check
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </Check>
                </CheckBox>
                <InfoSpan>HD quality</InfoSpan>
              </TariffInfo>
            ) : title === "Premium" ? (
              <TariffInfo>
                <CheckBox>
                  <Check
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </Check>
                </CheckBox>
                <InfoSpan>UltraHD quality</InfoSpan>
              </TariffInfo>
            ) : (
              <TariffInfo>
                <CheckBox>
                  <Check
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </Check>
                </CheckBox>
                <InfoSpan>HD quality</InfoSpan>
              </TariffInfo>
            )}
          </TariffInfoBox>
        </TariffDescription>
        <ChooseButton>
          <Choose>Choose a tariff</Choose>
        </ChooseButton>
      </TariffItem>
    </TariffItems>
  );
};

export default Tariff;
