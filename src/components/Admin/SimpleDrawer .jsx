import { useNavigate } from "react-router-dom";
import { forwardRef } from "react";

const SimpleDrawer = forwardRef(
  (
    {
      menuItem,
      id,
      position = { top: "10", right: "8" },
      width = "w-48",
      route = false,
      onStatusChange,
    },
    ref
  ) => {
    const navigate = useNavigate();

    const handleItemClick = (title) => {
      if (route) {
        navigate(`${title}`);
      } else {
        onStatusChange?.(title);
      }
    };

    return (
      <div
        ref={ref}
        id={`simple-drawer-${id}`}
        className={`bg-white rounded-lg shadow-lg absolute z-50 border border-gray-200 ${width}`}
        style={{
          top: `${position.top || "60"}px`,
          right: `${position.right || "8"}px`,
          bottom: `${position.bottom || ""}px`,
          left: `${position.left || ""}px`,
        }}
      >
        <ul className="text-left p-2">
          {menuItem.map((item, index) => (
            <li
              key={`${id}-${index}`}
              className={`px-4 py-2 border-b ${
                route
                  ? "hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                  : "cursor-default text-gray-800"
              }`}
              onClick={() => {
                handleItemClick(item.title);
              }}
            >
              <span className="font-medium">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default SimpleDrawer;