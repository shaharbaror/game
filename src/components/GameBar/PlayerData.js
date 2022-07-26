import React, { Fragment, useContext, useState } from "react";
import PlayerContext from "../store/Player-context";

const PlayerData = (props) => {
  const ctx = useContext(PlayerContext);
  const speed = ctx.playerStats.speed;
  const hp = ctx.playerStats.hp;



  return (
    <Fragment>
      <h2 >Name</h2>
      <li>{hp<0? 0:hp} / {ctx.playerStats.maxHp} Hp</li>
      <li>{ctx.playerStats.def} defense</li>
      <li>{ctx.playerStats.str} / {ctx.playerStats.maxStr} strength</li>
      <li>{speed.toString().includes('.')? speed.toFixed(2) : speed} / {ctx.playerStats.maxSpeed} speed</li>
    </Fragment>
  );
};

export default PlayerData;
