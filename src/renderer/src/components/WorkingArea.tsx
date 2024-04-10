// import { useState } from 'react'

import Content from "./Content";

function WorkingArea(): JSX.Element {
  // const [isOpenLeftSidebar, setIsOpenLeftSidebar] = useState(false);

  return (
        <div className="flex bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-.3rem)] pl-[25rem] pr-[25rem] w-full max-w-[100%-20rem] p-4 shadow-xl shadow-blue-gray-900/5 pt-[5rem]">
          <Content/>
        </div>
  );
}

export default WorkingArea
