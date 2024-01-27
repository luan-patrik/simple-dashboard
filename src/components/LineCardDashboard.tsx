import { theme } from "@/styles/globals";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "./Card";

const LineCardDashboard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <Card w={"100%"} h={"26rem"}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20,  bottom: 20, right: 20, left: 20 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              color: theme.colors.foreground,
              backgroundColor: theme.colors.background,
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="uv"
            stroke={theme.colors.highlight.primary}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke={theme.colors.highlight.secondary}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default LineCardDashboard;
