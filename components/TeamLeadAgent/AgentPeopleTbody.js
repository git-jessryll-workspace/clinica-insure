import { useContext } from "react";
import { TeamLeadContext } from "../../context/state";
import AgentPersonRow from "./AgentPersonRow";

export default function AgentPeopleTbody() {
  const tlContext = useContext(TeamLeadContext);
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {tlContext.agentList.map((agent) => (
        <AgentPersonRow
          key={agent.name}
          person={agent}
        />
      ))}
    </tbody>
  );
}
