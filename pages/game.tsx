import Board from '@/components/Board';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import sampleConfig from '../sampleConfig.json';

export default function Game() {
  const [playerEndpoint, setPlayerEndpoint] = useState<string>('');
  const [gameState, setGameState] = useState<any>('preload');
  const [loading, setLoading] = useState<boolean>(true);

  const PATH = 'http://localhost:8000';

  const sampleInstructions = [
    {
      actions: [
        {
          botName: 'Dirkie',
          type: 'MOVEMENT',
          direction: 'NORTH',
        },
      ],
      teamName: 'Longdongs',
    },
    {
      actions: [
        {
          botName: 'Chinaman',
          type: 'MOVEMENT',
          direction: 'NORTH',
        },
      ],
      teamName: 'Yoloboyz',
    },
  ];

  const submitEndpoint = (evt: any) => {
    evt.preventDefault();
    console.log('Sumbitting');
    axios
      .post(`${PATH}/createGame`, {
        endpoint: playerEndpoint,
      })
      .then((res) => {
        console.log(res.data);
        setGameState(res.data);
      });
    setPlayerEndpoint('');
  };

  const launchGame = () => {
    axios.post(`${PATH}/launch`, { gameId: gameState.gameId }).then((res) => {
      setGameState(res.data);
    });
  };

  return (
    <Div>
      {gameState == 'preload' ? (
        <form
          onSubmit={submitEndpoint}
          method="post"
          className="endpoint-form center"
        >
          <label htmlFor="endpoint">Enter your bot's location:</label>
          <input
            onChange={(e) => {
              setPlayerEndpoint(e.target.value);
            }}
            value={playerEndpoint}
            type="text"
            id="endpoint"
            placeholder="http://..."
          />
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <div className="container">
          <h1>Your Team</h1>
          <div>
            <Board tiles={gameState.board.board} />
            <h2 onClick={launchGame}>Launch game!</h2>
          </div>
          <h1>Their Team</h1>
        </div>
      )}
    </Div>
  );
}

{
  /* <div className="board">
{!loading && (
  <Board
    board={gameState.board.board}
    obstacleCount={gameState.board.obstacleCount}
  />
)}
</div>
<div>
<button
  onClick={() => {
    axios.get(`${PATH}/launch`, {}).then((res) => {
      if (res.status == 200) {
        postInstructions();
      }
    });
  }}
>
  Begin Game
</button>
</div> */
}

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  background: #191b20;
  display: flex;
  justify-content: center;
  font-family: 'Lato', sans-serif;

  .container {
    display: flex;
    color: white;
    font-size: 10px;
  }

  .center {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  label {
    text-align: center;
    margin: 15px 0;
    text-align: center;
  }

  .endpoint-form {
    color: white;

    input[type='submit'] {
      font-size: 20px;
      margin-top: 10px;
      cursor: pointer;
    }
    input {
      width: 300px;
      background: #23262c;
      border: none;
      border-radius: 5px;
      font-size: 25px;
      color: white;
      padding: 10px;
    }
  }
  .button {
    font-size: 20px;
    cursor: pointer;
    background: #23262c;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;

    &:disabled {
      color: grey;
      cursor: not-allowed;
    }
  }

  .buttons {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: white;
    font-family: 'Lato', sans-serif;
  }

  .ready {
    width: 300px;
    color: white;
    font-family: 'Lato', sans-serif;
  }
`;
