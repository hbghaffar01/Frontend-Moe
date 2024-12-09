import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "@/constants";
import { Services } from "@/utils/types";
import { Logout } from "@/assets";

const Sidebar = () => {
  const [currentTime, setCurrentTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <aside className="min-h-screen">
      <div className="w-16 h-full flex items-center justify-between flex-col">
        <div className="flex items-center justify-center py-4">
          <img
            src="/logo.svg"
            alt="Ministry of E-commerce"
            decoding="async"
            className="w-[40px] h-[40px] cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-6 py-12">
            {services.map((item: Services) => (
              <span
                key={item.title}
                className="p-3 hover:bg-gray-100 hover:rounded-xl cursor-pointer"
                onClick={() => handleNavigation(item.route)}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  decoding="async"
                  className="size-5"
                />
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-4">
          <div className="flex items-center justify-center size-10 bg-info text-grey-100 rounded-md">
            <span className="font-semibold text-xs text-center text-wrap leading-3">
              {currentTime}
            </span>
          </div>
          <div className="p-2">
            <img
              src={Logout}
              alt="Logout"
              decoding="async"
              className="size-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
