import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

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
        <div className="chart-container bg-white w-full h-full rounded">
            <div className='px-4 py-6'>
            <canvas ref={chartRef} />
            </div>
        </div>
    );
};

export default AttendanceChart;