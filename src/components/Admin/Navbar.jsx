import { navLinks, menuItem } from "../../constants";
import SimpleDrawer from "./SimpleDrawer "
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
  const iconRef = useRef(null);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target) &&
      !iconRef.current.contains(event.target)
    ) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full px-4 py-2 bg-white lg:h-16 xs:h-24">
      <div className="flex items-center justify-between p-0 m-0">
        <div className="flex items-center [&>*:last-child]:opacity-0">
          {navLinks.map((item, index) => {
            return (
              <div
                key={`${item?.title}-${item?.value}-${index}`}
                className="px-8 h-full relative"
              >
                {item?.title ? (
                  <>
                    <span className="text-grey-200 text-xs font-medium">
                      {item?.title}
                    </span>
                    <h3 className="text-grey-100 text-sm font-bold">
                      {item?.value}
                    </h3>
                  </>
                ) : (
                  <span
                    className="w-[1px] bg-grey-100 h-12 flex"
                    key={`empty-${index}`}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-6 px-4 relative">
          {navLinks.map((item, index) => {
            if (!item?.user) return null;

            return (
              <React.Fragment key={item?.user?.title || index}>
                {item?.user?.notification && (
                  <img
                    src={item?.user?.notification}
                    alt={item?.user?.title}
                    className="size-5"
                    key={`notification-${item?.user?.title}`}
                  />
                )}

                {item?.user?.profile && item?.user?.value && (
                  <button
                    className="bg-info rounded-xl h-10 lg:px-4 xs:px-8 flex items-center gap-3"
                    key={`profile-${item?.user?.value}`}
                  >
                    <span>{item?.user?.value}</span>
                    <img
                      src={item?.user?.profile}
                      alt={item?.user?.title}
                      className="size-5"
                    />
                  </button>
                )}

                {item?.user?.icon && (
                  <img
                    src={item?.user?.icon}
                    alt={item?.user?.title}
                    className="size-2.5 cursor-pointer"
                    key={`icon-${item?.user?.icon}`}
                    ref={iconRef}
                    onClick={toggleDrawer}
                  />
                )}

                {isDrawerOpen && (
                  <SimpleDrawer
                    menuItem={menuItem}
                    ref={drawerRef}
                    id="drawer"
                    position={{ top: "45", right: "10" }}
                    width="w-50"
                    route="true"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;