import { useLocation } from 'react-router-dom';

const PageLayout = ({ children, rightContent }) => { 
  const location = useLocation();
  const routeName = location.pathname.split('/').pop();

  return (
    <div className="bg-primary p-6 pb-3 w-full overflow-x-hidden rounded-tl-2xl overflow-hidden z-0">
      <div className="flex items-center justify-between w-full pb-3">
        <span className="text-grey-100 font-bold">
          {routeName.charAt(0).toUpperCase() + routeName.slice(1)}
        </span>
        {rightContent} 
      </div>
      {children}
    </div>
  );
};

export default PageLayout;