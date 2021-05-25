import React, { useState } from "react";
import styled from "styled-components";

import ColorBox from "./ColorBox";
import ColorButton from "./ColorButton";

function SelectColor({ name, color, onColorSelect }) {
  const [visible, setVisible] = useState(false);

  const onToggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <S.SelectColor>
      <ColorButton color={color} onClick={onToggleVisible} />
      {visible && (
        <ColorBox
          name={name}
          visible={visible}
          onToggleVisible={onToggleVisible}
          onColorSelect={onColorSelect}
        />
      )}
    </S.SelectColor>
  );
}

export default SelectColor;

const S = {
  SelectColor: styled.div`
    position: relative;
  `,
};
