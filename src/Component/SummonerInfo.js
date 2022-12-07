import React from "react";
import "../Scss/SummonerInfo.scss";

export default function SummonerInfo(props) {
  const data = props.data;
  const champImg = `https://opgg-static.akamaized.net/meta/images/lol/champion/${data.champName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_32&v=1668149208086`;
  const spellImg1 = `https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerFlash.png`;
  const spellImg2 = `https://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/SummonerSnowball.png`;
  const runeImg1 = `https://opgg-static.akamaized.net/meta/images/lol/perk/${data.summonerRunes[0]}.png?image=q_auto,f_webp,w_44&v=1668149208086`;
  const runeImg2 = `https://opgg-static.akamaized.net/meta/images/lol/perkStyle/${data.summonerRunes[1]}.png?image=q_auto,f_webp,w_44&v=1668149208086`;
  return (
    <div className="ChampInfo">
      <div className="ChampIcon">
        <img className="Icon" src={champImg} alt={data.champName} />
      </div>
      <div className="Spells">
        <img className="SpellImg" src={spellImg1} alt="SummonerFlash" />
        <img className="SpellImg" src={spellImg2} alt="SummonerSnowball" />
      </div>
      <div className="Runes">
        <div className="Rune1">
          <img src={runeImg1} alt="MainRune" />
        </div>
        <div className="Rune2">
          <img src={runeImg2} alt="SubRune" />
        </div>
      </div>
      <div className="GameStat">
        <div className="KdaStat">{data.gameStat}</div>
        <div className="KdaGrade">{data.summonerKda}:1 평점</div>
      </div>
      <div className="GameStat2">
        <div className="killParticipation">
          킬관여 {data.killParticipation}%
        </div>
        <div className="Cs">CS {data.summonerCS}</div>
      </div>
    </div>
  );
}
