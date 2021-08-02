import React from 'react';
import styled from 'styled-components';
import Tile from './Tile';

interface BoardProps {
  tiles: any[];
}

export default function Board(props: BoardProps) {
  return (
    <Grid>
      {props.tiles.map((tile: any, i) => (
        <Tile tile={tile} key={i}></Tile>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  width: 600px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 100px);
`;
