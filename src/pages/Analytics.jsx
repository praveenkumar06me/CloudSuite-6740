import ReactECharts from 'echarts-for-react';

export default function Analytics() {
  const userActivityData = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'User Activity',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Desktop' },
          { value: 735, name: 'Mobile' },
          { value: 580, name: 'Tablet' },
          { value: 484, name: 'Other' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Analytics Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">User Activity by Device</h3>
          <ReactECharts option={userActivityData} style={{ height: '400px' }} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Key Metrics</h3>
          <div className="space-y-4">
            {[
              { label: 'Page Views', value: '124,563', change: '+12.3%' },
              { label: 'Session Duration', value: '2m 56s', change: '+8.1%' },
              { label: 'Bounce Rate', value: '32.4%', change: '-4.2%' }
            ].map((metric) => (
              <div key={metric.label} className="flex items-center justify-between">
                <span className="text-gray-600">{metric.label}</span>
                <div className="text-right">
                  <div className="font-semibold">{metric.value}</div>
                  <div className={metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {metric.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}