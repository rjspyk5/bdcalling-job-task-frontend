import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router";

export const Navbar = () => {
  const menu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` hover:text-primarybase ${
              isActive
                ? "relative after:content-[''] after:absolute after:h-[3px] after:w-1/2 after:rounded-lg after:bg-primarybase after:bottom-[-4px] after:left-[25%]"
                : ""
            }`
          }
        >
          {" "}
          Home
        </NavLink>
      </li>
      <li>Shop</li>
      <li>About Us</li>
      <li>Blog</li>
    </>
  );
  return (
    <div className="z-50 fixed top-0 w-full">
      <div className="md:px-[8%]">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex justify-center items-center cursor-pointer space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 39"
              fill="none"
              className="md:w-10 md:h-10 w-7 h-7"
            >
              <path
                d="M19.9062 10.3593C19.9062 15.4076 15.8139 19.5 10.7656 19.5H1.625V10.3593C1.625 5.3111 5.71739 1.21871 10.7656 1.21871C15.8139 1.21871 19.9062 5.3111 19.9062 10.3593Z"
                fill="#749B3F"
              />
              <path
                d="M19.906 28.6407C19.906 23.5925 23.9984 19.5001 29.0466 19.5001H38.1873V28.6407C38.1873 33.6889 34.0949 37.7813 29.0466 37.7813C23.9984 37.7813 19.906 33.6889 19.906 28.6407Z"
                fill="#749B3F"
              />
              <path
                d="M1.625 28.6407C1.625 33.6889 5.71739 37.7813 10.7656 37.7813H19.9062V28.6407C19.9062 23.5925 15.8139 19.5001 10.7656 19.5001C5.71739 19.5001 1.625 23.5925 1.625 28.6407Z"
                fill="#749B3F"
              />
              <path
                d="M38.1873 10.3593C38.1873 5.3111 34.0949 1.21871 29.0466 1.21871H19.906V10.3593C19.906 15.4076 23.9984 19.5 29.0466 19.5C34.0949 19.5 38.1873 15.4076 38.1873 10.3593Z"
                fill="#749B3F"
              />
            </svg>
            <span className="font-bold font-noto-sans md:text-[22px] text-[16px] text-primaryFontColor">
              Fresh Harvests
            </span>
          </Link>

          <ul className=" space-x-16 hidden md:flex">{menu}</ul>
          <div className="flex space-x-5">
            <div className="btn hidden md:inline-flex">Favorites</div>
            <div className="btn">Cart</div>

            {/* Drawer start */}
            <span className="md:hidden">
              {" "}
              <div className="drawer drawer-end ">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4" className="drawer-button btn ">
                    <IoMenu size={30} />
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {menu}
                  </ul>
                </div>
              </div>
            </span>

            {/* Drawer End */}

            <div className="btn hidden md:inline-flex">Sign In</div>
          </div>
        </div>
      </div>
    </div>
  );
};
