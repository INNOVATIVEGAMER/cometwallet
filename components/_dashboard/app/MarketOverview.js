import { Card, CardHeader, Box } from "@mui/material";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "BTC Value",
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

export default function MarketOverview(props) {
  const data2 = props.BTCData.candles;
  const values = [];
  const labels = [];
  data2.forEach((candle) => {
    values.push(candle.close);
    labels.push(new Date(candle.start_timestamp).toLocaleString());
  });
  data.datasets[0].data = values;
  data.labels = labels;
  return (
    <Card>
      <CardHeader title="Market Overview" subheader="BTC Value Update" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <Line data={data} width={400} height={200} />
      </Box>
    </Card>
  );
}
