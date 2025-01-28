import { Link } from "react-router-dom";
import { clearUserInSession } from "../../../utils/user-session/clearUserInSession/clearUserInSession";

import { CgCalendar, CgTime } from "react-icons/cg";
import { IoExitSharp } from "react-icons/io5";
export const Leftbar: React.FC = () => {
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white text-gray-900">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="appointments"
                className="flex items-center p-2  rounded-lg  hover:bg-gray-200 hover:text-purple-900 group"
              >
                <CgTime />
                <span className="ms-3">Agendamentos</span>
              </Link>
            </li>
            <li>
              <Link
                to="calendar"
                className="flex items-center p-2  rounded-lg  hover:bg-gray-100 hover:text-purple-900 group"
              >
                <CgCalendar />
                <span className="ms-3">Calendário</span>
              </Link>
            </li>
            <li onClick={() => clearUserInSession()}>
              <Link
                to="/"
                className="flex items-center p-2  rounded-lg  hover:bg-gray-100 hover:text-purple-900 group"
              >
                <IoExitSharp />
                <span className="ms-3">Sair</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
