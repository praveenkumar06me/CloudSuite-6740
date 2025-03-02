import { useState } from 'react';

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    marketing: false,
    theme: 'light',
    language: 'en',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>

      <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
        <div className="p-6">
          <h3 className="text-lg font-medium">Notifications</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium text-gray-700">Email Notifications</label>
                <p className="text-gray-500 text-sm">Receive email updates about your account</p>
              </div>
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium text-gray-700">Marketing</label>
                <p className="text-gray-500 text-sm">Receive marketing and promotional emails</p>
              </div>
              <input
                type="checkbox"
                name="marketing"
                checked={settings.marketing}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded"
              />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium">Preferences</h3>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block font-medium text-gray-700">Theme</label>
              <select
                name="theme"
                value={settings.theme}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Language</label>
              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium">Danger Zone</h3>
          <div className="mt-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}