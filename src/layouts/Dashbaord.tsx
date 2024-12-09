import { cardData, tableData } from "@/constants";
import DataTable from "@/components/Admin/Table";
import CardGroup from "@/components/Admin/CardGroup";
import { useLocation } from "react-router-dom";

const Dashboard: React.FC = () => {
  const location = useLocation();
  const routeName = location.pathname.split("/").pop();

  return (
    <div className="bg-primary p-6 pb-3 w-full overflow-x-hidden rounded-tl-2xl overflow-hidden z-0">
      <div className="pb-2">
        <span className="text-grey-100 font-bold">
          {routeName.charAt(0).toUpperCase() + routeName.slice(1)}
        </span>
      </div>
      <div className="flex flex-col gap-5 w-full bg-white rounded-lg py-4 px-8">
        <CardGroup cardData={cardData} />
        <DataTable tableData={tableData} />
      </div>
    </div>
  );
};

export default Dashboard;
