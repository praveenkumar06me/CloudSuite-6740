import { Routes, Route } from 'react-router-dom';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Customers from './pages/Customers';
import Settings from './pages/Settings';
import Login from './pages/Login';
import GetStartedPage from './pages/GetStartedPage';
import { questConfig } from './config/questConfig';

function App() {
  return (
    <QuestProvider
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiType="PRODUCTION"
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="customers" element={<Customers />} />
          <Route path="get-started" element={<GetStartedPage />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </QuestProvider>
  );
}

export default App;