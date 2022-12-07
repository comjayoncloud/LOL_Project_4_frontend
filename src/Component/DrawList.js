import React from "react";
import "../Scss/DrawList.scss";
import SummonerInfo from "./SummonerInfo";
import SummonerItems from "./SummonerItems";
import Participants from "./Participants";

export default function DrawList(props) {
  const data = props.data;
  const gameResult = (data) => {
    if (data.gameResult === "승") {
      return "win";
    } else if (data.gameResult === "패") {
      return "lose";
    }
  };

  return (
    <div className="DrawList">
      <small> 검색결과</small>

      {data &&
        data.map((data, index) => (
          <li key={index}>
            <div className={gameResult(data)}>
              <div className="GameInfo">
                <div className="GameType">{data.gameType}</div>
                <div className="GameResult">{data.gameResult}</div>
              </div>
              <div className="ChampInfoContainer">
                <SummonerInfo data={data} />
                <SummonerItems data={data} />
              </div>

              <Participants myTeam={data.myTeam} notmyTeam={data.notmyTeam} />
            </div>
          </li>
        ))}
    </div>
  );
}
