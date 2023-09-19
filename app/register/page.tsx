"use client";

import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "../redux/store";
import { PageWrapper } from "../components/PageWrapper";

const Register = () => {
  const apiUrl = "/api/rank";
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const record = useSelector<RootState, number>((state) => {
    return state.control.timer;
  });
  const inputMaxLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, 7);
    }
    setUserName(e.target.value);
  };

  // 뒤로 가기 했다가 다시 게임화면으로 돌아오는 경우 홈 화면으로 전환
  useEffect(() => {
    const temp = sessionStorage.getItem("hasVisited");
    const hasVisited = temp === "true";

    if (hasVisited) {
      router.replace("/");
      sessionStorage.setItem("hasVisited", "false");
    } else {
      sessionStorage.setItem("hasVisited", "true");
    }
  }, [router]);

  const register = () => {
    const data = { userName, record };
    console.log(data);
    axios
      .post(apiUrl, data)
      .then((response) => {
        console.log("API 응답 데이터:", response.data);
        router.replace("/rank");
      })
      .catch((error) => {
        console.log("API 요청 실패:", error);
      });
  };

  return (
    <PageWrapper>
      <div className="Register">
        <div className="container">
          <img
            className="img_char_nickname"
            src="/assets/img_char_nickname.svg"
          />
          <span className="text_description">
            랭킹 등록을 위한 닉네임을 입력해주슝~
          </span>
          <input
            className="input"
            onChange={inputMaxLength}
            placeholder="닉네임을 입력하세요."
            value={userName}
          />
          <div className="hint_wrapper">
            <span>닉네임은 최대 7자까지 입력 가능합니다.</span>
          </div>
          <button onClick={register} className="btn_register" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Register;
