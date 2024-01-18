import React, { useState } from "react";
import dish from "../images/dish.jpg";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

type loginProps = {
  setLoginModal: any;
};

const Login = (props: loginProps) => {

  const [phone, setPhone] = useState('');

  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-end p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform p-10 overflow-hidden h-screen bg-white text-left shadow-xl transition-all sm:w-4/12 sm:max-w-lg">
              {/* cancel icon svg */}
              <div
                className="hover:text-red-700 cursor-pointer"
                onClick={() => props?.setLoginModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </div>
              <div className="flex">
                <div>
                  <h1 className="font-semibold text-3xl mt-3">Login</h1>
                  <h2>
                    or{" "}
                    <span className="text-orange-500 text-sm">
                      {" "}
                      create an account
                    </span>
                  </h2>
                  <hr className="w-8 bg-black h-[2px] mt-3 border-0" />
                </div>
                <img
                  src={dish}
                  className="h-24 w-24 rounded-full ml-20 shadow-sm shadow-black"
                />
              </div>
              
              <PhoneInput 
              inputStyle={{ height: '63px', width: '320px' }}
              containerStyle={{ marginTop: '20px' }}
              placeholder="Phone Number"
              value={phone}
              onChange={() => setPhone(phone)}
              />

              <input
                type="text"
                className="p-5 border border-gray-500 mt-1 w-80"
                placeholder="One Time Password"
              /> 

              <button className="bg-orange-500 p-5 font-semibold text-xs text-white uppercase w-80 mt-4">
                Login
              </button>
              <h2 className="text-sm font-medium mt-2 text-zinc-500">
                By clicking on Login, I accept the Terms & Conditions & Privacy
                Policy
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
