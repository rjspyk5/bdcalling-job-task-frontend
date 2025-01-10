import {
  FaTachometerAlt,
  FaUser,
  FaProjectDiagram,
  FaBrain,
  FaGraduationCap,
} from "react-icons/fa";
import { MdLogout, MdTextSnippet, MdKeyboardArrowDown } from "react-icons/md";
import {
  NavLink,
  Outlet,
  redirect,
  useLocation,
  useNavigate,
} from "react-router";

export const DashboardLayout = () => {
  const location = useLocation();
  // const { user, logout } = useAuth();
  const navigate = useNavigate();

  const isContentActive = ["/add"].some((path) =>
    location.pathname.startsWith(path)
  );

  const menu = (
    <>
      {" "}
      <li>
        <NavLink
          to=""
          className={({ isActive }) =>
            `${
              isActive && "bg-[#101034]"
            } flex items-center p-2 hover:bg-[#101034] mx-4 my-2 rounded-md`
          }
          end
        >
          <FaTachometerAlt className="mr-2" />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/details"
          className={({ isActive }) =>
            `${
              isActive && "bg-[#101034]"
            } flex items-center p-2 hover:bg-[#101034] mx-4 my-2 rounded-md`
          }
          end
        >
          <FaUser className="mr-2" />
          Personal Details
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/projects"
          className={({ isActive }) =>
            `${
              isActive && "bg-[#101034]"
            } flex items-center p-2 hover:bg-[#101034] mx-4 my-2 rounded-md`
          }
          end
        >
          <FaProjectDiagram className="mr-2" />
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/skills"
          className={({ isActive }) =>
            `${
              isActive && "bg-[#101034]"
            } flex items-center p-2 hover:bg-[#101034] mx-4 my-2 rounded-md`
          }
          end
        >
          <FaBrain className="mr-2" />
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/education"
          className={({ isActive }) =>
            `${
              isActive && "bg-[#101034]"
            } flex items-center p-2 hover:bg-[#101034] mx-4 my-2 rounded-md`
          }
          end
        >
          <FaGraduationCap className="mr-2" />
          Education
        </NavLink>
      </li>
      <li
        className={`mx-6 group relative ${
          isContentActive ? "bg-[#101034] rounded-md" : ""
        }`}
      >
        <div className="flex items-center">
          Content
          <MdKeyboardArrowDown className="ml-2 group-hover:rotate-180 transition-transform duration-200" />
        </div>
        <ul className="group-hover:block hidden mt-2 space-y-2">
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                `${
                  isActive && "bg-[#101034]"
                } flex items-center p-2 hover:bg-[#101034] my-2 rounded-md`
              }
              end
            >
              <MdTextSnippet className="mr-2" />
              About Text
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );

  return (
    <div className="bg-[#F8F8F8] min-h-screen">
      <div className="flex  ">
        <div className="w-[20%] min-h-[calc(100vh-1rem)] m-2 rounded-md shadow-lg  bg-gradient-to-br from-[#000000] to-[#020138]  fixed flex flex-col">
          <img className="w-10 mx-auto mt-5" src="" alt="Logo" />
          <hr className="h-px my-5 bg-red-500" />
          <ul className="flex-1 text-white font-semibold space-y-2 overflow-auto">
            {menu}
          </ul>
          <button
            onClick={() => {
              // logout();

              navigate("/login");
            }}
            className="btn mb-4 flex items-center mx-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            <MdLogout className="mr-2" />
            Logout
          </button>
        </div>
        <div className="w-[80%] ml-[22%] my-2 mr-2 ">
          <nav className="flex justify-end">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-10 rounded-full">
                <span className="text-xs">UI</span>
              </div>
            </div>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
