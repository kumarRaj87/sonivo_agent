import React from 'react';

const WorkLeadsTask = ({ onFetchCall }) => {
  return (
    <div className="bg-background rounded-2xl p-4 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-6 flex-shrink-0">
          <svg className="w-full h-full text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h2 className="text-lg font-medium text-gray-800">Testing task for the agent</h2>
      </div>
      <p className="text-gray-600 mb-4">please call all the numbers and mention the output of every call</p>
      <div className="flex justify-end">
        <button 
          onClick={onFetchCall}
          className="bg-blue-500 text-background px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Fetch Call
        </button>
      </div>
    </div>
  );
};

export default WorkLeadsTask;