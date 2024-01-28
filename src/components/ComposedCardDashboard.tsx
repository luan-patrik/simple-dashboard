import { theme } from "@/styles/globals";
import {
  Bar,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "./Card";

interface ComposedCardDashboardProps {
  data: { name: string; uv: number; pv: number }[];
}

const ComposedCardDashboard = ({ data }: ComposedCardDashboardProps) => {
  return (
    <Card w={"100%"} h={"26rem"}>
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{ top: 20, bottom: 20, right: 20, left: 20 }}
        >
          <XAxis
            dataKey={"name"}
            scale={"point"}
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
            barSize={20}
            fill={theme.colors.highlight.primary}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke={theme.colors.highlight.secondary}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ComposedCardDashboard;
