import { useEffect } from "react";
import styled from "styled-components";

import Theme from "../../theme";
import ColorButton from "./ColorButton";
import { ReactComponent as CloseIcon } from "../../assets/images/close.svg";

const { colors } = Theme;

function ColorBox({ name, onToggleVisible, onColorSelect }) {
  useEffect(function addCloseEvent() {
    window.addEventListener("click", onToggleVisible);

    return () => window.removeEventListener("click", onToggleVisible);
  }, []);

  return (
    <S.ColorBox>
      <div className="head" onClick={onToggleVisible}>
        <CloseIcon />
      </div>
      <div className="color-select">
        {colors &&
          colors.map((color) => (
            <ColorButton
              key={color}
              name={name}
              color={color}
              onClick={onColorSelect}
            />
          ))}
      </div>
    </S.ColorBox>
  );
}

export default ColorBox;

const S = {
  ColorBox: styled.div`
    position: absolute;
    top: 0px;
    left: 40px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 150px;
    height: 130px;
    z-index: 10;

    .head {
      margin-left: auto;
      width: 20px;
      height: 20px;
      padding: 3px;
    }

    .color-select {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      & > * {
        margin: 0 11px 5px 11px;
      }
    }
  `,
};
