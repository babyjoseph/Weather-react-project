import styled from "styled-components";

//Main Wrapper
export const MainWrapper = styled.div`
  width: 1152px;
  height: 720px;
  display: flex;
  border-radius: 98px;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  background: rgba(243, 243, 243, 0.2);
  font-family: "Poppins", sans-serif;
`;

//Search Bar
export const Bar = styled.input`
  width: 440px;
  height: 74px;
  font-size: 30px;
  padding: 25px;
  background-color: #f3f3f3;
  border: none;
  border-radius: 0 0 25px 25px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  font-family: "Poppins", sans-serif;
  background: inherit;
`;

//Current Forecast Wrapper
export const CurrentWrapper = styled.div`
  width: 1038px;
  height: 280px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LocationWrapper = styled.div`
  width: 300px;
  height: 280px;
  font-size: 55px;
  text-align: center;
  display: flex;
  align-items: center;
  color: #222;
`;
export const TempWrapper = styled.div`
  width: 428px;
  height: 244px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .date {
    font-size: 35px;
    color: #4a4a4a;
  }
  .temp {
    font-size: 105px;
    color: #222;
  }
  .des {
    font-size: 45px;
    color: #6a6a6a;
  }
`;
export const IconWrapper = styled.div`
  width: 270px;
  height: 270px;
  display: grid;
  align-items: center;
  justify-content: center;
  img {
    width: 270px;
  }
`;
//Loading
export const LoadingContent = styled(CurrentWrapper)`
  justify-content: center;
  font-size: 80px;
`;

//5 day Forecast Wrapper
export const CardWrapper = styled.div`
  width: 1063px;
  height: 235px;
  display: flex;
  gap: 57px;
`;

export const Card = styled.div`
  width: 167px;
  height: 235px;
  border-radius: 25px;
  box-shadow: -4px 6px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  text-align: left;
  gap: 15px;

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
`;
