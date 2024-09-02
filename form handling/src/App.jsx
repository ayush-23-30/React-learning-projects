import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-zinc-300 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl text-center font-semibold pt-6 md:text-4xl">
          Form Handling with React Hook Forms
        </h1>

        <div className="flex flex-col items-center justify-center mt-10 gap-4 md:gap-10">
          <Link
            to="/without"
            className="bg-blue-400 h-14 p-2 rounded-full font-semibold w-60 md:w-80 md:text-xl hover:text-white text-center flex items-center justify-center"
          >
            Form without React Hooks
          </Link>
          <Link
            to="/with"
            className="bg-blue-400 h-14 p-2 rounded-full font-semibold w-60 md:w-80 md:text-xl hover:text-white text-center flex items-center justify-center"
          >
            Form with React Hooks
          </Link>
        </div>

        {/* This div centers the form in the middle of the page */}
        <div className="flex flex-col items-center justify-center mt-10 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
