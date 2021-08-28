import { useContext } from "react";
import { TeamLeadContext } from "../../context/state";
import InsuranceAgentVerificationRow from "./InsuranceAgentVerificationRow";

export default function InsuranceTbody({agentId}) {
  const tlContext = useContext(TeamLeadContext);
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {tlContext.insuranceVerifications.map((verification) => (
        <InsuranceAgentVerificationRow
          key={verification.id}
          verification={verification}
        />
      ))}
    </tbody>
  );
}