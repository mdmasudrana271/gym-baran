import Container from "../Container";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-white lg:bg-transparent lg:absolute w-full top-0 left-0">
      <Container>
        <div className="flex justify-between items-center py-8 lg:py-12">
          {/* Logo */}
          <div>
            <a href="#">
              <h1 className="text-lg font-bold text-primaryColor sporting cursor-pointer">
                <span className="bg-primaryColor rounded-lg py-1 px-2 mr-1 text-white">
                  Gym
                </span>{" "}
                baran
              </h1>
            </a>
          </div>

          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row absolute lg:static left-0 py-10 lg:py-0 -mt-5 lg:mt-0 z-10 top-28 w-full lg:w-auto bg-white lg:bg-transparent items-center gap-11 font-poppins  text-black`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Program</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a
                href="#"
                className="py-3 px-9 bg-secondaryColor text-white rounded-lg"
              >
                Login
              </a>
            </li>
          </ul>
          {/* Mobile nav */}
          <div className="ml-auto block lg:hidden cursor-pointer">
            <RxHamburgerMenu className="text-black" size={28} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
