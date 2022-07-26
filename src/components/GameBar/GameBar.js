
import GameButtons from "./GameButtons";

import PlayerData from "./PlayerData";

const GameBar = () => {
  
  return (
    <div>
      <div>
        <PlayerData />
      </div>
      <div>
        <GameButtons />
      </div>
    </div>
  );
};

export default GameBar;
