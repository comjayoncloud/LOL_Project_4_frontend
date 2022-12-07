import React from "react";
import "../Scss/SummonerItems.scss";

export default function SummonerItems(props) {
  const data = props.data;
  const resultItem = () => {
    if (data.gameResult === "승") {
      return "WinItem";
    } else if (data.gameResult === "패") {
      return "LoseItem";
    }
  };

  return (
    <div className="SummonerItems">
      <ul>
        {data.summonerItem.map((a, index) =>
          a === 0 ? (
            <li key={index} className={resultItem(data)}></li>
          ) : (
            <li key={index} className={resultItem(data)}>
              <div>
                <img
                  src={
                    "https://opgg-static.akamaized.net/meta/images/lol/item/" +
                    a +
                    ".png?image=q_auto,f_webp,w_44&v=1668149208300"
                  }
                  alt={`item${index}`}
                />
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
