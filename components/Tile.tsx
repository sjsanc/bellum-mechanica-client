import React from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Bot from './Bot';

interface TileProps {
  tile: any;
}

export default function Tile(props: TileProps) {
  const { tile } = props;
  return (
    <Tippy content={`[${tile.coord[0]},${tile.coord[1]}]`}>
      <Div className={tile.isBlocked ? 'blocked' : ''}>
        {tile.occupier !== '' && <Bot name={tile.occupier} />}
      </Div>
    </Tippy>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  cursor: pointer;

  &:hover {
    background: #2c313a;
  }

  &.blocked {
    background: #6b6b6b;
    box-shadow: inset 0 0 10px black;
  }
`;
