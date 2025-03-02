import { NavLink } from 'react-router-dom';
import { RiDashboardLine, RiLineChartLine, RiTeamLine, RiSettings4Line, RiBookReadLine } from 'react-icons/ri';

const navigation = [
  { name: 'Dashboard', to: '/', icon: RiDashboardLine },
  { name: 'Analytics', to: '/analytics', icon: RiLineChartLine },
  { name: 'Customers', to: '/customers', icon: RiTeamLine },
  { name: 'Get Started', to: '/get-started', icon: RiBookReadLine },
  { name: 'Settings', to: '/settings', icon: RiSettings4Line },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary-600">BusinessPro</h1>
      </div>
      <nav className="mt-6">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 ${
                isActive ? 'bg-primary-50 text-primary-600 border-r-4 border-primary-600' : ''
              }`
            }
          >
            <item.icon className="w-6 h-6 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}