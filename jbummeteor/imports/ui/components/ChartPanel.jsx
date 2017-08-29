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


//Q1 Age
//[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
//val = 17

//Q2 Gender
//["Male", "Female", "Genderfluid", "Transgender", "Other"]
// val = 5

//Q3 Sexuality
//["Heterosexual", "Homosexual", "Bisexual", "Asexual", "Pansexual", "Other"]
// val = 6

//Q4 Ethnicity
//["Caucasian", "Black or African American", "Hispanic or Latino", "Asian", "Pacific Islander", "American Indian", "Don't Know"]
//val = 7

//Q5 Generation
//["1st Generation", "2nd Generation", "3rd Generation", "4th Generation", "5th Generation"]
//val = 5

//Q6 Citizenship
//["Born inside the U.S.", "Born outside the U.S.", "Migrated to the U.S."]
//val =3

//Q7 Living Arrangement
//["Live with both parents", "Live with one parent", "Live with relatives"]
//val =3

//Q8 Siblings
//["Only child", "Have half/step siblings", "Have brothers/sisters"]
//val = 3

//Q9 Birth Order
//["Oldest", "Middle Child", "Youngest", "No siblings"]
//val = 4
