import React from "react";
import { X } from 'lucide-react';

const Login = () => {
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
            <X />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
