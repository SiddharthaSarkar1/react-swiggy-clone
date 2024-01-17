import React from "react";

type loginProps = {
  setLoginModal: any
}

const Login = (props: loginProps) => {
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
              <div className="hover:text-red-700 cursor-pointer" onClick={() => props?.setLoginModal(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </div>

              <h1 className="font-semibold text-3xl mt-3">Login</h1>
              <h2>or <span className="text-orange-500 text-sm"> create an account</span></h2>

              <input type="text" className="p-5 border border-gray-500 mt-7 w-80" placeholder="Phone Number" />
              <button className="bg-orange-500 p-5 font-semibold text-xs text-white uppercase w-80 mt-4">Login</button>
              <h2 className="text-sm font-medium mt-2 text-zinc-500">By clocking on Login, I accept the Terms & Conditions & Privacy Policy</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
