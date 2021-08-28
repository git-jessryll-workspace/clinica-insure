import TeamLeadDashboardPage from "../components/TeamLeadDashboard/TeamLeadDashboardPage";
import { useContext, useEffect } from 'react';
import { GlobalContext } from "../context/state";

export default function Home() {
  const global = useContext(GlobalContext);
  useEffect(() => {
    global.updateActiveMenuLink('dashboard');
  }, [])
  return (
    <>
        <TeamLeadDashboardPage />
    </>
  );
}
