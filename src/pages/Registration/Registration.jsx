import { useState } from "react";
import { useForm } from "react-hook-form";
export const Registration = () => {
  const [profilePhotoName, setprofilePhotoName] = useState("Profile Photo");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="min-h-screen flex  justify-center items-center">
      <div className="flex gap-20 w-full">
        <div className=" w-1/2">
          <img
            src="https://www.tailwindtap.com/assets/components/form/createaccount/login.svg"
            className="w-full h-full object-contain aspect-[628/516]"
            alt="login img"
          />
        </div>
        <div className="w-1/2 p-10 shadow-2xl">
          <p className="text-primarybase text-center mb-10 font-bold text-3xl input">
            Registration
          </p>
          <form className="w-full" action="">
            <div className="space-y-2 w-full">
              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>

                <input
                  {...register("name")}
                  type="text"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Your Name"
                />
              </div>

              <label className="flex items-center px-3 py-3 mx-auto mt-4 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>

                <h2 className="mx-3 text-gray-400">{profilePhotoName}</h2>

                <input
                  {...register("image")}
                  id="dropzone-file"
                  type="file"
                  onChange={(e) =>
                    e.target.files.length &&
                    setprofilePhotoName(e.target.files[0].name)
                  }
                  className=" opacity-0 w-0 h-0 overflow-hidden"
                />
              </label>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>

                <input
                  {...register("number", { required: true, minLength: 10 })}
                  type="number"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Phone"
                />
              </div>
              {errors.number && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.number?.type === "required" &&
                    "This field is required"}
                  {errors.number?.type === "minLength" &&
                    "Have to be atleast 10"}
                </p>
              )}

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-xs mt-1">
                  This field is required
                </span>
              )}

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                <input
                  {...register("pass", { required: true, minLength: 6 })}
                  type="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>
              {errors.pass && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.pass?.type === "required" && "This field is required"}
                  {errors.pass?.type === "minLength" && "Have to be atleast 6"}
                </p>
              )}

              <div className="mt-4">
                <select
                  placeholder="Select"
                  defaultValue=""
                  className="block w-full py-3 px-8  text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("role", { required: true })}
                >
                  <option value="" disabled hidden>
                    Select User Type
                  </option>
                  <option value="user">User</option>
                  <option value="deliveryHero">Delivery Hero</option>
                </select>
                {errors.user && <span>This field is required</span>}
              </div>

              <div className="mt-6">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="flex items-center my-3  justify-center">
              <div className="border-t border-1 opacity-70 flex-grow"></div>
              <span className="mx-4  ">Or Login With</span>
              <div className="border-t border-1 opacity-70  flex-grow"></div>
            </div>{" "}
            <p className="text-center">Already have an acoount? Login</p>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

// https://readymadeui.com/login-image.webp
