import { useContext } from "react";
import { TeamLeadContext } from "../../context";
import AgentPersonRow from "./AgentPersonRow";

export default function AgentPeopleTbody() {
  const tlContext = useContext(TeamLeadContext);
  return (
    <div className="grid grid-cols-1">
      {tlContext.agentList.map((agent) => (
        <AgentPersonRow
          key={agent.name}
          person={agent}
        />
      ))}
    </div>
  );
}
