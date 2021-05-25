import React from "react";
import styled from "styled-components";

function DataDownload({ onClick }) {
  return <S.DataDownload onClick={onClick}>데이터 다운로드</S.DataDownload>;
}

export default DataDownload;

const S = {
  DataDownload: styled.button`
    background-color: white;
    border: 1px solid #8085e9;
    border-radius: 12px;
    padding: 5px 10px;
    color: #8085e9;
    font-weight: bold;
    cursor: pointer;
  `,
};
