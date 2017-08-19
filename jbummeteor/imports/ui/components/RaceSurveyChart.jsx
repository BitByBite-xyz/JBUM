import React from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
              {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const RacePieChart = () => (
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

const RaceSurveyChart = () => (
  <div className="col-sm-6" style={{marginTop: 10}}>
    <Paper zDepth={1}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{height: 266, width: 5, backgroundColor: 'blue'}}/>
        <center style={{marginLeft: '25%'}}><h4 style={{marginTop: 0, paddingTop: 20}}>Race Survey</h4>
        <RacePieChart className="graph-container" /></center>
      </div>
    </Paper>
  </div>
)

export default RaceSurveyChart;
