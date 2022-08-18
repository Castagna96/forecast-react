import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return(
    <MainContainer>
      <div className='footer'>
        <div className='icono'>ico
        </div>
        <h1 className='titulo'>Wearther</h1>
      </div>
    </MainContainer>
  )
}

export default Navbar;

const MainContainer = styled.div`
  .footer{
    height: 12vh;
    background-color: black;
    display: flex;
  }
  .titulo {
    color: white;
    display: flex;
    font-size: 50px;
    justify-content: center;
    width: 100vw;
    margin-top: .3em;


  }
`
