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
      <CardImage src={imgPic} />
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
const CardButton = styled.button`
  max-width: 200px;
  border-radius: 5px;
  background-color: white;
  color: #03b903;
  border: none;
  outline: none;
  font-weight: bold;
  padding: 10px 20px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    color: #fff;
    border: 2px solid #fff;
    background-color: transparent;
    transform: scale(0.98);
  }
`;
const HText1 = styled.div<{ bigTextCol: string }>`
  font-size: 25px;
  font-weight: 700;
  margin-top: 20px;
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
  width: 100px;
  img {
    width: 100%;
  }
`;

const CardComponent2 = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  gap: 20px;
  width: calc(100% - 20px);
  padding: 20px;
  background-color: #cecfffad;
  @media screen and (min-width: 670px) {
    width: calc(45% - 20px);
  }
`;
const CardButton2 = styled.button`
  max-width: 200px;
  border-radius: 5px;
  color: white;
  background-color: #2600ff;
  border: none;
  outline: none;
  font-weight: bold;
  padding: 10px 20px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    background-color: #03b903;
  }
`;
const HText2 = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #2600ff;
  @media screen and (min-width: 800px) {
    font-size: 29px;
  }
`;
const LText2 = styled.div`
  font-size: 12px;
  color: #3d3d3d;

  @media screen and (min-width: 800px) {
    font-size: 22px;
  }

  @media screen and (max-width: 799px) {
    font-size: 17px;
  }
`;
const CardImage2 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  img {
    width: 90%;
    height: 90%;
  }
`;
const Pending = styled.div`
  margin-bottom: 100px;
`;
const PendingActions = styled.div`
  width: calc(100% - 20px);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: #ececec;
  margin-bottom: 10px;
`;
const PendSign = styled.div`
  padding: 1px 7px;
  border-radius: 2px;
  color: white;
  font-weight: 600;
  background-color: orange;
  font-size: 14px;
`;
