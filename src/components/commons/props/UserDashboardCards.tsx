import react from "react";
import styled from "styled-components";
import spiral from "../../../assets/robo.svg";
import two from "../../../assets/two.svg";
import React from "react";
import Globalbutton from "./Globalbutton";
interface iCard {
  bgcol1: string;
  bigText: string;
  bigTextCol: string;
  smallText: string;
  smallTextCol: string;
  imgPic: string;
}

const UserDashboardCards: React.FC<iCard> = ({
  bgcol1,
  bigText,
  bigTextCol,
  smallText,
  smallTextCol,
  imgPic,
}) => {
  return (
    <CardComponent bgcol1={bgcol1}>
      <CardImageHold>
        <CardImage src={imgPic} />
      </CardImageHold>

      <Hold>
        <HText1 bigTextCol={bigTextCol}>{bigText}</HText1>
        <LText1 style={{ fontSize: "15px" }} smallTextCol={smallTextCol}>
          {smallText}
        </LText1>
      </Hold>
    </CardComponent>
  );
};
export default UserDashboardCards;

const CardImageHold = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Hold = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardComponent = styled.div<{ bgcol1: string }>`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  gap: 20px;
  width: 100%;
  background-color: ${({ bgcol1 }) => bgcol1};
`;
const HText1 = styled.div<{ bigTextCol: string }>`
  font-size: 25px;
  font-weight: 700;
  text-transform: capitalize;

  color: ${({ bigTextCol }) => bigTextCol};

  @media screen and (min-width: 800px) {
    font-size: 29px;
  }
`;
const LText1 = styled.div<{ smallTextCol: string }>`
  font-size: 12px;
  margin-top: 10px;
  color: ${({ smallTextCol }) => smallTextCol};

  @media screen and (min-width: 800px) {
    font-size: 22px;
  }
`;
const CardImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
`;
