import React from 'react';
import styled from 'styled-components';

interface BotProps {
  name: string;
}

export default function Bot(props: BotProps) {
  return <Div>{props.name}</Div>;
}

const Div = styled.div`
  width: 70%;
  height: 70%;
  background: grey;
  border-radius: 50%;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
