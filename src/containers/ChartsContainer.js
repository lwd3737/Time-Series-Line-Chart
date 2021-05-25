import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Highcharts from "highcharts";

import { LineChart, Table, DataDownload } from "../components";
import { dataset } from "../data.json";
import { getStartDate, getEndDate, parseData } from "../utils/parsing";
import theme from "../theme";

require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/export-data")(Highcharts);

const { series, table } = parseData(dataset);
const { colors } = theme;

function ChartsContainer() {
  const chart = useRef();
  const [hoverName, setHoverName] = useState(null);
  const [isAllSelected, setIsAllSelected] = useState(true);
  const [options, setOptions] = useState({
    title: {
      text: "ioFarm",
      align: "center",
      style: {
        color: "#8085e9",
        fontSize: "14px",
      },
    },
    exporting: {
      enabled: false,
    },
    colors,
    yAxis: [
      {
        title: {
          text: null,
        },
        tickInterval: 3,
      },
      {
        title: {
          text: null,
        },
        tickInterval: 200,
        opposite: true,
      },
    ],
    xAxis: {
      type: "datetime",
      min: getStartDate(dataset),
      max: getEndDate(dataset),
      labels: {
        formatter: function () {
          return Highcharts.dateFormat("%m/%d", this.value);
        },
      },
      tickInterval: 24 * 3600 * 1000,
    },
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e) {
              const { name } = e.target.series;
              setHoverName(name);
            },
            mouseOut(e) {
              setHoverName(null);
            },
            remove(e) {},
          },
        },
      },
    },
    series,
    legend: {
      enabled: false,
    },
  });

  const [tableData, setTableData] = useState(table);

  const onAllTableItemSelect = () => {
    setIsAllSelected(!isAllSelected);
  };

  useEffect(
    function updateAllSeriesVisiblae() {
      setOptions({
        ...options,
        series: options.series.map((item) => {
          return {
            ...item,
            visible: isAllSelected,
          };
        }),
      });
    },
    [isAllSelected]
  );

  const onTableItemSelect = (name) => {
    setOptions({
      ...options,
      series: options.series.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            visible: !item.visible,
          };
        }
        return item;
      }),
    });
  };

  const onYAxisSelect = (e) => {
    const { name, value } = e.target;
    let yAxis;
    console.log(name, value);

    if (value === "left") yAxis = 0;
    else if (value === "right") yAxis = 1;

    setOptions({
      ...options,
      series: options.series.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            yAxis,
          };
        }
        return item;
      }),
    });

    setTableData({
      ...tableData,
      [name]: {
        ...tableData[name],
        yAxis,
      },
    });
  };

  const onColorSelect = (name, color) => {
    setOptions({
      ...options,
      series: options.series.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            color,
          };
        }
        return item;
      }),
    });

    setTableData({
      ...tableData,
      [name]: {
        ...tableData[name],
        color,
      },
    });
  };

  const downloadCSV = () => {
    if (chart && chart.current && chart.current.chart) {
      chart.current.chart.downloadCSV();
    }
  };

  return (
    <S.ChartsContainer>
      <div className="charts-head">
        <DataDownload onClick={downloadCSV} />
      </div>
      <LineChart options={options} chart={chart} />
      <Table
        data={tableData}
        hoverName={hoverName}
        isAllSelected={isAllSelected}
        onAllTableItemSelect={onAllTableItemSelect}
        onTableItemSelect={onTableItemSelect}
        onYAxisSelect={onYAxisSelect}
        onColorSelect={onColorSelect}
      />
    </S.ChartsContainer>
  );
}

export default ChartsContainer;

const S = {
  ChartsContainer: styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 8px;

    .charts-head {
      display: flex;
      justify-content: flex-end;
    }
  `,
};
