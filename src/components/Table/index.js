import React from "react";
import styled from "styled-components";

import TableRow from "./TableRow";
import Checkbox from "../Checkbox";

function Table({
  data,
  hoverName,
  isAllSelected,
  onPointMouseOver,
  onAllTableItemSelect,
  onTableItemSelect,
  onYAxisSelect,
  onColorSelect,
}) {
  const renderTableRows = () => {
    const TableRows = [];

    for (let key in data) {
      let { min, max, average, deviation, yAxis, color } = data[key];
      const isHover = key === hoverName;

      TableRows.push(
        <TableRow
          key={key}
          name={key}
          min={min}
          max={max}
          average={average}
          deviation={deviation}
          yAxis={yAxis}
          color={color}
          isHover={isHover}
          isAllSelected={isAllSelected}
          onMouseOver={onPointMouseOver}
          onTableItemSelect={onTableItemSelect}
          onYAxisSelect={onYAxisSelect}
          onColorSelect={onColorSelect}
        />
      );
    }

    return TableRows;
  };
  //console.log(data);

  return (
    <S.Table>
      <thead>
        <tr className="top-row">
          <th className="checkbox">
            <Checkbox
              isChecked={isAllSelected}
              onClick={onAllTableItemSelect}
            />
          </th>
          <th>색상</th>
          <th>항목</th>
          <th>평균</th>
          <th>편차</th>
          <th>최소</th>
          <th>최대</th>
          <th>Y축 선택</th>
        </tr>
      </thead>
      <tbody>{renderTableRows()}</tbody>
    </S.Table>
  );
}

export default Table;

const S = {
  Table: styled.table`
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-top: 50px;

    .top-row {
      background-color: rgba(0, 0, 0, 0.03);

      th {
        padding: 5px;
        font-size: 14px;
      }
    }
  `,
};
