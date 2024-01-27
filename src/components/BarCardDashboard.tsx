import { theme } from "@/styles/globals";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "./Card";

const BarCardDashboard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
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
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <Card w={"100%"} h={"26rem"}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          barSize={20}
          margin={{ top: 20, bottom: 20, right: 20, left: 20 }}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 20, right: 20 }}
          />
          <YAxis />
          <Tooltip
            contentStyle={{
              color: theme.colors.foreground,
              backgroundColor: theme.colors.background,
            }}
          />
          <Legend />
          <Bar
            dataKey="uv"
            fill={theme.colors.highlight.primary}
            background={{ fill: theme.colors.foreground }}
          />
          <Bar
            dataKey="pv"
            fill={theme.colors.highlight.secondary}
            background={{ fill: theme.colors.foreground }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default BarCardDashboard;
