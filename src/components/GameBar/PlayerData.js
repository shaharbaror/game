import React, { Fragment, useContext } from "react";
import PlayerContext from "../store/Player-context";

const PlayerData = (props) => {
  const ctx = useContext(PlayerContext);

  return (
    <Fragment>
      <h2 >Name</h2>
      <li>{ctx.playerStats.hp} Hp</li>
      <li>{ctx.playerStats.def} defense</li>
      <li>{ctx.playerStats.str} strenght</li>
      <li>{ctx.playerStats.speed} speed</li>
    </Fragment>
  );
};

export default PlayerData;
