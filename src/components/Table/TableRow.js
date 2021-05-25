import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import Checkbox from "../Checkbox";
import Radiobox from "../Radiobox";
import SelectColor from "../SelectColor";

function TableRow({
  name,
  min,
  max,
  average,
  deviation,
  color,
  yAxis,
  isHover,
  isAllSelected,
  onTableItemSelect,
  onYAxisSelect,
  onColorSelect,
}) {
  const [isSelected, setIsSelected] = useState(true);
  const options = [
    {
      name,
      value: "left",
      label: "왼쪽",
      checked: yAxis === 0 ? true : false,
    },
    {
      name: name,
      value: "right",
      label: "오른쪽",
      checked: yAxis === 1 ? true : false,
    },
  ];

  const onCheckboxSelect = () => {
    onTableItemSelect(name);
    setIsSelected(!isSelected);
  };

  useEffect(
    function updateIsSelectByAllCheckboax() {
      setIsSelected(isAllSelected);
    },
    [isAllSelected]
  );

  return (
    <S.TableRow isHover={isHover}>
      <td className="checkbox">
        <Checkbox isChecked={isSelected} onClick={onCheckboxSelect} />
      </td>
      <td className="color">
        <SelectColor name={name} color={color} onColorSelect={onColorSelect} />
      </td>
      <td className="name">{name}</td>
      <td className="average">{average}</td>
      <td className="deviation">{deviation}</td>
      <td className="min">{min}</td>
      <td className="max">{max}</td>
      <td className="select-y-axis">
        <Radiobox options={options} onChange={onYAxisSelect} />
      </td>
    </S.TableRow>
  );
}

export default TableRow;

const S = {
  TableRow: styled.tr`
    ${({ isHover }) => css`
      background-color: ${isHover ? "rgba(0,0,0,.05)" : "white"};
      cursor: pointer;

      td {
        padding: 5px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        text-align: center;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.7);

        &.checkbox {
          width: 22px;
          height: 22px;
        }

        &.name {
          color: black;
          font-weight: 500;
        }
      }
    `}
  `,
};
