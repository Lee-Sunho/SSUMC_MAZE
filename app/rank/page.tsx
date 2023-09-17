"use client";

import axios from "axios";

const Rank = () => {
  const apiUrl = "/api/rank";

  axios
    .get(apiUrl)
    .then((response) => {
      console.log("API 응답 데이터:", response.data);
    })
    .catch((error) => {
      console.log("API 요청 실패:", error);
    });

  const userName = "mark";
  const record = 45;

  const data = { userName, record };

  const onClick = () => {
    //console.log({ userName, record });
    axios
      .post(apiUrl, data)
      .then((response) => {
        console.log("API 응답 데이터:", response.data);
      })
      .catch((error) => {
        console.log("API 요청 실패:", error);
      });
  };
  return (
    <div onClick={onClick}>
      <button>랭킹 등록</button>
    </div>
  );
};

export default Rank;
