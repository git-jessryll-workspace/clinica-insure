import { useState } from "react";
import SectionHead from "./SectionHead";
import TransferModal from "./TransferModal";
import VerificationTbody from "./VerificationTbody";
import VerificationThead from "./VerificationThead";

const TeamLeadDashboard = () => {
  const [open, setOpen] = useState(false);
  const toggleTransferModal = () => setOpen(!open);
  return (
    <div className="py-16">
      <SectionHead />
      <TransferModal
        toggleTransferModal={toggleTransferModal}
        open={open}
      />
      <div className="min-h-full">
        <div className="flex flex-col">
          <div className="overflow-x-auto -my-2 sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                </table>
                <table className="min-w-full">
                  <VerificationThead />
                  <VerificationTbody 
                    
                    toggleTransferModal={toggleTransferModal}
                  />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamLeadDashboard;
