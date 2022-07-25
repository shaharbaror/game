import React,{useState} from 'react';

const PlayerContext = React.createContext({
    playerStats: {
        hp:20,
        def:1,
        str:5,
        speed:10,
    },
    update:(player) => {}

});

export const PlayerProvider = props => {
    const [playerStats,setPlayerStats] = useState({
        hp:20,
        def:1,
        str:5,
        speed:10,
    });

    const updatePlayer = (player) => {
        setPlayerStats(prevState => {
            return {...prevState, ...player};
        });
    }


    return <PlayerContext.Provider value ={{playerStats: playerStats, update: updatePlayer,  }} >{props.children}</PlayerContext.Provider>
};

export default PlayerContext;
