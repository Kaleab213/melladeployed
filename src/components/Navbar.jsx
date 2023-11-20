import { useState } from 'react';
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import logoWhite from '../assets/logoWhite.png';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [toggle, setToggle] = useState(false);

  const history = useNavigate();

  const handleMouseEnter = (title) => {
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <nav
        className={`w-full flex py-6 justify-between items-center navbar`}
        // style={{ background: "rgba(0, 0, 0, 0.36)" }}
        // style={{ background: "rgba(0, 0, 0, 0.36)" }}
      >
        <style>
          {`
        .navbar li {
          position: relative;
        }
        
        .navbar .dot {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #F6C90E;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .navbar li:hover .dot {
          opacity: 1;
        }
        
        /* Add animations to the navigation items */
        .navbar li {
          transition: transform 0.3s ease;
        }
        
        .navbar li:hover {
          transform: translateY(-5px);
        }
      `}
        </style>

        <div className="flex items-center justify-between sm:ml-[3rem] ml-[0.5rem]">
          <img
            className="w-[2.5rem] h-[2.5rem] hover:cursor-pointer"
            src={logoWhite}
            onClick={() => history('/')}
          />
        </div>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 navbar">
          <li
            className={`font-poppins font-normal cursor-pointer lgg:text-[25px] text-[15px] text-white hover:text-white mr-10`}
            onClick={() => history('/')}
          >
            <div className="dot"></div>
            <a>Home</a>
          </li>
          <li
            className={`font-poppins font-normal cursor-pointer lgg:text-[25px] text-[15px] text-white hover:text-white mr-10`}
            onClick={() => history('/about')}
          >
            <div className="dot"></div>
            About
          </li>
          <li
            className={`font-poppins font-normal cursor-pointer lgg:text-[25px] text-[15px] text-white hover:text-white mr-10 `}
            onClick={() => history('/contact')}
          >
            <div className="dot"></div>
            Contact
          </li>
          <li className="dot"></li>
        </ul>

        <div className="nav__menu sm:hidden flex flex-1 justify-end items-center mr-10">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[20px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            style={{ backgroundColor: '#fff' }}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              <li
                className={`nav__items font-poppins font-medium cursor-pointer text-[16px] lgg:text-[20px] mb-4`}
                onClick={() => history('/')}
              >
                Home
              </li>
              <li
                className={`nav__items font-poppins font-medium cursor-pointer text-[16px] lgg:text-[20px] mb-4`}
                onClick={() => history('/about')}
              >
                About
              </li>
              <li
                className={`nav__items font-poppins font-medium cursor-pointer text-[16px] lgg:text-[20px] mb-4`}
                onClick={() => history('/contact')}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
