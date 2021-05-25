import React from "react";
import styled from "styled-components";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function LineChart({ options, chart }) {
  return (
    <S.LineChart>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chart} />
    </S.LineChart>
  );
}

export default LineChart;

const S = {
  LineChart: styled.div`
    .chart-container {
      width: 100%;
      height: 400px;
    }
  `,
};
