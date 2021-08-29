import TeamLeadDashboardPage from "../components/TeamLeadDashboard/TeamLeadDashboardPage";
import { useContext, useEffect } from 'react';
import { GlobalContext } from "../context/state";
import AgentDashboardPage from "../components/AgentDashboard/AgentDashboardPage";

export default function Home() {
  const global = useContext(GlobalContext);
  useEffect(() => {
    global.updateActiveMenuLink('dashboard');
  }, [])
  return (
    <>
        {/* <TeamLeadDashboardPage /> */}
        <AgentDashboardPage />
    </>
  );
}
