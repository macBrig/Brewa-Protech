import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import LandingBg from "./images/land-1.png";
import Logo from "./images/Asset/Logo/Logo_btn.svg";
import HomePic1 from "./images/Asset/Landing_Image/rent_Pic.jpeg";
import HomePic2 from "./images/Asset/Landing_Image/cleaner.jpeg";
import HomePic3 from "./images/Asset/Landing_Image/lad-landlord.webp";
import HomePic4 from "./images/Asset/Landing_Image/clean.jpeg";
import HomePic5 from "./images/Asset/Landing_Image/jij.jpeg";
import HomePic6 from "./images/Asset/Landing_Image/comfott.jpeg";

function Home() {
  return (
    <div>
      {/* Header */}
      <section
        className="flex flex-col min-h-screen"
        style={{
          width: "100%",
          height: "80vh",
          flexShrink: 0,
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${LandingBg}) lightgray 50% / cover no-repeat`,
        }}
      >
        <header>
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="Company Logo"
                className="w-[74px] h-[74px] rounded-[100px]"
              />
            </Link>

            <div className="hidden sm:flex gap-8 text-black text-2xl font-bold font-['Playfair Display']">
              Home
            </div>

            <div className="px-[41px] py-[9px] bg-zinc-300 bg-opacity-0 justify-center items-center gap-2.5 flex">
              <div className="text-black text-2xl font-bold font-['Playfair Display']">
                Rent
              </div>
            </div>
            <div className="px-[41px] py-[9px] bg-zinc-300 bg-opacity-0 justify-center items-center gap-2.5 flex">
              <div className="text-black text-2xl font-bold font-['Playfair Display']">
                <Link to="/landlord"> Landlord</Link>
              </div>
            </div>
            {/* 
        <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-200">Home</a>
            <a href="#" className="text-white hover:text-gray-200">Rent</a>
            <a href="#" className="text-white hover:text-gray-200">Landlord</a>
        </div> */}

            <div className="px-[41px] py-[9px] bg-zinc-300 bg-opacity-0 justify-center items-center gap-2.5 flex">
              <div className="text-black text-2xl font-bold font-['Playfair Display']">
                Download APP
              </div>
            </div>

            {/* 
        <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-200">Sign Up</a>
            <a href="#" className="text-white hover:text-gray-200">Login</a>
        </div> */}
            <div className="hidden sm:flex gap-4 justify-start items-start gap-[30px] flex">
              <div className="h-12 px-[62px] py-2 bg-stone-200 rounded-[30px] justify-center items-center gap-2.5 flex">
                <div className="text-white text-2xl font-bold font-['Playfair Display']">
                  Sign Up
                </div>
              </div>
              <div className="h-12 px-[62px] py-2 bg-emerald-300 rounded-[30px] justify-center items-center gap-2.5 flex">
                <div className="text-white text-2xl font-bold font-['Playfair Display']">
                  <Link to="/login"> Login</Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="w-[600.30px] h-[300px] text-black text-[57.83px] font-medium font-['Playfair Display']">
            Smart Rental Service
          </div>

          <div className="absolute bottom-0 left-0 right-0 pb-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="hidden md:flex items-center space-x-2">
                <button className="px-4 py-2 rounded-lg text-white bg-transparent border border-white">
                  All
                </button>
                <button className="px-4 py-2 rounded-lg text-white bg-transparent border border-white">
                  Shared Room
                </button>
                <button className="px-4 py-2 rounded-lg text-white bg-transparent border border-white">
                  Whole Apartment
                </button>
              </div>
              <div className="flex-grow max-w-xl bg-white shadow-md rounded-lg flex items-center p-2">
                <input
                  type="text"
                  className="flex-grow px-4 py-2 w-full"
                  placeholder="Name of Area, District, Commute"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </header>
      </section>

      {/* Hero Section */}

      {/* Features Section */}
      {/* Main Content */}
      <main className="flex-grow">
        <section className="flex justify-center items-center ">
          <div className="w-[1440px] h-[639px] relative">
            <div className="w-[1440px] h-[639px] left-0 top-0 absolute bg-stone-200 bg-opacity-10" />
            <div className="w-[357px] h-[515px] left-[160px] top-[29px] absolute flex-col justify-center items-center inline-flex">
              <img
                className="w-[357px] h-[515px] rounded-[40px]"
                src={HomePic1}
              />
            </div>
            <img
              className="w-[357px] h-[515px] left-[541px] top-[27px] absolute rounded-[40px]"
              src={HomePic2}
            />
            <div className="w-[357px] h-[515px] left-[923px] top-[29px] absolute flex-col justify-center items-center inline-flex">
              <img
                className="w-[357px] h-[515px] rounded-[40px]"
                src={HomePic3}
              />
            </div>
            <div className="w-[345px] h-[86px] p-2.5 left-[579px] top-[527px] absolute border flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-center flex">
                <div className="flex-col justify-start items-center flex">
                  <div className="text-left text-black text-[32px] font-extrabold font-['Playfair Display']">
                    House Keeping
                  </div>
                  <div className="text-center text-black font-normal font-['Georgia']">
                    Cleaning | House Repair
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[258px] h-[86px] p-2.5 left-[210px] top-[529px] absolute border flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-center flex">
                <div className="flex-col justify-start items-center flex">
                  <div className="text-center text-black text-[32px] font-extrabold font-['Playfair Display']">
                    Rental
                  </div>
                  <div className="text-center text-black font-normal font-['Georgia']">
                    Shared | Whole Apartment
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[260px] h-[86px] p-2.5 left-[965px] top-[527px] absolute border flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-center flex">
                <div className="flex-col justify-start items-center flex">
                  <div className="text-center text-black text-[32px] font-extrabold font-['Playfair Display']">
                    Landlord
                  </div>
                  <div className="text-center text-black font-normal font-['Georgia']">
                    House | Apartment to Rent
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <div className="w-[1440px] h-[122px] px-40 py-[9px] bg-stone-200 bg-opacity-10 flex-col justify-start items-center inline-flex">
            <div className="w-[1120px] h-[61px] text-center text-black text-5xl font-extrabold font-['Playfair Display']">
              Full Rental Service
            </div>
            <div className="w-[212px] h-[29px] text-neutral-500 text-[21px] font-normal font-['Georgia']">
              Efficiency Simplified
            </div>
          </div>
        </section>
        <section>
          {/* <div className="w-[1121px] h-[359px] justify-start items-center gap-[188px] inline-flex">
            <img className="w-[391px] h-[359px] shadow" src={HomePic4} />
            <div className="w-[542px] h-[204px] border flex-col justify-start items-start gap-5 inline-flex">
              <div className="w-[211px] h-[87px] text-black text-[57.83px] font-semibold font-['Playfair Display']">
                Clean
              </div>
              <div className="w-[537px] h-[94px] text-neutral-500 text-[21px] font-normal font-['Poppins']">
                Experience our exceptional cleaning services, where we
                meticulously select our personnel, provide reliable tools, and
                follow standardised processes.
              </div>
            </div>
          </div> */}
          <div className="flex justify-center items-center min-h-screen">
            <div className="w-[1121px] h-[359px] flex justify-start items-center gap-[188px]">
              <img className="w-[391px] h-[359px] shadow" src={HomePic4} />
              <div className="w-[542px] h-[204px] border flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-[211px] h-[87px] text-black text-[57.83px] font-semibold font-['Playfair Display']">
                  Clean
                </div>
                <div className="w-[537px] h-[94px] text-neutral-500 text-[21px] font-normal font-['Poppins']">
                  Experience our exceptional cleaning services, where we
                  meticulously select our personnel, provide reliable tools, and
                  follow standardized processes.
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-[1120px] h-[355px] justify-start items-center gap-[133px] inline-flex">
            <div className="flex-col justify-start items-start gap-[45px] inline-flex">
              <div className="w-[319px] h-[72px] text-black text-[57.83px] font-semibold font-['Playfair Display']">
                Convince{" "}
              </div>
              <div className="w-[532px] h-[94px] text-neutral-500 text-[21px] font-normal font-['Poppins']">
                Experience our professional, convenient, and
                transparent all-around home solutions. Let us simplify your
                life, ensuring your home remains a haven of comfort and ease!
              </div>
            </div>
            <img className="w-[455px] h-[355px] shadow" src={HomePic5} />
          </div> */}
          <div className="flex justify-center items-center min-h-screen">
            <div className="w-[1120px] h-[355px] flex justify-start items-center gap-[133px]">
              <div className="flex-col justify-start items-start gap-[45px] flex">
                <div className="w-[319px] h-[72px] text-black text-[57.83px] font-semibold font-['Playfair Display']">
                  Convince{" "}
                </div>
                <div className="w-[532px] h-[94px] text-neutral-500 text-[21px] font-normal font-['Poppins']">
                  Experience our professional, convenient, and
                  transparent all-around home solutions. Let us simplify your
                  life, ensuring your home remains a haven of comfort and ease!
                </div>
              </div>
              <img className="w-[455px] h-[355px] shadow" src={HomePic5} />
            </div>
          </div>

          {/* <div className="w-[1120px] h-[355px] justify-start items-center gap-[133px] inline-flex">
            <img className="w-[455px] h-[355px] border" src={HomePic6} />
            <div className="flex-col justify-start items-start gap-[34px] inline-flex">
              <div className="w-[532px] text-black text-[57.83px] font-semibold font-['Playfair Display']">
                Personalised home{" "}
              </div>
              <div className="w-[532px] h-[94px] text-neutral-500 text-[21px] font-normal font-['Poppins']">
                Unlock Endless Adventures. Stay Informed, Be Inspired, and
                Explore Exclusive Rooms Tailored Just for You.
              </div>
            </div>
          </div> */}
          <div className="flex justify-center items-center min-h-screen">
            <div className="w-[1120px] h-[355px] flex justify-start items-center gap-[133px]">
              <img className="w-[455px] h-[355px] border" src={HomePic6} />
              <div className="flex-col justify-start items-start gap-[34px] flex">
                <div className="w-[532px] text-black text-[57.83px] font-semibold font-['Playfair Display']">
                  Personalised home{" "}
                </div>
                <div className="w-[532px] h-[94px] text-neutral-500 text-[21px] font-normal font-['Poppins']">
                  Unlock Endless Adventures. Stay Informed, Be Inspired, and
                  Explore Exclusive Rooms Tailored Just for You.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-500 text-white p-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex-col justify-start items-center gap-[18px] flex">
            <div className="flex-col justify-start items-center gap-1.5 flex">
              <div className="justify-start items-start gap-3 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="flex-col justify-start items-start gap-[5px] flex">
                    <img
                      className="w-[74px] h-[74px] rounded-[100px]"
                      src={Logo}
                    />
                    <div className="w-[358px] h-[65px] text-white text-sm font-normal font-['Inter']">
                      Embark on seamless adventures with us.
                    </div>
                  </div>
                  <div className="w-40 justify-start items-start gap-[39px] inline-flex">
                    <div className="w-[27.75px] h-[27.75px] relative" />
                    <div className="w-[37px] h-[37px] relative" />
                  </div>
                </div>
                <div className="justify-start items-start gap-[117px] flex">
                  <div className="w-[129px] h-[153px] relative">
                    <div className="w-[84px] left-[1px] top-[39px] absolute text-center text-white text-xs font-medium font-['Poppins']">
                      Privacy Policy
                    </div>
                    <div className="w-24 left-0 top-[63px] absolute text-center text-white text-xs font-medium font-['Poppins']">
                      Data Collection{" "}
                    </div>
                    <div className="w-[49px] left-[1px] top-[87px] absolute text-center text-white text-xs font-medium font-['Poppins']">
                      Cookies
                    </div>
                    <div className="w-[111px] left-[1px] top-[111px] absolute text-center text-white text-xs font-medium font-['Poppins']">
                      Security Measures
                    </div>
                    <div className="w-[102px] left-[1px] top-[135px] absolute text-center text-white text-xs font-medium font-['Poppins']">
                      Third-Party Links
                    </div>
                    <div className="left-[1px] top-0 absolute text-center text-white text-lg font-medium font-['Poppins']">
                      Privacy Terms
                    </div>
                  </div>
                  <div className="w-[203px] h-[105px] relative">
                    <div className="w-[103px] left-[2px] top-[39px] absolute text-center text-white text-xs font-medium font-['Poppins']">
                      Terms of Service
                    </div>
                    <div className="w-[119px] left-[2px] top-[63px] absolute text-center text-white text-xs font-medium font-['Poppins']">
                      Booking Conditions
                    </div>
                    <div className="w-[105px] left-0 top-[87px] absolute text-center text-white text-xs font-medium font-['Poppins']">
                      User Agreement
                    </div>
                    <div className="left-[2px] top-0 absolute text-center text-white text-lg font-medium font-['Poppins']">
                      Terms and Conditions
                    </div>
                  </div>
                  <div className="w-[185px] h-[81px] relative">
                    <div className="w-[70px] left-0 top-[39px] absolute text-center text-white text-xs font-medium font-['Poppins']">
                      Contact Us
                    </div>
                    <div className="w-28 left-0 top-[63px] absolute text-center text-white text-xs font-medium font-['Poppins']">
                      Customer Support{" "}
                    </div>
                    <div className="left-0 top-0 absolute text-center text-white text-lg font-medium font-['Poppins']">
                      Contact Information
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1111px] h-[0px] border border-white"></div>
            </div>
            <div className="text-center text-white text-base font-normal font-['Inter']">
              © 2024 Berwa Protech. All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
