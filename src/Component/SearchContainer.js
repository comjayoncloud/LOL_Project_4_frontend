import React, { useState } from "react";
import "../Scss/SearchContainer.scss";
import { Navigate, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function SearchContainer() {
  const [textId, setTextId] = useState("");
  const [droptext, setDroptext] = useState("Korea");
  const Navigate = useNavigate();

  /**  클릭,엔터 할때 반응하는 이벤트 리스너 : 페이지 이동 및 id 전달*/
  const handleSubmit = () => {
    if (textId === "") {
      alert("아이디를 입력하지 않았습니다");
    } else {
      Navigate("/jw.gg/searchResult", {
        state: { id: textId, region: droptext },
      });
    }
  };

  /**  input 안의 value 상태관리*/
  const onChangeText = (e) => {
    setTextId(e.target.value);
  };

  /**  Dropdown button 이벤트 리스너*/
  const handleSelect = (e) => {
    setDroptext(e);
  };

  return (
    <div className="SearchContainer">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <div className="SearchFormRegion">
          <label>Region</label>
          <DropdownButton
            id="dropdown-basic-button"
            title={droptext}
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="America">
              <img
                src="https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-na.svg?v=1668589435097"
                alt="America"
              />
              North America
            </Dropdown.Item>
            <Dropdown.Item eventKey="EuropeWest">
              <img
                src="https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-euw.svg?v=1668589435097"
                alt="Europe West"
              />
              Europe West
            </Dropdown.Item>
            <Dropdown.Item eventKey="Korea">
              <img
                src="https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-kr.svg?v=1668589435097"
                alt="Korea"
              />
              Korea
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="SearchFormId">
          <label>Search</label>
          <input
            type="text"
            value={textId}
            onChange={onChangeText}
            placeholder="소환사명, 소환사명, ..."
          />
        </div>
        <div className="SearchButton" onClick={handleSubmit}>
          <img
            src="data:image/png;base64,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"
            alt="click"
          />
        </div>
      </form>
    </div>
  );
}
