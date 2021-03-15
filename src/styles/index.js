import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

//My Screens
const screens = {
  xs: "480px",
  sm: "1055px",
};

const respond = Object.keys(screens).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media screen and (max-width: ${screens[label]}) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
//Main Wrapper
export const MainWrapper = styled.div`
  width: 1052px;
  height: 620px;
  border-radius: 98px;
  background: rgba(243, 243, 243, 0.3);
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${respond.sm`
    width: 480px;
    height: 720px;
    border-radius: 25px;
  `}

  ${respond.xs`
    width: 320px;
    height: 700px;
  `}
`;

//Search Bar
export const Bar = styled.input`
  width: 430px;
  height: 64px;
  font-size: 30px;
  padding: 25px;
  border: none;
  border-radius: 0 0 25px 25px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  font-family: "Poppins", sans-serif;
  background: inherit;
  ${respond.xs`
    width: 280px;
    height: 50px;
    font-size: 18px;
  `}
`;

//Current Forecast Wrapper
export const CurrentWrapper = styled.div`
  width: 938px;
  height: 100%;
  display: grid;
  align-items: center;
  grid: "loc temp icon" auto / 300px 428px 270px;

  ${respond.sm`
    margin-top: 25px;
    width: 480px;
    grid: "loc temp" "icon icon" / 240px 240px;
  `}

  ${respond.xs`
    margin-top: 15px;
    width: 300px;
    grid: "loc temp" "icon icon" / 150px 150px;
  `}
`;

export const LocationWrapper = styled.div`
  width: 300px;
  height: 180px;
  font-size: 55px;
  text-align: center;
  display: flex;
  align-items: center;
  color: #222;
  grid-area: loc;
  ${respond.sm`
      display: grid;
      align-items: center;
      justify-content: center;
      width: 240px;
      font-size: 40px;
  `}
  ${respond.xs`
      width: 150px;
      font-size: 25px;
    `}
`;
export const TempWrapper = styled.div`
  width: 428px;
  height: 144px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: temp;
  .date {
    font-size: 25px;
    color: #4a4a4a;
  }
  .temp {
    font-size: 95px;
    color: #222;
  }
  .des {
    font-size: 35px;
    color: #6a6a6a;
  }

  ${respond.sm`
      width: 240px;
      height: 100%;
      .date{
        font-size: 15px;
      }
      .temp{
        font-size: 85px;
      }
      .des{
        font-size: 25px;
      }
    `}

  ${respond.xs`
    width: 150px;
    .temp{
      font-size: 55px;
    } 
`}
`;
export const IconWrapper = styled.div`
  width: 270px;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-area: icon;
  img {
    width: 270px;
  }

  ${respond.sm`
      width: 480px;
    `}
  ${respond.xs`
      width: 300px;
    `}
`;
//Home and Loading Content
const AppearAnimation = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
export const EnterCountry = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 70px;
  white-space: nowrap;
  animation: ${AppearAnimation} 1s ease-in-out;

  ${respond.sm`
    font-size: 40px;
  `}
  ${respond.xs`
      font-size: 30px;
    `}
`;

export const LoadingContent = styled(EnterCountry)``;

//5 day Forecast Wrapper
export const CardWrapper = styled.div`
  width: 963px;
  height: 255px;
  display: flex;
  gap: 40px;
  ::-webkit-scrollbar {
    background: transparent;
    height: 10px;
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
  }
  ${respond.sm`
    cursor: grab;
    overflow: auto;
    padding: 0 15px;
      width: 480px;
      gap: 15px;
    `}
  ${respond.xs`
        width: 300px;
      `}
`;

export const Card = styled.div`
  width: 160px;
  height: 225px;
  border-radius: 25px;
  box-shadow: -4px 6px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  text-align: left;
  gap: 15px;
  transition: box-shadow 0.8s ease;
  &:hover {
    box-shadow: -4px 6px 4px #f3f3f3;
  }
  .noSelect {
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
  }

  .day {
    margin-top: 25px;
    width: 100%;
    padding-left: 20px;
    font-size: 25px;
    color: #222;
    text-align: left;
  }
  img {
    width: 120px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  ${respond.sm`
      gap: 0;
      width: 150px;
      height: 150px;
      .day{
        font-size: 15px;
      }
      img{
        width: 100px;
      }
    `}
`;

//Styled Component of ReactRouter
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
