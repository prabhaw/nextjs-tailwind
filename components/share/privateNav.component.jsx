import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";
const PrivateNavbar = (props) => {
  const [showDrop, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!showDrop);
  };
  return (
    <>
      <div className='h-16 bg-white flex items-center justify-between shadow'>
        <div className='px-4'>
          <h1 className='text-gray-800 text-xl'>ACME</h1>
        </div>
        <div className='flex items-center px-4'>
          <div>Prabhaw soti</div>
          <div className='ml-2'>
            <OutsideClickHandler
              onOutsideClick={() => {
                setDropdown(false);
              }}
            >
              
              <img
                src='/images/avatar.png'
                alt=''
                onClick={toggleDropdown}
                className='h-10 rounded-full border'
              />
              <div
                className={`${
                  !showDrop ? "hidden" : ""
                } origin-top-right  absolute right-0 sm:mr-4  mt-2 sm:w-48 w-full rounded-md shadow-lg`}
              >
                <div
                  className='py-1 rounded-md bg-white shadow-xs'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'
                >
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Your Profile
                  </a>

                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Settings
                  </a>

                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateNavbar;
