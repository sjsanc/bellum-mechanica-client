import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Greeter() {
  return (
    <Div>
      <div></div>
      <div>
        <h1>Bellum Mechanica</h1>
        <p>
          This is a game about programming bots to lead them to victory. Arm
          them with weapons, clad them in armor and fill their heads with
          cunning strategy.
        </p>
        <Link href="/game">
          <a>Launch</a>
        </Link>
      </div>
    </Div>
  );
}

const Div = styled.div`
  height: 300px;
  width: 600px;
  position: fixed;
  inset: 30% 0 0 0;
  margin: 0 auto;
  background: #191b20;
  border: 1px solid #2e2e2e;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  box-shadow: 0 5px 5px 0px #00000036;

  div:first-of-type {
    border-right: 1px solid #2e2e2e;
  }

  div:nth-of-type(2) {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h1 {
    color: #d7dae0;
    text-align: center;
    font-family: 'Staatliches', sans-serif;
    font-weight: lighter;
  }

  p {
    color: #d7dae0;
    font-family: 'Lato', sans-serif;
    font-weight: lighter;
    font-size: 14px;
    padding: 0 20px;
  }
  a {
    margin: 0 auto 0 auto;
    background: #2c313a;
    border: 0;
    padding: 10px 15px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    text-decoration: none;

    &:hover {
      background: #282c34;
    }
  }
`;
