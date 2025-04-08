import React, { useEffect, useState } from 'react';
import WorkLeadsTask from './WorkLeadsTask';
import CallSection from './CallSection';
import Loader from '../../loader/Loader';

const WorkLeadsLayout = () => {
  const [showCallSection, setShowCallSection] = useState(false);

  const handleFetchCall = () => {
    setShowCallSection(!showCallSection);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-[70vh] bg-primary-200 w-full p-2">
      <WorkLeadsTask onFetchCall={handleFetchCall} />
      {showCallSection && <CallSection />}
    </div>
  );
};

export default WorkLeadsLayout;