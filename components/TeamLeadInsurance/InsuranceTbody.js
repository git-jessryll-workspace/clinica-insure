import { useContext } from "react";
import { TeamLeadContext } from "../../context/state";
import InsuranceAgentVerificationRow from "./InsuranceAgentVerificationRow";

export default function InsuranceTbody({agentId}) {
  const tlContext = useContext(TeamLeadContext);
  return (
    <div className="grid grid-cols-1">
      {tlContext.insuranceVerifications.map((verification) => (
        <InsuranceAgentVerificationRow
          key={verification.id}
          verification={verification}
        />
      ))}
    </div>
  );
}