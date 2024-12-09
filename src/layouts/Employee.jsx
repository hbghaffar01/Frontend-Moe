import PieChart from "../components/Admin/PieChart";
import EmployeeDetails from "../components/Admin/EmployeeDetails";
import TeamMembers from "../components/Admin/TeamMembers ";
import { employeeDetails } from "../constants";
import { useLocation } from "react-router-dom";
import BarChart from "../components/Admin/BarChart";

const Employee = () => {
  const location = useLocation();
  const routeName = location.pathname.split("/").pop();
  const attendanceData = [88, 12];
  const attendanceColors = ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"];
  return (
    <>
      <div className="bg-primary p-6 pb-3 w-full overflow-x-hidden rounded-tl-2xl overflow-hidden z-0">
        <div className="pb-2">
          <span className="text-grey-100 font-bold">
            {routeName.charAt(0).toUpperCase() + routeName.slice(1)}
          </span>
        </div>
        <div className="flex items-center w-full rounded gap-6">
          <div className="w-[45%]">
            <EmployeeDetails employeeDetails={employeeDetails} />
          </div>
          <div className="flex flex-col justify-between gap-4 items-center w-[55%] h-full">
            <div className="flex items-center gap-6 w-full">
              <PieChart data={attendanceData} colors={attendanceColors} />
              <TeamMembers />
            </div>
            <div className="w-full bg-white rounded">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
