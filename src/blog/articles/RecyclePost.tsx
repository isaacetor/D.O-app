import React from "react";
import styled from "styled-components";

const RecyclePost = () => {
  return (
    <div>
      <Container>
        <Title>
          <h2>
            Introducing a Revolutionary Waste Management Solution: Paying for
            Waste with Recyclable Items on Ecobin
          </h2>
        </Title>
        <Body>
          <p>
            As the world continues to grapple with the waste management crisis,
            there is an urgent need for innovative solutions that promote
            sustainable waste management practices. In Nigeria, the situation is
            particularly dire, with inadequate waste collection infrastructure
            and poor waste disposal practices leading to widespread pollution
            and health hazards.
          </p>
          <p>
            Enter Ecobin, a waste management platform that is transforming the
            way Nigerians dispose of their waste by introducing a revolutionary
            payment system: paying for waste with recyclable items. This
            innovative approach not only incentivizes individuals to properly
            dispose of their waste but also promotes recycling and upcycling.
          </p>
          <p>
            Here's how it works: Ecobin users can exchange their recyclable
            items such as plastic bottles, cans, and paper for credits that can
            be used to pay for waste disposal services. This system not only
            encourages proper waste disposal but also promotes recycling and
            upcycling by providing a tangible incentive for individuals to
            collect and exchange their recyclable items.
          </p>
          <p>
            But Ecobin's innovation doesn't stop there. The platform also
            incorporates biomimicry principles into its waste management
            practices, mimicking the natural processes of the environment to
            create sustainable solutions. For instance, Ecobin upcycles waste
            materials into works of art, creating new economic opportunities for
            artisans and entrepreneurs.
          </p>
          <p>
            By promoting waste segregation, recycling, and sustainable waste
            management practices, Ecobin is making a significant positive impact
            on the environment and society as a whole. And with its innovative
            payment system, the platform is not only revolutionizing waste
            management but also promoting a circular economy that benefits
            individuals, communities, and the planet.
          </p>
          <p>
            In a world where waste management has become a pressing global
            challenge, Ecobin is leading the way in transforming waste into a
            valuable resource. By incentivizing individuals to properly dispose
            of their waste and promoting recycling and upcycling, Ecobin is
            creating a cleaner, healthier, and more sustainable future for all.
          </p>
        </Body>
      </Container>
    </div>
  );
};

export default RecyclePost;

const Title = styled.div`
  width: 90%;
  height: 35vh;
  margin: auto;
  display: flex;
  align-items: center;

  h2 {
    margin: 0;
    font-weight: 600;
    font-size: 35px;
    width: 80%;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      margin-top: 50px;
      width: 90%;
    }
    @media screen and (max-width: 425px) {
      font-size: 1.2rem;
      margin-top: 50px;
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    height: 30vh;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 70px;
  }
`;
const Body = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 90px;

  p {
    font-size: 18px;

    @media screen and (max-width: 425px) {
      font-size: 16px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
`;
