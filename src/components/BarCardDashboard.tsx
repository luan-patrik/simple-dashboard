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

interface BarCardDashboardProps {
  data: { name: string; uv: number; pv: number }[];
}

const BarCardDashboard = ({ data }: BarCardDashboardProps) => {
  return (
    <Card w={"100%"} h={"20rem"}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          barSize={20}
          margin={{ top: 20, bottom: 20, right: 20, left: 20 }}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
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
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default BarCardDashboard;
