"use client";

import axios from "axios";
import "./style.css";
import { useEffect, useState } from "react";
import { ObjectId } from "mongodb";
import { useRouter } from "next/navigation";
import { PageWrapper } from "../components/PageWrapper";

interface IRecord {
  rank: number;
  userName: string;
  record: number;
}

interface IRank {
  id: ObjectId;
  userName: string;
  record: number;
}

const Record = ({ rank, userName, record }: IRecord) => {
  return (
    <div className="record_wrapper">
      <div className="record_rank">{rank}</div>
      <div className="record_name">{userName}</div>
      <div className="record_record">{`${record} s`}</div>
    </div>
  );
};

const Rank = () => {
  document.querySelector(".Rank");
  const [rank, setRank] = useState<IRank[]>([]);
  const apiUrl = "/api/rank";
  const router = useRouter();

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setRank(response.data);
      })
      .catch((error) => {
        console.log("API 요청 실패:", error);
      });
  }, []);

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

  const exit = () => {
    sessionStorage.setItem("hasVisited", "false");
    router.replace("/");
  };
  return (
    <PageWrapper>
      <div className="Rank">
        <img className="img_char_rank" src="/assets/img_char_ranking.svg" />
        <button onClick={exit} className="btn_close" />
        <div className="rank_background">
          <div className="rank_container">
            <div className="rank_header">
              <span>RANK</span>
              <span>NAME</span>
              <span>TIME</span>
            </div>
            <div className="rank_contents">
              {rank.map((item, index) => {
                return (
                  <Record
                    key={index}
                    rank={index + 1}
                    userName={item.userName}
                    record={item.record}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Rank;
