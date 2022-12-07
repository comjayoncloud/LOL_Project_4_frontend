import React from "react";
import "../Scss/Participants.scss";
export default function Participants(props) {
  const myTeam = props.myTeam;
  const notmyTeam = props.notmyTeam;

  return (
    <div className="Participants">
      <ul className="MyTeam">
        {myTeam.map((data, index) => (
          <li key={index}>
            <div className="ChampImg">
              <img
                className="Icon"
                src={
                  "https://opgg-static.akamaized.net/meta/images/lol/champion/" +
                  data.champ +
                  ".png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1668149208086"
                }
                alt="ChampImg"
              ></img>
            </div>
            <div className="ChampId">{data.name}</div>
          </li>
        ))}
      </ul>
      <ul className="EnemyTeam">
        {notmyTeam.map((data, index) => (
          <li key={index}>
            <div className="ChampImg">
              <img
                className="Icon"
                src={
                  "https://opgg-static.akamaized.net/meta/images/lol/champion/" +
                  data.champ +
                  ".png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1668149208086"
                }
                alt="ChampImg"
              ></img>
            </div>
            <div className="ChampId">{data.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
