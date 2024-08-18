
import { Link } from "react-router-dom";

 // remaining tasks -- add routing ; add both validations 

function App() {
  return (
    <>
    
      <div className=" flex justify-around  items-center h-screen bg-gray-400">
        <Link to = "/manualform" className="bg-slate-500 font-semibold rounded-lg p-2 uppercase hover:bg-black hover:text-white mt-5">
          Manual Form
        </Link>
        <Link to= '/withyup'  className="bg-slate-500 font-semibold rounded-lg p-2  hover:bg-black hover:text-white uppercase mt-5">
          YUP Form
        </Link>
      </div>
    </>
  );
}

export default App;
