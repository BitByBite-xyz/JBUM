import React from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
              {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const GenderPieChart = () => (
  <PieChart width={195} height={195} onMouseEnter={this.onPieEnter}>
      <Pie
        data={data}
        cx={'45%'}
        cy={'45%'}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        //paddingAngle={5}
      >
        {
          data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
        }
      </Pie>
      <Tooltip />
    </PieChart>
)

const GenderSurveyChart = () => (
  <div className="col-sm-6" style={{marginTop: 10}}>
    <Paper zDepth={1}>
      <center><h4 style={{marginTop: 0, paddingTop: 20}}>Gender Survey</h4>
      <GenderPieChart className="graph-container" /></center>
    </Paper>
  </div>
)

export default GenderSurveyChart;
