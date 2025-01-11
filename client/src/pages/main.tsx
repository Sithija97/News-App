import { Outlet } from "react-router-dom";
import { Navbar } from "../molecules";

export const MainTemplate = () => {
  return (
    <>
      <Navbar />
      {/* <main className="mx-12 md:mx-24 lg:mx-52">
        <div className="my-4">
          <Outlet />
        </div>
      </main> */}
      <main className="max-w-[1336px] calc(h-screen-[57px]) m-auto">
        <Outlet />
      </main>
    </>
  );
};
