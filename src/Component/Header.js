import React, { useState } from "react";
import "../Scss/Header.scss";

export default function Header() {
  const [isOpen, setAd] = useState(true);
  const toggleAd = () => {
    setAd((isOpen) => !isOpen);
  };
  return (
    <div className="Header">
      {isOpen ? (
        <div className="TopBannerAd">
          <a href="https://ogt.gg/?&utm_source=opgg&utm_medium=display&utm_campaign=ogt_tierup&ad=opggtop">
            <img
              src="https://opgg-gnb.akamaized.net/static/images/banners/gnb_ogt@2x.png?image=q_auto,f_webp,w_1940&v=1666077951574"
              width="970"
              alt="광고"
              height="90"
            />
          </a>
          <button className="TopBannerAdClose" onClick={toggleAd}>
            <img
              src="https://www.citypng.com/public/uploads/preview/transparent-white-square-close-x-button-icon-31631915367bsrspyjmhz.png"
              width="24"
              height="24"
              alt="x버튼"
            />
          </button>
        </div>
      ) : null}

      <div className="GameList">
        <h1>
          <a href="/jw.gg">
            <img
              src="https://s-lol-web.op.gg/images/icon/opgglogo.svg?v=1666077951780"
              width="65"
              height="16"
              alt="jw.gg"
            />
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <span>
                <img
                  src="https://w.namu.la/s/40a1375bd78562d495a1e6af9472dc97f7ef2c982f03c54e034cb0557eee24eeaa5059644d38b6b998705200e8fec1aa5e5ad2381a7f3a21e64d58b0331c9a37588df3c0db5137f756880f50ec81546ae110ab8f127b4305cd085d06b7c9672b"
                  width="24"
                  alt="리그오브레전드"
                  height="24"
                />
                <span>리그오브레전드</span>
              </span>
            </li>
            <li>
              <a href="/jw.gg">
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/01-icon-00-logo-icon-opggsquare.svg?image=q_auto,f_webp,w_48&amp;v=1666077951780"
                  alt="데스크톱"
                />
                <span>데스크톱</span>
              </a>
            </li>
            <li>
              <a href="/jw.gg">
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-valorant-white.svg?image=q_auto,f_webp,w_48&amp;v=1666077951780"
                  alt="발로란트"
                />
                <span>발로란트</span>
              </a>
            </li>

            <li>
              <a href="/jw.gg">
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-pubg-gray.svg?image=q_auto,f_webp,w_48&v=1667894655810"
                  alt="배틀그라운드"
                />
                <span>배틀그라운드</span>
              </a>
            </li>

            <li>
              <a href="/jw.gg">
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-overwatch-gray.svg?image=q_auto,f_webp,w_48&v=1667894655810"
                  alt="오버워치"
                />
                <span>오버워치</span>
              </a>
            </li>
            <li>
              <a href="/jw.gg">
                <img
                  src="https://opgg-gnb.akamaized.net/static/images/icons/img_navi_bs.svg?image=q_auto,f_webp,w_48&v=1667894655810"
                  alt="이터널 리턴"
                />
                <span>이터널 리턴</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sideMenu">
        <nav>
          <ul>
            <li>
              <a href="/jw.gg">홈</a>
            </li>
            <li>
              <a href="https://www.op.gg/champions">챔피언분석</a>
            </li>
            <li>
              <a href="https://www.op.gg/statistics/champions">게임 모드</a>
            </li>
            <li>
              <a href="https://www.op.gg/statistics/champions">통계</a>
            </li>

            <li>
              <a href="https://www.op.gg/leaderboards/tier">랭킹</a>
            </li>
            <li>
              <a href="https://www.op.gg/spectate/live/pro-gamer">프로관전</a>
            </li>
            <li>
              <a href="https://www.op.gg/multisearch">멀티서치</a>
            </li>
            <li>
              <a href="https://talk.op.gg/s/lol/all?sort=popular">커뮤니티</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
