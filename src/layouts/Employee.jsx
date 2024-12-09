import PieChart from "../components/Admin/PieChart";
import EmployeeDetails from "../components/Admin/EmployeeDetails";
import TeamMembers from "../components/Admin/TeamMembers ";
import { employeeDetails } from "../constants";
import BarChart from "../components/Admin/BarChart";
import PageLayout from "../Hoc";
import { useNavigate } from "react-router-dom";
import { Calendar } from "../assets";

const Employee = () => {
  const attendanceData = [88, 12];
  const attendanceColors = ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"];
  const navigate = useNavigate();
  const handleCalendarClick = () => {
    navigate("/Dashboard/calendar");
  };

  return (
    <PageLayout
    rightContent={
      <img
        src={Calendar}
        alt="Calendar"
        className="size-6 cursor-pointer"
        onClick={handleCalendarClick}
      />
    }
    >
      <div className="pb-2"></div>
      <div className="lg:flex items-center w-full rounded gap-6">
        <div className="w-full lg:w-[45%]  lg:pb-0 xs:pb-4">
          <EmployeeDetails employeeDetails={employeeDetails} />
        </div>
        <div className="flex flex-col justify-between gap-4 items-center w-full lg:w-[55%] h-full">
          <div className="lg:flex items-center gap-6 w-full">
            <PieChart data={attendanceData} colors={attendanceColors} />
            <TeamMembers />
          </div>
          <div className="w-full bg-white rounded">
            <BarChart />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Employee;
