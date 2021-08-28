import { useContext } from "react";
import { TeamLeadContext } from "../../context/state";
import AgentVerificationRow from "./AgentVerificationRow";

export default function AgentVerificationTbody() {
  const tlContext = useContext(TeamLeadContext);
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {tlContext.verifications.map((verification) => (
        <AgentVerificationRow
          key={verification.request_number}
          request_number={verification.request_number}
          verification_process={verification.vprocess}
          insurance_provider={verification.insurance_provider}
          status={verification.status}
        />
      ))}
    </tbody>
  );
}
