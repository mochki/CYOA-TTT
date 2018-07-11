type Player = 'X' | 'O';

/*
gameboard
 0 | 1 | 2
-----------
 3 | 4 | 5
-----------
 6 | 7 | 8
*/
const gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
fillBoard(gameboard);

function fillBoard(gameboard: string[], player: Player = 'X'): void {  
  if (gameVictory(gameboard) || findNextAvailable(gameboard) === -1) {
    displayBoard(gameboard);
    return;
  }

  gameboard.map((slot, idx) => {
    if (slot === ' ') {
      const nextboard = gameboard.slice();
      nextboard[idx] = player;
      fillBoard(nextboard, switchPlayers(player));
    }
  })
}

// Return index or -1 if complete.
function findNextAvailable(gameboard: string[]): number {
  return gameboard.indexOf(' ');
}

function gameVictory(gb: string[]): boolean {
  return (gb[0] === gb[1] && gb[1] === gb[2] && gb[0] !== ' ')
      || (gb[3] === gb[4] && gb[4] === gb[5] && gb[3] !== ' ')
      || (gb[6] === gb[7] && gb[7] === gb[8] && gb[6] !== ' ')
      || (gb[0] === gb[3] && gb[3] === gb[6] && gb[0] !== ' ')
      || (gb[1] === gb[4] && gb[4] === gb[7] && gb[1] !== ' ')
      || (gb[2] === gb[5] && gb[5] === gb[8] && gb[2] !== ' ')
      || (gb[0] === gb[4] && gb[4] === gb[8] && gb[0] !== ' ')
      || (gb[2] === gb[4] && gb[4] === gb[6] && gb[2] !== ' ');
}

function switchPlayers(player: Player): Player {
  return player === 'X' ? 'O' : 'X';
}

function displayBoard(gb: string[]): void {
  console.log(` ${gb[0]} | ${gb[1]} | ${gb[2]}\n-----------\n ${gb[3]} | ${gb[4]} | ${gb[5]}\n-----------\n ${gb[6]} | ${gb[7]} | ${gb[8]}\n`);
}

// Get TSC to shut up
export {}