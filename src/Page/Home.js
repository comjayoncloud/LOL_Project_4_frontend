import Header from "../Component/Header";
import MainPage from "../Component/MainPage";
import SubPage from "../Component/SubPage";
import "../Scss/Home.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const url = "https://www.lolproject-bakcend.com/talkgg";
  useEffect(() => {
    async function fetchData() {
      if (data === null) {
        const dataReq = await axios.get(url);
        setData(dataReq.data);
      }
    }
    fetchData();
  });

  return (
    <div className="Home">
      <Header />
      <MainPage />
      <SubPage data={data} />
    </div>
  );
}
