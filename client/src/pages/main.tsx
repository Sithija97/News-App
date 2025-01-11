import { Outlet } from "react-router-dom";
import { Navbar } from "../molecules";

export const MainTemplate = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      {/* <main className="mx-12 md:mx-24 lg:mx-52">
        <div className="my-4">
          <Outlet />
        </div>
      </main> */}
      <main className="max-w-[1336px] h-[calc(100vh-57px)] m-auto">
        <Outlet />
      </main>
    </div>
  );
};
