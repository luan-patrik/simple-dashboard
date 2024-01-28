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

interface LineCardDashboardProps {
  data: { name: string; uv: number; pv: number }[];
}

const LineCardDashboard = ({ data }: LineCardDashboardProps) => {
  return (
    <Card w={"100%"} h={"20rem"}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, bottom: 20, right: 20, left: 20 }}
        >
          <XAxis dataKey="name" padding={{ right: 10 }} />
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
