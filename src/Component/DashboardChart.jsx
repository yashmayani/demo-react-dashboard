


import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import ReactApexChart from 'react-apexcharts';


const DashboardChart = () => {

    const [state, setState] = React.useState({

        series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30, 16, 21, 13, 30]
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function (chart, w, e) {
                        // console.log(chart, w, e)
                    }
                }
            },
            colors: ['gray'],
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September ',
                    'October',
                    'November',
                    'December',
                ],
                labels: {
                    style: {
                        colors: ['gray'],
                        fontSize: '12px'
                    }
                }
            }
        },


    });


    return (
        <div className="bg-white mt-5" style={{ padding: "15px", borderRadius: "15px" }}>
            <div className='mt-2 pr-5'>
                <div className='text-2xl font-semibold'>Revenue Chart</div>
                <div>
                    <div id="chart" >
                        <ReactApexChart className="border rounded-3xl p-4" options={state.options} series={state.series} type="bar" height={350} />
                    </div>
                    <div id="html-dist"></div>
                </div>
            </div>
        </div>
    )
}

export default DashboardChart
