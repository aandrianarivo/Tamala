import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
const Nav = () => {
  let Links = [
    { name: "Discorver", link: "/" },
    { name: "About", link: "#services" },
    { name: "Our service", link: "#about" },
    { name: "Contact us", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full">
      <div className="w-full md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* <div className="font-bold text-2xl cursor-pointer flex items-center  text-stone-100">
          Tamalà
        </div> */}

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FaBarsStaggered style={{ color: "white" }} />
        </div>
        <div className="w-full">
          <ul
            className={` w-full flex items-center justify-center text-center  md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 mx-7">
                <a
                  href={link.link}
                  className="text-white-100 hover:text-gray-400 duration-500"
                >                 
                  <strong>{link.name}</strong>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
