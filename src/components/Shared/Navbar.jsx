import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdCart } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useAxiosPublic } from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { UserIcon } from "./UserIcon/UserIcon";
import { BsFacebook } from "react-icons/bs";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { loading, user, login } = useAuth();
  const [isLoginForm, setisLoginForm] = useState(true);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.email = data.email.trim();
    data.password = data.password.trim();
    try {
      const result = await axiosPublic.post(
        `/api/v1/${isLoginForm ? "auth/login" : "users/register"}`,
        data
      );

      if (result?.data?.success) {
        if (!isLoginForm) {
          document.getElementById("my_modal_1").close();
          reset();
          setisLoginForm(!isLoginForm);
          Swal.fire({
            icon: "success",
            text: result?.data?.message || "Successfully!",
          });
        }
      }
      if (isLoginForm) {
        login(result?.data?.data?.token);
        document.getElementById("my_modal_1").close();
        reset();
        Swal.fire({
          icon: "success",
          text: result?.data?.message || "Successfully!",
        });
      }
    } catch (error) {
      console.log(error);
      document.getElementById("my_modal_1").close();
      reset();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.message || "Something went wrong!",
      });
    }
  };

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
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            ` hover:text-primarybase ${
              isActive
                ? "relative after:content-[''] after:absolute after:h-[3px] after:w-1/2 after:rounded-lg after:bg-primarybase after:bottom-[-4px] after:left-[25%]"
                : ""
            }`
          }
        >
          {" "}
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            ` hover:text-primarybase ${
              isActive
                ? "relative after:content-[''] after:absolute after:h-[3px] after:w-1/2 after:rounded-lg after:bg-primarybase after:bottom-[-4px] after:left-[25%]"
                : ""
            }`
          }
        >
          {" "}
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            ` hover:text-primarybase ${
              isActive
                ? "relative after:content-[''] after:absolute after:h-[3px] after:w-1/2 after:rounded-lg after:bg-primarybase after:bottom-[-4px] after:left-[25%]"
                : ""
            }`
          }
        >
          {" "}
          Blog
        </NavLink>
      </li>
      <li>
        <button
          className="   outline-1 font-rubik outline-white border bg-secondarybase cursor-pointer text-white px-4 py-2 font-semibold rounded-md  md:hidden inline-flex"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Sign In
        </button>
      </li>
    </>
  );
  return (
    <div
      className={`${
        isScrolled ? "backdrop-blur" : "bg-transparent"
      } z-[100] fixed top-0 w-full py-2`}
    >
      <div className="lg:px-[6%] xl:px-[8%] px-[3%]">
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

          <ul className=" md:space-x-5 lg:space-x-16 hidden md:flex">{menu}</ul>
          <div className="flex md:space-x-5 space-x-2">
            <div className="justify-center text-white items-center hidden md:inline-flex">
              <FaHeart color="white" className="mr-2" />{" "}
              <span className="hidden lg:block">Favorites</span>
            </div>
            <div className="justify-center text-white items-center inline-flex">
              {" "}
              <IoMdCart color="white" className="mr-2" />
              <span className="hidden lg:block">Cart</span>
            </div>

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
                  <label
                    htmlFor="my-drawer-4"
                    className="drawer-button cursor-pointer text-white"
                  >
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
            {/* Modal button Start */}

            {user ? (
              <UserIcon />
            ) : (
              <button
                className="   outline-1 font-rubik outline-white border  border-white cursor-pointer text-white px-4 py-2 font-semibold rounded-md  hidden md:inline-flex"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Sign In
              </button>
            )}

            {/* Sign Up Modal */}
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box mr-4 max-h-[600px] max-w-[478px] md:mr-0  py-6 px-8">
                <form method="dialog">
                  <div className="flex justify-end">
                    <button className="cursor-pointer rounded-full hover:bg-gray-100 p-1">
                      <RxCross2 />
                    </button>
                  </div>
                </form>

                <h3 className="font-semibold text-center font-rubik text-4xl">
                  {isLoginForm ? "Login" : "Registration"}
                </h3>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="card-body  p-0"
                >
                  {!isLoginForm && (
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        {...register("fullName")}
                        type="text"
                        placeholder="Write your full name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  )}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Your email here"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      {...register("password", { minLength: 8 })}
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  {errors?.password && (
                    <span className="text-red-500">
                      Password must have to be eight char
                    </span>
                  )}

                  {isLoginForm && (
                    <div className="flex justify-between items-center">
                      <span className="flex justify-center items-center">
                        <input
                          className="checkbox checkbox-sm border-orange-400 [--chkbg:theme(colors.white)] [--chkfg:orange] "
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <label className="label">
                          <span className="label-text">Remember me</span>
                        </label>
                      </span>
                      <Link className="font-rubik font-medium underline">
                        Forgot Password
                      </Link>
                    </div>
                  )}
                  <div className="form-control ">
                    <button className="btn bg-secondarybase focus:bg-secondarybase hover:bg-orange-600 text-white">
                      Login
                    </button>
                  </div>
                </form>
                <div className="flex items-center my-3  justify-center">
                  <div className="border-t border-1 border-[#D9D9D9] flex-grow"></div>
                  <span className="mx-4 font-rubik font-medium text-[#4A4A52]">
                    Or Login With
                  </span>
                  <div className="border-t border-1 border-[#D9D9D9] flex-grow"></div>
                </div>

                <div className="flex justify-center gap-4">
                  <button className="flex items-center w-full justify-center px-6 py-3 mt-4 transition-colors duration-300 transform border rounded-lg ">
                    <FcGoogle size={30} />
                    <span className="mx-2">Google</span>
                  </button>
                  <button className="flex items-center w-full justify-center px-6 py-3 mt-4 transition-colors duration-300 transform border rounded-lg ">
                    <BsFacebook className="text-blue-400" size={30} />
                    <span className="mx-2">Facebook</span>
                  </button>
                </div>
                <div className="mt-6 text-center ">
                  <button className="text-sm font-rubik font-semibold">
                    {isLoginForm
                      ? "Don’t have account?"
                      : "Already have an account?"}
                    <span
                      onClick={() => setisLoginForm(!isLoginForm)}
                      className="text-secondarybase"
                    >
                      {isLoginForm ? "Registration" : "Login"}
                    </span>
                  </button>
                </div>
              </div>
            </dialog>
            {/* Sign Up Modal End */}
          </div>
        </div>
      </div>
    </div>
  );
};
