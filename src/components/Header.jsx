import { RiNotificationLine, RiUserLine } from 'react-icons/ri';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Welcome back, Admin</h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <RiNotificationLine className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <RiUserLine className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}