import { useContext } from "react";
import { AgentContext } from '../../context/state';
import VerificationRow from "./VerificationRow";

export default function TopVerificationTbody() {
    const agentData = useContext(AgentContext);
    return (
      <div className="grid grid-cols-1">
        {agentData.topVerifications.map((verification) => {
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