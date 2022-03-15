import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const state = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
       { 
            label: 'Patients',
            data: [65, 40, 12, 90, 120, 5, 70, 15, 30, 100, 10],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        { 
            label: 'Appointments',
            data: [5, 10, 40, 70, 30, 0, 50, 5, 15, 90, 100],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }
    ],
}
function MonthlyStatistics() {
    return(
        <div className="bg-white p-2 mt-3 max-h-full  min-h-[400px] h-full overflow-auto  mr-6 lg:mr-10 ">
            <Bar
                data= {state}
                options={{
                    title: {
                        display: true,
                        text: 'Average Performance',
                        fontSize : 20
                    },
                    legend: {
                        display:true,
                        position: 'right'
                    }
                }}
            />
        </div>
    )
}
export default MonthlyStatistics;