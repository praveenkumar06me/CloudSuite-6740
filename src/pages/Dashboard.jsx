import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

export default function Dashboard() {
  const revenueData = {
    xAxis: {
      type: 'category',
      data: Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return format(date, 'MMM dd');
      }).reverse()
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1520],
      type: 'line',
      smooth: true,
      areaStyle: {}
    }],
    tooltip: {
      trigger: 'axis'
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
          <p className="text-2xl font-semibold mt-2">$45,231.89</p>
          <span className="text-green-600 text-sm">+20.1% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Active Users</h3>
          <p className="text-2xl font-semibold mt-2">2,338</p>
          <span className="text-green-600 text-sm">+15.3% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Conversion Rate</h3>
          <p className="text-2xl font-semibold mt-2">2.4%</p>
          <span className="text-red-600 text-sm">-0.2% from last month</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Revenue Overview</h3>
        <ReactECharts option={revenueData} style={{ height: '400px' }} />
      </div>
    </div>
  );
}