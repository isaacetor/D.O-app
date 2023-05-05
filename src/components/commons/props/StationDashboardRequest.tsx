import React from "react";
import styled from "styled-components";
import { IoMdPerson } from "react-icons/io";
import { TfiAngleRight } from "react-icons/tfi";

const StationDashboardRequest = () => {
  return (
    <Two>
      <Tit>Recent Request</Tit>
      <Pro>
        <Ips>
          <IoMdPerson />
        </Ips>
        <Ad>
          <Nam>Iya Sodiq</Nam>
          <Ads>3, Asafa street</Ads>
        </Ad>
        <Ij>
          <TfiAngleRight />
        </Ij>
      </Pro>
      <Pro>
        <Ips>
          <IoMdPerson />
        </Ips>
        <Ad>
          <Nam>Iya Sodiq</Nam>
          <Ads>3, Asafa street</Ads>
        </Ad>
        <Ij>
          <TfiAngleRight />
        </Ij>
      </Pro>
      <Pro>
        <Ips>
          <IoMdPerson />
        </Ips>
        <Ad>
          <Nam>Iya Sodiq</Nam>
          <Ads>3, Asafa street</Ads>
        </Ad>
        <Ij>
          <TfiAngleRight />
        </Ij>
      </Pro>
      <Pro>
        <Ips>
          <IoMdPerson />
        </Ips>
        <Ad>
          <Nam>Iya Sodiq</Nam>
          <Ads>3, Asafa street</Ads>
        </Ad>
        <Ij>
          <TfiAngleRight />
        </Ij>
      </Pro>
      <Pro>
        <Ips>
          <IoMdPerson />
        </Ips>
        <Ad>
          <Nam>Iya Sodiq</Nam>
          <Ads>3, Asafa street</Ads>
        </Ad>
        <Ij>
          <TfiAngleRight />
        </Ij>
      </Pro>
      <Pro>
        <Ips>
          <IoMdPerson />
        </Ips>
        <Ad>
          <Nam>Iya Sodiq</Nam>
          <Ads>3, Asafa street</Ads>
        </Ad>
        <Ij>
          <TfiAngleRight />
        </Ij>
      </Pro>
    </Two>
  );
};

export default StationDashboardRequest;

const Pro = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  border-bottom: 1px solid lightgray;
  padding: 9px;
`;
const Ij = styled.div``;
const Ad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Ads = styled.div``;
const Ips = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  color: white;
  font-weight: bold;
  font-size: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nam = styled.div``;
const Tit = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: black;
  color: white;
  position: sticky;
  align-items: center;
  padding-left: 10px;
`;

const Two = styled.div`
  width: 100%;
  /* height: fit-content; */
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 2.6px;
`;
