import { BarChart } from '@mui/x-charts/BarChart';
import React from 'react'

const TeamPerformanceChart = () => {


    const uData = [2000, 3500, 3000, 4000];
    const xLabels = [
        'Sept',
        'Oct',
        'Nov',
        'Dec',
    ];

    return (
        <div className="bg-white" style={{ padding: "15px", borderRadius: "15px" }}>
            <div className='mt-2 pr-5'>
                <div className='text-2xl font-semibold'>Team Performance</div>
                <div className='text-xs text-gray-500 my-2'>Last 4 months</div>
                <div>
                    <BarChart
                        height={300}
                        series={[
                            { data: uData, id: 'uvId', stack: 'total',color:"#888" },   
                        ]}
                        xAxis={[{ data: xLabels, scaleType: 'band' }]}
                    />
                </div>
            </div>
        </div>
    )
}

export default TeamPerformanceChart
