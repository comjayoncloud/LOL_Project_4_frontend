import React from "react";
import "../Scss/UserInfo.scss";
export default function UserInfo(props) {
  let id = props.id;
  return (
    <div className="UserInfo">
      <div className="profile">
        <div className="profileIcon">
          <img
            src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon3542.jpg?image=q_auto&image=q_auto,f_webp,w_auto&v=1667898724984"
            alt="프로필아이콘"
          />
        </div>
        <div className="profileInfo">
          <div className="profileInfo1">{id}</div>
          <div className="profileInfo2">
            <div className="freshButton1">
              <div>
                <a href="/jw.gg/searchResult">전적갱신</a>
              </div>
            </div>
            <div className="freshButton2">
              <a href="/jw.gg/searchResult">롤 몇시간 했는지 궁금해?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
