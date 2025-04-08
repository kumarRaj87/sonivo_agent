import React, { useState } from 'react';

const CallSection = () => {
  const [notes, setNotes] = useState('');
  const [timer, setTimer] = useState('0:00');
  const [status, setStatus] = useState('Ready');

  return (
    <div className="bg-background rounded-2xl p-4 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <span className="text-blue-600 text-2xl">+</span>
          </div>
          <p className="text-center text-gray-800 font-medium">Coderyon</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <p className="text-center text-gray-800 font-medium">+19782xxxxx</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-center text-gray-800 font-medium">NA, NA, NA, NA, NA</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{timer} || {status}</span>
      </div>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Enter call notes..."
        className="w-full p-4 border border-gray-200 rounded-lg mb-4 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex gap-4">
        <button className="flex-1 bg-[#2D4356] text-background py-3 rounded-lg hover:bg-[#2D4356]/90 transition-colors">
          Submit Call
        </button>
        <button className="bg-green-500 text-background px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Make Call
        </button>
      </div>
    </div>
  );
};

export default CallSection;