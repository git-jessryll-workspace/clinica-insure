import { useState } from "react";
import SectionHead from "./SectionHead";
import TransferModal from "./TransferModal";
import VerificationTbody from "./VerificationTbody";
import VerificationThead from "./VerificationThead";
import Head from "next/head";

const TeamLeadDashboard = () => {
  const [open, setOpen] = useState(false);
  const toggleTransferModal = () => setOpen(!open);
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-16 px-8">
        <SectionHead />
        <TransferModal toggleTransferModal={toggleTransferModal} open={open} />
        {/* <div className="min-h-full min-w-full max-w-auto"> */}
          <VerificationThead />
          <VerificationTbody toggleTransferModal={toggleTransferModal} />
        {/* </div> */}
      </div>
    </>
  );
};

export default TeamLeadDashboard;
