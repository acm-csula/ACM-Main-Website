import React, { createContext, useContext, useState } from 'react';

const AnnouncementContext = createContext();

export const useAnnouncement = () => {
  const context = useContext(AnnouncementContext);
  if (!context) {
    throw new Error('useAnnouncement must be used within AnnouncementProvider');
  }
  return context;
};

export const AnnouncementProvider = ({ children }) => {
  const [announcement, setAnnouncement] = useState(
    "Fall semester is starting soon! Interested in becoming an ACM member? Join us! More information about us and our Prodev Program coming soon."
  );

  const updateAnnouncement = (newAnnouncement) => {
    setAnnouncement(newAnnouncement);
  };

  return (
    <AnnouncementContext.Provider value={{ announcement, updateAnnouncement }}>
      {children}
    </AnnouncementContext.Provider>
  );
}; 