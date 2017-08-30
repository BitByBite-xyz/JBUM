import React from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

// const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
//     {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#913D88', '#F7CA18',
                '#F4B350', '#F2784B', '#D2D7D3', '#1F3A93', '#66CC99', '#E87E04',
                '#CF000F', '#336E7B', '#F9690E', '#BF55EC', '#59ABE3'];

const RADIAN = Math.PI / 180;


const ChartPanel = (props) => {
    const { data, graphName } = props;

    return (
        <div className="col-sm-6" style={{marginTop: 10}}>
            <Paper zDepth={1}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{height: 266, width: 5, backgroundColor: 'blue'}}/>
                    <center style={{marginLeft: '25%'}}><h4 style={{marginTop: 0, paddingTop: 20}}>{graphName}</h4>
                        <div className="graph-container">
                            <PieChart width={195} height={195} onMouseEnter={this.onPieEnter}>
                                <Pie
                                    data={data}
                                    dataKey={'value'}
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
                                <Tooltip/>
                            </PieChart>
                        </div>
                    </center>
                </div>
            </Paper>
        </div>
    );
}

export default ChartPanel;
