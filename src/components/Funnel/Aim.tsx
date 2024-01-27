import React, { useEffect } from "react";
import backArrow from "assets/backArrow.svg";
import * as S from "./style";
import { useAtom } from "jotai";
import formAtom from "contexts/formAtom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface AimProps {
  goPrev: () => void;
  goNext: () => void;
}

const Aim = ({ goPrev, goNext }: AimProps) => {
  const [formUserData, setFormUserData] = useAtom(formAtom);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      goNext();
      await axios.post(
        process.env.REACT_APP_BASE_URL + "/v1/api/auth/signUp",
        formUserData,
      );
      const { data } = await axios.post(
        process.env.REACT_APP_BASE_URL + "/v1/api/auth/signIn",
        {
          email: formUserData.email,
          password: formUserData.password,
        },
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", formUserData.email);
      goNext();
    } catch {
      alert("회원가입에 실패하였습니다!");
      navigate("/intro");
    }
  };

  useEffect(() => {
    if (formUserData.target) handleSubmit();
  }, [formUserData]);

  return (
    <S.Layout>
      <img src={backArrow} onClick={goPrev} width="14px" alt="이전" />
      <h2 style={{ marginBottom: 0 }}>
        나의 목표를
        <br />
        설정 해 주세요
      </h2>
      <S.Extra color="#B6B6B6">자신에게 가장 적합하게 맞춰주세요</S.Extra>
      <S.Button
        type="button"
        value="건강한 생활"
        onClick={(e) => {
          setFormUserData({ ...formUserData, target: "HEALTHY_LIFE" });
        }}
      />
      <S.Button
        type="button"
        value="체중 감량"
        onClick={(e) =>
          setFormUserData({ ...formUserData, target: "LOSE_WEIGHT" })
        }
      />
      <S.Button
        type="button"
        value="체중 중량"
        onClick={(e) => setFormUserData({ ...formUserData, target: "BULK" })}
      />
      <S.Button
        type="button"
        value="체중 유지"
        onClick={(e) => setFormUserData({ ...formUserData, target: "KEEP" })}
      />
    </S.Layout>
  );
};

export default Aim;
