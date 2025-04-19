import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

import "./styles.css";

interface StatData {
  stat: string;
  value: number;
}

interface PokemonRadarProps {
  data: StatData[];
}

const index = ({ data }: PokemonRadarProps) => {
  return (
    <div className="graph-container">
      <div className="graph">
        <ResponsiveContainer>
          <RadarChart outerRadius={150} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="stat" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Base Stats"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default index;

{
  /* 
        <ResponsiveContainer>
        <RadarChart outerRadius={150} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="stat" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Base Stats"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
  
  */
}
