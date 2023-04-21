import React from "react";
import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

const UserRequestTable = () => {
  const data = [
    {
      date: "23 Jan,2022",
      id: "x42495",
      start: "10.00pm",
      assigned: true,
      status: false,
    },
    {
      date: "23 Feb,2022",
      id: "h77654",
      start: "07.00pm",
      assigned: false,
      status: true,
    },
    {
      date: "23 Nov,2022",
      id: "Gtt667",
      start: "07.00pm",
      assigned: true,
      status: false,
    },
    {
      date: "23 Nov,2022",
      id: "Gtt667",
      start: "07.00pm",
      assigned: true,
      status: false,
    },
    {
      date: "23 Nov,2022",
      id: "Gtt667",
      start: "07.00pm",
      assigned: false,
      status: true,
    },
  ];

  return (
    <Container>
      <Titles>
        <div>Date</div>
        <div>ID</div>
        <div>Time</div>
        <Hll>
          <Short>A/D</Short>
          <Complete>Assigned</Complete>
        </Hll>
        <div>Status</div>
      </Titles>
      {data?.map((el: any) => (
        <Subjects>
          <div>{el.date}</div>
          <ID>{el.id}</ID>
          <div>{el.start}</div>
          <Assigned
            // bcc={el.assigned ? "green" : "red"}
            cll={el.assigned ? "#26d80e" : "#ff2f2fe1"}>
            {el.assigned ? <AiOutlineCheckCircle /> : <MdOutlineCancel />}
          </Assigned>
          <Status
            cl={el.status ? "#87d80e" : "#ff2f2fe1"}
            bc={el.status ? "#acff2f30" : "#ff2f2f30"}>
            {el.status ? " Open" : "Closed"}
          </Status>
        </Subjects>
      ))}
    </Container>
  );
};

export default UserRequestTable;

const Container = styled.div`
  width: 100%;
  font-size: 10px;
  @media screen and (min-width: 600px) {
    font-size: 15px;
  }
`;
const Titles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 3fr 3fr 2fr 3fr;
  grid-column-gap: 40px;
  color: #a1a0a0;
  font-weight: 600;
  margin-bottom: 10px;
  padding-top: 25px;
  border-top: 1px solid #dfdede;
`;
const Subjects = styled.div`
  width: 100%;
  display: grid;
  font-weight: 600;
  grid-template-columns: 4fr 3fr 3fr 2fr 3fr;
  border-top: 1px solid #f3f3f3;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #5c5b5b;
`;
const Status = styled.button<{ bc: string; cl: string }>`
  font-size: 11px;
  font-weight: 700;
  /* background-color: #ff2f2f8f;
  color: #87d80e; */
  background-color: ${(props) => props.bc};
  color: ${(props) => props.cl};
  border: none;
  outline: none;
  padding: 6px;
  border-radius: 3px;
  max-width: 60%;
  min-width: 50%;
  /* @media screen and (min-width: 600px) {
    max-width: 40%;
  } */
`;
const ID = styled.div`
  cursor: pointer;
`;
const Assigned = styled.div<{ cll: string }>`
  /* border-radius: 50%; */
  border: none;
  outline: none;
  /* padding: 5px; */
  color: ${(props) => props.cll};
  font-size: 16px;
  @media screen and (min-width: 600px) {
    font-size: 17px;
  }
  display: none;
  @media screen and (min-width: 320px) {
    display: block;
  }
`;
const Short = styled.div`
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
const Complete = styled.div`
  display: none;
  @media screen and (min-width: 1000px) {
    display: block;
  }
`;
const Hll = styled.div`
  display: none;
  @media screen and (min-width: 320px) {
    display: block;
  }
`;
