import React from "react";
import styled from "styled-components";

import { ReactComponent as BoxIcon } from "../../assets/images/box.svg";
import { ReactComponent as CheckedBoxIcon } from "../../assets/images/checked_box.svg";

function Checkbox({ isChecked, onClick }) {
  return (
    <S.Checkbox onClick={onClick}>
      {isChecked ? <CheckedBoxIcon /> : <BoxIcon />}
    </S.Checkbox>
  );
}

export default Checkbox;

const S = {
  Checkbox: styled.span`
    width: 12px;
    height: 12px;
    padding-top: 10px;
    color: rgba(0, 0, 0, 0.4);
  `,
};
