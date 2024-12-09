import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Download } from '../../assets';

Chart.register(...registerables);

const AttendanceChart = ({ data, colors }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Present', 'Absent'],
                datasets: [{
                    label: '% of Attendance',
                    data: data,
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
        });

        return () => {
            myChart.destroy();
        };
    }, [data, colors]);

    return (
        <div className="chart-container bg-white w-full h-full rounded shadow lg:m-0 xs:mb-4">
            <div className='flex flex-col items-start justify-between lg:px-3 lg:py-2 p-0'>
            <canvas ref={chartRef} className='!size-[300px]' />
            <div className='flex items-center gap-3 justify-end w-full cursor-pointer'>
                <span>download csv</span>
                <img src={Download} alt="Download" />
            </div>
            </div>
        </div>
    );
};

export default AttendanceChart;