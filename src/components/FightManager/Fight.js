import React, { useState, useContext, useEffect } from "react";

import PlayerContext from "../store/Player-context";




const Fight = (props) => {
    
    const ctx = useContext(PlayerContext);
    const player = props.player1;
    const [player1, setPlayer1] = useState(player);
    
    const [enemy1, setEnemy1] = useState(props.enemy);
  const [isWon,setIsWon] = useState(false);
  const [isLost,setIsLost] = useState(false);

    useEffect(()=> {
        ctx.update(player1);
        if(player1.hp <=0 && enemy1.hp >0){
            setIsLost(true);
        } else if(enemy1.hp<=0 && player1.hp >0){
            setIsWon(true);
        }
    },[player1,enemy1]);

  if (player1.hp > 0 && enemy1.hp > 0) {
    if (player1.speed > enemy1.speed) {
      setPlayer1((prev) => {
        return {
          ...prev,
          speed: prev.speed / 2,
        };
      });

      setEnemy1((prev) => {
        const dmg = prev.def < player1.str ?player1.str - prev.def  : 0;
        return {
          ...prev,
          hp: prev.hp - dmg,
        };
      });
    } else {
      setEnemy1((prev) => {
        return {
          ...prev,
          speed: prev.speed / 2,
        };
      });

      setPlayer1((prev) => {
        const dmg = prev.def < enemy1.str ? enemy1.str - prev.def  : 0;
        return {
          ...prev,
          hp: prev.hp - dmg,
        };
      });
    }
    
  }

  

  return (
    <React.Fragment>
        {isWon && props.won()}
        {isLost && props.lost()}
    </React.Fragment>
  );
};

export default Fight;
