import React, { useState } from "react";
import Card from "../component/Card";
import Img1 from "../img/food.jpg";
import Img2 from "../img/food2.jpg";
import Img3 from "../img/food3.jpg";
import Menu from "../component/Menu";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";


const Index = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const toggleFunc = () => {
    if (toggleMenu) {
      setToggleMenu(false);
    } else {
      setToggleMenu(true);
    }
  };

  return (
    <div>
    <div className="text-gray-600 font-[Nunito] grid md:grid-cols-3 border">
      <div className="md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div className="flex justify-between items-center">
            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
              <a href="/" className="hover:text-gray-700">
                Rawzile food
              </a>
            </h1>

            <div
              className="px-4 cursor-pointer md:hidden"
              id="burger"
              onClick={toggleFunc}
            >
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>

          {toggleMenu && <Menu />}
        </nav>
      </div>
      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <div className="flex justify-center md:justify-end">
          <Link
            to="login"
            className="btn text-[#FF6363] border-[#FF6363] md:border-2 hover:bg-[#FF6363] hover:text-white transition ease-out duration-500"
          >
            Login
          </Link>
          <Link
            to="signup"
            className="btn text-[#FF6363] ml-2 border-[#FF6363] md:border-2 hover:bg-[#FF6363] hover:text-white transition ease-out duration-500"
          >
            Signup
          </Link>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Rawzile</h3>
        </header>
        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Lastest Recipes
          </h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            {/* card goes here */}

            <Link to='recipe'>
            <Card  
            
              image={Img1}
              title="Spaghetti"
              description="Recipe By Harrizle"
            />
            </Link>

            <Link>
            <Card
              image={Img2}
              title="Fruit Salad"
              description="Recipe By Harrizle"
            />
            </Link>

            <Link>
            <Card
              image={Img3}
              title="Vegetable Salad"
              description="Recipe By Harrizle"
            />
            </Link>
          </div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular
          </h4>
           
          <div className="flex justify-center">
            <div className="btn bg-[#E2E2D5] text-[#888883] hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out ">
              Load More
            </div>
          </div>
        </div>
      </main>
      </div>
      {/* <Footer /> */}
    </div>
    
  );
};

export default Index;
