import React from 'react';
import styled from 'styled-components';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis } from 'recharts';
import Container from 'react-bootstrap/Container';
const StackedBarChart = () => {
    return (
      <BarChart width={500} height={500} data={barChartData}>
        <XAxis dataKey='name' />
        <YAxis />
        <Bar dataKey='pv' stackId='a' fill='#DC143C' />
        <Bar dataKey='uv' stackId='a' fill='#bdc3c7' />
      </BarChart>
    );
  },
  TinyAreaChart = ({ chartData }) => {
    return (
      <AreaChart
        width={220}
        height={60}
        data={chartData}
        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
      >
        <Area type='monotone' dataKey='uv' stroke='#DC143C' fill='#bdc3c7' />
      </AreaChart>
    );
  },
  GitHubIssuesTinyChartWithLabel = ({ label, maxValue, chartData }) => (
    <IssuesTinyChartContainer>
      <IssuesTinyChartLabel>{label}</IssuesTinyChartLabel>
      <IssuesTinyChartValue>{maxValue}</IssuesTinyChartValue>
      <TinyAreaChart chartData={chartData} />
    </IssuesTinyChartContainer>
  );

const ChartsCard = () => {
  return (
    <ChartsCardContainer>
      <ChartCardHeading>
        <p>Team "Frontpage Freebirds" tickets for the week</p>
      </ChartCardHeading>
      <Line></Line>
      <ChartCardContent>
        <StackedBarChart />

        <GitHubIssuesChartsContainer>
          <GitHubIssuesTinyChartWithLabel
            label='Created Tickets'
            maxValue={getMaxChartValue(CreatedIssuesChartData)}
            chartData={CreatedIssuesChartData}
          />

          <GitHubIssuesTinyChartWithLabel
            label='Closed Tickets'
            maxValue={getMaxChartValue(ClosedIssuesChartData)}
            chartData={ClosedIssuesChartData}
          />
          <GitHubIssuesTinyChartWithLabel
            label='Re-opened Tickets'
            maxValue={getMaxChartValue(ReOpenedIssuesChartData)}
            chartData={ReOpenedIssuesChartData}
          />
          <GitHubIssuesTinyChartWithLabel
            label='Low Priority'
            maxValue={getMaxChartValue(WontFixIssuesChartData)}
            chartData={WontFixIssuesChartData}
          />
          <GitHubIssuesTinyChartWithLabel
            label='Moderate Priority'
            maxValue={getMaxChartValue(NeedsTestIssuesChartData)}
            chartData={NeedsTestIssuesChartData}
          />
          <GitHubIssuesTinyChartWithLabel
            label='High Priority'
            maxValue={getMaxChartValue(FixedIssuesChartData)}
            chartData={FixedIssuesChartData}
          />
        </GitHubIssuesChartsContainer>
      </ChartCardContent>
    </ChartsCardContainer>
  );
};

const getMaxChartValue = (chartData) =>
  chartData.reduce((prev, current) => (prev.uv > current.uv ? prev : current))
    .uv;

const barChartData = [
  { name: 'Mon', uv: 18, pv: 42, amt: 2400 },
  { name: 'Tue', uv: 10, pv: 29, amt: 2210 },
  { name: 'Wed', uv: 13, pv: 45, amt: 2290 },
  { name: 'Thu', uv: 13, pv: 35, amt: 2000 },
  { name: 'Fri', uv: 10, pv: 19, amt: 2181 },
  { name: 'Sat', uv: 11, pv: 23, amt: 2500 },
  { name: 'Sun', uv: 17, pv: 20, amt: 2100 },
];

const CreatedIssuesChartData = [
  { name: 'Mon', uv: 25, amt: 2400 },
  { name: 'Tue', uv: 10, amt: 2210 },
  { name: 'Wed', uv: 28, amt: 2290 },
  { name: 'Thu', uv: 44, amt: 2000 },
  { name: 'Fri', uv: 54, amt: 2181 },
  { name: 'Sat', uv: 50, amt: 2500 },
  { name: 'Sun', uv: 32, amt: 2500 },
];

const ClosedIssuesChartData = [
  { name: 'Mon', uv: 25, amt: 2400 },
  { name: 'Tue', uv: 15, amt: 2210 },
  { name: 'Wed', uv: 22, amt: 2290 },
  { name: 'Thu', uv: 20, amt: 2000 },
  { name: 'Fri', uv: 18, amt: 2181 },
  { name: 'Sat', uv: 15, amt: 2500 },
  { name: 'Sun', uv: 26, amt: 2500 },
];

const ReOpenedIssuesChartData = [
  { name: 'Mon', uv: 0, amt: 2400 },
  { name: 'Tue', uv: 1, amt: 2210 },
  { name: 'Wed', uv: 1, amt: 2290 },
  { name: 'Thu', uv: 1, amt: 2000 },
  { name: 'Fri', uv: 2, amt: 2181 },
  { name: 'Sat', uv: 1, amt: 2500 },
  { name: 'Sun', uv: 1, amt: 2500 },
];

const WontFixIssuesChartData = [
  { name: 'Mon', uv: 3, amt: 2400 },
  { name: 'Tue', uv: 2, amt: 2210 },
  { name: 'Wed', uv: 1, amt: 2290 },
  { name: 'Thu', uv: 2, amt: 2000 },
  { name: 'Fri', uv: 3, amt: 2181 },
  { name: 'Sat', uv: 2, amt: 2500 },
  { name: 'Sun', uv: 4, amt: 2500 },
];

const NeedsTestIssuesChartData = [
  { name: 'Mon', uv: 6, amt: 2400 },
  { name: 'Tue', uv: 4, amt: 2210 },
  { name: 'Wed', uv: 6, amt: 2290 },
  { name: 'Thu', uv: 5, amt: 2000 },
  { name: 'Fri', uv: 4, amt: 2181 },
  { name: 'Sat', uv: 6, amt: 2500 },
  { name: 'Sun', uv: 8, amt: 2500 },
];

const FixedIssuesChartData = [
  { name: 'Mon', uv: 10, amt: 2400 },
  { name: 'Tue', uv: 14, amt: 2210 },
  { name: 'Wed', uv: 9, amt: 2290 },
  { name: 'Thu', uv: 11, amt: 2000 },
  { name: 'Fri', uv: 9, amt: 2181 },
  { name: 'Sat', uv: 6, amt: 2500 },
  { name: 'Sun', uv: 3, amt: 2500 },
];

const IssuesTinyChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    flex-direction: row;
  }
`;

const IssuesTinyChartLabel = styled.span`
  text-transform: uppercase;
  color: #000;
  font-weight: 300;
`;

const IssuesTinyChartValue = styled.span`
  font-size: 28px;
  font-weight: 500;
`;

const ChartsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;

  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
`;

const ChartCardHeading = styled.h4`
  margin-left: 20px;
`;

const Line = styled.hr`
  width: 100%;
  color: #e7e7e7;
  border: 1px solid;
`;

const ChartCardContent = styled.div`
  display: flex;
  padding: 20px 0;
`;

const GitHubIssuesChartsContainer = styled.div`
  display: grid;
  margin-left: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin: 0 20px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export default ChartsCard;
