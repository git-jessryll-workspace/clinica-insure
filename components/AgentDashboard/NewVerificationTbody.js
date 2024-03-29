import { useContext } from "react";
import { AgentContext } from '../../context';
import VerificationRow from "./VerificationRow";

export default function NewVerificationTbody() {
    const agentData = useContext(AgentContext);
    return (
      <div className="grid grid-cols-1">
        {agentData.newVerifications.map((verification) => {
          return (
            <VerificationRow
              key={verification.request_number}
              request_number={verification.request_number}
              verification_process={verification.vprocess}
              insurance_provider={verification.insurance_provider}
              status={verification.status}
            />
          );
        })}
      </div>
    );
}