import React from "react";
import "../Scss/SubPage.scss";

export default function SubPage(props) {
  const data = props.data;

  return (
    <div className="SubPage">
      <section>
        <h2>
          <a href="https://talk.op.gg/s/lol/all?sort=popular">
            op.gg Talk 인기글
          </a>
        </h2>
        <div className="Top10gg">
          {data &&
            data.slice(0, 10).map((data, index) => (
              <article>
                <a href={data.permalink}>
                  <div className="Index">{index}</div>
                  <div className="Thumbnail">
                    <img src={data.meta.image_uri} alt="Thumbnail" />
                  </div>
                  <div className="Text">
                    <div className="TextTitle">{data.title}</div>
                    <div className="TextInfo">
                      <span>{data.user_level.updated_at}</span>
                      <span>{data.user_name}</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}
