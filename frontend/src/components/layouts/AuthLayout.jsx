import graph_img from "../../assets/images/graph-img.png";
import { LuTrendingUpDown } from "react-icons/lu";
import StatusInfoCard from "../common/StatusInfoCard";
import { MdOutlineSavings } from "react-icons/md";
import logo from "../../assets/images/logo.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <img
          src={logo}
          alt="logo"
          className="w-52 mb-4 cursor-pointer"
        />
        {children}
      </div>
      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-no-repeat bg-cover bg-center overflow-hidden p-8">
        <div className="grid grid-cols-2 gap-4 z-20">
          {/* bgColor removed — CharAvatar inside StatusInfoCard handles it */}
          <StatusInfoCard
            icon={<LuTrendingUpDown />}
            label="Track your expenses"
            value="4,30,000+"
            iconColor="text-white"
          />
          <StatusInfoCard
            icon={<MdOutlineSavings />}
            label="Track your savings"
            value="1,20,000+"
            iconColor="text-white"
          />
        </div>
        <img
          src={graph_img}
          alt="graph"
          className="w-64 lg:w-full bottom-10 shadow-lg shadow-violet-200/50 rounded-lg mt-4"
        />
      </div>
    </div>
  );
};

export default AuthLayout;