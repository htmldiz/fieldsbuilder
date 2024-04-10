// import { useState } from 'react'

function Header(): JSX.Element {
  // const [Header] = useState(window.electron.process.versions)

  return (
    <div className="flex items-center flex-nowrap bg-white shadow rounded-b-lg fixed top-0 left-0 right-0 px-2">
      <div className="flex-1 inline-flex py-2 mr-auto">
        <div className="flex space-x-4 items-center flex-1">
          <a href="#" className=" px-4 py-2.5 text-xs decoration-0 shadow leading-none text-center text-black text-opacity-50">
            <svg width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <desc>
                Created with Pixso.
              </desc>
              <defs>
                <clipPath id="clip4_71717">
                  <rect id="dots-9" width="18.000000" height="18.000000" fill="white" fillOpacity="0"/>
                </clipPath>
              </defs>
              <g clipPath="url(#clip4_71717)">
                <path id="icon" d="M10.68 3.37C10.68 4.3 9.93 5.06 9 5.06C8.06 5.06 7.31 4.3 7.31 3.37C7.31 2.44 8.06 1.68 9 1.68C9.93 1.68 10.68 2.44 10.68 3.37ZM3.37 10.68C4.3 10.68 5.06 9.93 5.06 9C5.06 8.06 4.3 7.31 3.37 7.31C2.44 7.31 1.68 8.06 1.68 9C1.68 9.93 2.44 10.68 3.37 10.68ZM10.68 9C10.68 9.93 9.93 10.68 9 10.68C8.06 10.68 7.31 9.93 7.31 9C7.31 8.06 8.06 7.31 9 7.31C9.93 7.31 10.68 8.06 10.68 9ZM16.31 9C16.31 9.93 15.55 10.68 14.62 10.68C13.69 10.68 12.93 9.93 12.93 9C12.93 8.06 13.69 7.31 14.62 7.31C15.55 7.31 16.31 8.06 16.31 9ZM14.62 5.06C15.55 5.06 16.31 4.3 16.31 3.37C16.31 2.44 15.55 1.68 14.62 1.68C13.69 1.68 12.93 2.44 12.93 3.37C12.93 4.3 13.69 5.06 14.62 5.06ZM5.06 3.37C5.06 4.3 4.3 5.06 3.37 5.06C2.44 5.06 1.68 4.3 1.68 3.37C1.68 2.44 2.44 1.68 3.37 1.68C4.3 1.68 5.06 2.44 5.06 3.37ZM9 16.31C9.93 16.31 10.68 15.55 10.68 14.62C10.68 13.69 9.93 12.93 9 12.93C8.06 12.93 7.31 13.69 7.31 14.62C7.31 15.55 8.06 16.31 9 16.31ZM16.31 14.62C16.31 15.55 15.55 16.31 14.62 16.31C13.69 16.31 12.93 15.55 12.93 14.62C12.93 13.69 13.69 12.93 14.62 12.93C15.55 12.93 16.31 13.69 16.31 14.62ZM3.37 16.31C4.3 16.31 5.06 15.55 5.06 14.62C5.06 13.69 4.3 12.93 3.37 12.93C2.44 12.93 1.68 13.69 1.68 14.62C1.68 15.55 2.44 16.31 3.37 16.31Z" fill="#000000" fillOpacity="0.850000" fillRule="evenodd"/>
              </g>
            </svg>
          </a>
          <a href="#" className="px-4 py-2.5 bg-yellow-300 text-xs leading-none text-black text-opacity-90 rounded-lg">Apply</a>
        </div>
      </div>
      <div className="flex-1 inline-flex py-2">
        <div className="flex space-x-4 items-center justify-end flex-1">
          <a href="#" className=" px-4 py-2.5 text-xs decoration-0 shadow leading-none text-center text-black text-opacity-50">Cancel</a>
          <a href="#" className="px-4 py-2.5 bg-yellow-300 text-xs leading-none text-black text-opacity-90 rounded-lg">Apply</a>
        </div>
      </div>
    </div>
  );
}

export default Header
