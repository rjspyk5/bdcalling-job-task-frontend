import { useAuth } from "../../../hooks/useAuth";

export const UserIcon = () => {
  const { user, logout } = useAuth();
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="user"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <button onClick={() => logout()} className="bg-red-500 btn text-white">
          Logout
        </button>
      </ul>
    </div>
  );
};
