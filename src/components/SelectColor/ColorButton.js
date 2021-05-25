import styled, { css } from "styled-components";

function ColorButton({ name, color, onClick }) {
  const _onClick = () => {
    onClick(name, color);
  };
  return <S.ColorButton color={color} onClick={_onClick}></S.ColorButton>;
}

export default ColorButton;

const S = {
  ColorButton: styled.button`
    ${({ color }) => css`
      width: 20px;
      height: 20px;
      border: none;
      border-radius: 100%;
      background-color: ${color};
      cursor: pointer;
    `}
  `,
};
