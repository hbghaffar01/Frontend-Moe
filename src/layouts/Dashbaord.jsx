import PageLayout from "../Hoc";
import { cardData, tableData } from "@/constants";
import DataTable from "@/components/Admin/Table.jsx";
import CardGroup from "@/components/Admin/CardGroup.jsx";
import { useNavigate } from "react-router-dom";
import { Calendar } from "../assets";

const Dashboard = () => {
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
      <div className="flex flex-col gap-5 w-full bg-white rounded-lg py-4 px-8">
        <CardGroup cardData={cardData} />
        <DataTable tableData={tableData} />
      </div>
    </PageLayout>
  );
};

export default Dashboard;
