import theme from "../theme";

export const getStartDate = (dataset) => {
  return Date.parse(dataset[0].time);
};

export const getEndDate = (dataset) => {
  return Date.parse(dataset[dataset.length - 1].time);
};

const calculateRound = (num) => Math.round(num * 100) / 100;

const findSeriesItem = (series, key) =>
  series.find((seriesItem) => seriesItem.name === key);

export const parseData = (dataset) => {
  const { colors } = theme;
  const series = [];
  const table = {};

  dataset.forEach((data, i) => {
    let j = 0;

    for (let key in data) {
      if (key === "time" || isNaN(data[key])) continue;

      j = j % colors.length;

      if (i === 0) {
        series.push({
          name: key,
          yAxis: 0,
          data: [[Date.parse(data.time), data[key]]],
          visible: true,
          color: colors[j],
        });

        table[key] = {
          min: data[key],
          max: data[key],
          sum: data[key],
          count: 0,
          color: colors[j],
        };
      } else {
        const finded = findSeriesItem(series, key);

        finded.data.push([Date.parse(data.time), data[key]]);

        const { min, max, sum, count, color } = table[key];

        table[key] = {
          min: min > data[key] ? data[key] : min,
          max: max < data[key] ? data[key] : max,
          sum: sum + data[key],
          count: count + 1,
          color,
        };
      }

      if (i === dataset.length - 1) {
        const setYAxis = (average) => (average < 50 ? 0 : 1);

        const { sum, count, max, min } = table[key];
        const average = calculateRound(sum / count);

        table[key].average = average;
        table[key].yAxis = setYAxis(average);
        table[key].max = calculateRound(max);
        table[key].min = calculateRound(min);
        table[key].deviation = calculateRound(max - min);

        delete table[key].sum;
        delete table[key].count;

        const finded = findSeriesItem(series, key);
        finded.yAxis = setYAxis(average);
      }

      j++;
    }
  });

  return {
    series,
    table,
  };
};
