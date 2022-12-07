import React from "react";
import "../Scss/MainPage.scss";
import SearchContainer from "./SearchContainer";

export default function MainPage() {
  return (
    <div className="Mainpage">
      <div className="Logo">
        <img
          src="https://opgg-static.akamaized.net/logo/20221108052938.02cda0e597d34bf28297cd39ff6ccf2b.png?image=q_auto,f_webp,w_auto&v=1667894655626"
          alt="메인페이지 로고"
        />
      </div>
      <SearchContainer />
    </div>
  );
}
