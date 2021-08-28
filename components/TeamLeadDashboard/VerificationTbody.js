import VerificationRow from "./VerificationRow";
import { useContext } from 'react';
import { TeamLeadContext } from '../../context/state';

export default function VerificationTbody({ toggleTransferModal }) {
  const tlContext = useContext(TeamLeadContext);
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {tlContext.verifications.map((verification) => (
        <VerificationRow
        key={verification.request_number}
          request_number={verification.request_number}
          verification_process={verification.vprocess}
          insurance_provider={verification.insurance_provider}
          status={verification.status}
          toggleTransferModal={toggleTransferModal}
        />
      ))}
    </tbody>
  );
}
