import TeamLeadDashboardPage from "../components/TeamLeadDashboard/TeamLeadDashboardPage";
import { useContext, useEffect } from 'react';
import { GlobalContext } from "../context";
import AgentDashboardPage from "../components/AgentDashboard/AgentDashboardPage";

export default function Home() {
  const global = useContext(GlobalContext);
  useEffect(() => {
    global.updateActiveMenuLink('dashboard');
  }, [])
  return (
    <>
    {/* add condition if the user is agent or team lead. */}
        <TeamLeadDashboardPage />
        {/* <AgentDashboardPage /> */}
    </>
  );
}
