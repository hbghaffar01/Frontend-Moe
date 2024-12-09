import { Card } from "@/components/ui/card";

import { employeeDetails } from "../../constants";

const TeamMembers = () => {
  return (
    <div className="w-full h-full">
      <Card>
        {employeeDetails?.teamMembers.map((member) => (
          <div className="w-full p-4 border-b" key={member.name}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="size-10 rounded-full"
                />
                <div className="flex flex-col gap-4">
                  <span className="text-sm text-grey-100 font-semibold">
                    {member.name}
                  </span>
                  <span className="text-sm text-grey-200 font-semibold">
                    {member.role}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src={member.icon}
                  alt={member.name}
                  className="size-6 rounded-full"
                />
                <span className="text-sm font-normal text-grey-100">
                  {member.attendance}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default TeamMembers;
