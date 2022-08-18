import React from 'react';
import styled from 'styled-components';
import useGeoLocation from "react-ipgeolocation";





const Main = () => {
//somewhere in your app/component
const location = useGeoLocation();
console.log(location.country);


  return(
    <MainContainer>
      <div className='main'>
        <div className='main-1'>npm
          <div className='top'>
          test
          </div>
          <div className='bottom'>
            {location.country}
          </div>
          <div className='stuff'>
            accesorios
          </div>
        </div>
        <div className='main-2'>
        </div>
      </div>
    </MainContainer>
  )
}

export default Main;

const MainContainer = styled.div`

  .main {
    height: 75vh;
    width: 100vw;
    display: flex;
    flex-direction: row
    align-items: center;
    justify-content: center;
  }

  .main-1{
    background-color: grey;
    width: 50vw;
    height: 75vh;

  }

  .main-2 {
    height: 75vh;
    width: 50vw;
    background-color: blue;
  }

  .top {
    height: 6em;
    width: 25em;
    background-color: black;
    color: white;
    margin: 2em auto;
    text-align: center;

  }

  .bottom {
    height: 6em;
    width: 25em;
    background-color: black;
    color: white;
    margin: 2em auto;
    text-align: center;

  }

  .stuff {
    height: 6em;
    width: 25em;
    background-color: black;
    color: white;
    margin: 2em auto;
    text-align: center;

  }

`
