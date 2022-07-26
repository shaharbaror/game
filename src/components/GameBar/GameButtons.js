import React, { useState, useContext } from "react";
import PlayerContext from "../store/Player-context";
import Fight from "../FightManager/Fight";
import Model from "../UI/Model/Model";

const GameButtons = () => {
  const ctx = useContext(PlayerContext);
  const [fightChanceT, setFightChanceT] = useState(5);
  const [enemy, setEnemy] = useState();
  const [isFight, setIsFight] = useState(false);
  const [isEnemy, setIsEnemy] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [toRest, setToRest] = useState(4);

  const playerD = ctx.playerStats;

  const onTrainHandler = () => {
    if (fightChanceT === Math.round(Math.random() * fightChanceT)) {
      makeEnemy();
      setFightChanceT(5);

      //Needs To Go on a fight with someone
      setIsFight(true);
    } else {
      const upgrade = {
        maxHp: playerD.maxHp + Math.floor(Math.random() * 5),
        maxStr: playerD.maxStr + Math.floor(Math.random() * 3),
        maxSpeed: playerD.maxSpeed + Math.round(Math.random() * 1),
      };

      setFightChanceT((prevChance) => {
        return prevChance - 1;
      });
      setToRest((prev) => {
        return prev - 1;
      });

      ctx.update(upgrade);
    }
  };

  const onRestHandler = () => {
    if (toRest <= 0) {
      const rest = {
        hp: ctx.playerStats.maxHp,
        str: playerD.maxStr,
        speed: playerD.maxSpeed,
      };
      setToRest(3);
      ctx.update(rest);
    }
  };

  const onFightHandler = () => {
    makeEnemy();
    ctx.update({ def: playerD.def + Math.round(Math.random() * 4) });
    setIsFight(true);
    setToRest((prev) => {
      return prev - 3;
    });
  };

  const makeEnemy = () => {
    setEnemy({
      hp: Math.floor(Math.random() * playerD.maxHp + 1),
      str: Math.floor(Math.random() * playerD.maxStr + 4),
      speed: Math.floor(Math.random() * playerD.maxSpeed + 1),
      def: Math.floor(Math.random() * playerD.def),
    });
  };

  const onStopFight = () => {
    setIsFight(false);
    setIsEnemy(true);
  };

  const closeModelHandler = () => {
    setIsEnemy(false);
    setIsLost(false);
  };

  const onLose = () => {
    setIsFight(false);
    setIsEnemy(true);
    setIsLost(true);
  };

  return (
    <React.Fragment>
      <button onClick={onTrainHandler}>Train</button>
      <button onClick={onFightHandler}>Fight</button>
      <button onClick={onRestHandler}>Rest</button>
      {isFight && (
        <Fight
          player1={playerD}
          enemy={enemy}
          lost={onLose}
          won={onStopFight}
        />
      )}

      {isEnemy && (
        <Model onClick={closeModelHandler}>
          <h1>An Enemy Has Appeared!</h1>
          <button onClick={closeModelHandler}>OK</button>
        </Model>
      )}
      {isLost && (
        <Model onClick={closeModelHandler}>
            <h1>You Ded</h1>
            <button>Play Again</button>
        </Model>
      )}
    </React.Fragment>
  );
};

export default GameButtons;
