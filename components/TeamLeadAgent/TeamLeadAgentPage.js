import { useState } from "react";
import AgentPeopleTbody from './AgentPeopleTbody';
import AgentThead from "./AgentThead";

const TeamLeadAgentPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-16">
      <div className="min-h-full">
        <div className="flex flex-col">
          <div className="overflow-x-auto -my-2 sm:-mx-6 lg:-mx-2">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <AgentThead />
                </table>
                <table className="min-w-full">
                  <AgentPeopleTbody/>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamLeadAgentPage;
