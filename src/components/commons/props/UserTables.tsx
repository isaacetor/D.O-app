import React from "react";
import styled from "styled-components";

const UserTables = () => {
  const history = [
    {
      subject: "Special Request",
      assigned: "Musa",
      date: "June 10, at 12.00 pm",
      status: "Closed",
      closed: "June 10, at 2.00 pm",
    },
    {
      subject: "Normal Request",
      assigned: "Ibrahim",
      date: "June 10, at 12.00 pm",
      status: "Closed",
      closed: "June 10, at 2.00 pm",
    },
    {
      subject: "Special Request",
      assigned: "Ahmed",
      date: "June 10, at 12.00 pm",
      status: "Open",
      closed: "June 10, at 2.00 pm",
    },
    {
      subject: "Normal Request",
      assigned: "Hakeem",
      date: "June 10, at 12.00 pm",
      status: "Closed",
      closed: "June 10, at 2.00 pm",
    },
  ];
  return (
    <Container>
      <GridComp>
        <Heads>
          <GridItems>Subject</GridItems>
          <GridItems>Assigned to</GridItems>
          <GridItems>Date</GridItems>
          <GridItems>Status</GridItems>
          <GridItems>Closed</GridItems>
        </Heads>
        <Tails>
          {history.map((el: any) => (
            <Datas>
              <GridItems>{el.subject}</GridItems>
              <GridItems>{el.assigned}</GridItems>
              <GridItems>{el.date}</GridItems>
              <GridItems>{el.status}</GridItems>
              <GridItems>{el.closed}</GridItems>
            </Datas>
          ))}
        </Tails>
      </GridComp>
    </Container>
  );
};

export default UserTables;

const Container = styled.div`
  width: 100%;
`;
const GridComp = styled.div`
  width: 100%;
`;
const GridItems = styled.div`
  /* height: 60px; */
  display: flex;
  padding-left: 5px;
  align-items: center;
  color: black;
`;
const Heads = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-size: 16px;
  font-weight: bold;
`;
const Tails = styled.div`
  width: 100%;
  font-size: 13px;
  grid-row-gap:20px
`;
const Datas = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
