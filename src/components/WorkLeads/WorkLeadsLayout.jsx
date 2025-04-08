import React, { useState } from 'react';
import WorkLeadsHeader from './WorkLeadsHeader';
import WorkLeadsTask from './WorkLeadsTask';
import CallSection from './CallSection';

const WorkLeadsLayout = () => {
  const [showCallSection, setShowCallSection] = useState(false);

  const handleFetchCall = () => {
    setShowCallSection(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <WorkLeadsHeader />
      <WorkLeadsTask onFetchCall={handleFetchCall} />
      {showCallSection && <CallSection />}
    </div>
  );
};

export default WorkLeadsLayout;