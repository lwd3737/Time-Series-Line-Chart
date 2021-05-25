import React from "react";
import styled from "styled-components";

function Radiobox({ options, onChange }) {
  return (
    <S.Radiobox>
      {options.map((option, i) => {
        const { name, value, label, checked } = option;

        return (
          <div className="radio-wrapper">
            <input
              key={value}
              type="radio"
              id={name}
              name={name}
              value={value}
              checked={checked}
              onChange={onChange}
            />
            <label htmlFor={name}>{label}</label>
          </div>
        );
      })}
    </S.Radiobox>
  );
}

export default Radiobox;

const S = {
  Radiobox: styled.div`
    display: flex;
    justify-content: center;

    input {
      position: relative;
      top: 2px;
    }
  `,
};
