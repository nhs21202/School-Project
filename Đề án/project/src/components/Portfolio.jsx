import React from "react";
import styled from "styled-components";
import back from "../assets/portfolio.jpg";
export default function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="background">
        <img src={back} alt="Portfolio background" />
      </div>

      <div className="content">
        <h1>Get Big Discount When Buying Brand New Cheeseburger!</h1>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque sit,
          pariatur quis impedit
        </h2>
        <button>Buy Now!</button>
      </div>
    </Section>
  );
}
const Section = styled.section`
  height: 80vh;
  position: relative;
  border-radius: 3rem;
  &:hover{
    .background{
        img{
            transform: scale(1.2);
        }
    }
  }
  .background{
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    border-radius: 0.5rem;
    img{
        object-fit: cover;
        width:100%;
        height: 100%;
        filter: brightness(50%);
        transition: 0.8s;
    }
  }
  .content{
    position: absolute;
    top: 25%;
    left: 10%;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    h1{
        font-size: 3rem;
        width: 60%;
    }
    h2{
        width: 60%;
    }
    button{
        border:none;
        padding: 1rem 4rem;
        color: white;
        background:linear-gradient(to left,#fc4958,#ff761a);
        border-radius: 1rem;
        transition:0.1s;
        text-transform: uppercase;
        &:hover{
            background: linear-gradient(to right,#fc4958,#ff761a);

        }

    }

  }

`;
