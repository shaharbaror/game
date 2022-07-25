import { useContext,useState } from "react";
import PlayerContext from "../store/Player-context";

import PlayerData from "./PlayerData";

const GameBar = () => {
    const ctx = useContext(PlayerContext);
    const [fightChanceT,setFightChanceT] = useState(5);

    const onTrainHandler = () => {
        if(fightChanceT === Math.round(Math.random()* fightChanceT)){
            console.log("fight-mode");
            setFightChanceT(5);
        } else {

        const upgrade = {
            hp: ctx.playerStats.hp + Math.floor(Math.random() *5),
            str: ctx.playerStats.str + Math.floor(Math.random() *3),
            speed: ctx.playerStats.speed + Math.floor(Math.random() *2),
        };
    
        setFightChanceT(prevChance => {
            return prevChance-1;
        });
        
        ctx.update(upgrade);
    }
    };



  return (
    <div>
      <div>
        <PlayerData />
      </div>
      <div>
        <button onClick={onTrainHandler} >Train</button>
        <button>Fight</button>
        <button>Rest</button>
      </div>
    </div>
  );
};

export default GameBar;
