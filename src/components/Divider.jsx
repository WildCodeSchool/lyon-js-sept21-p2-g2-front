import React from 'react';

export default function Divider() {
  return (
    <div className="relative my-6 mx-6 flex justify-center content-center items-center lg:w-4/5">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-english-red" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-2 bg-apricot-pink text-english-red">
          Users Feedback
        </span>
      </div>
    </div>
  );
}
