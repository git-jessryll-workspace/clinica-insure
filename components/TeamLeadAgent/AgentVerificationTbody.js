import { useContext } from "react";
import { TeamLeadContext } from "../../context";
import AgentVerificationRow from "./AgentVerificationRow";

export default function AgentVerificationTbody({agentId}) {
  const tlContext = useContext(TeamLeadContext);
  return (
    <div className="grid grid-cols-1 mx-6">
      {tlContext.verifications.map((verification) => (
        <AgentVerificationRow
          key={verification.request_number}
          request_number={verification.request_number}
          verification_process={verification.vprocess}
          insurance_provider={verification.insurance_provider}
          status={verification.status}
          agentId={agentId}
        />
      ))}
    </div>
  );
}
