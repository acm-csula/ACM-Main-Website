import React, { useState, useEffect } from "react";

function CarouselAnnouncements() {
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    // this loads the current announcement from localStorage on component mount
    const savedAnnouncement = localStorage.getItem('acm-announcement') || 
      "Fall semester is starting soon! Interested in becoming an ACM member? Join us! More information about us and our Prodev Program coming soon.";
    setAnnouncement(savedAnnouncement);
  }, []);

  const handleClear = () => {
    setAnnouncement("");
  };

  const handleUpdate = () => {
    // this is what saves to localStorage
    localStorage.setItem('acm-announcement', announcement);
    
    // This dispatches a custom event to notify other components
    window.dispatchEvent(new CustomEvent('announcementUpdated', { 
      detail: { announcement } 
    }));
    
    alert("Announcement updated successfully!");
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2>Announcement page</h2>
        <p style={styles.label}>Current announcement:</p>
        <div style={styles.currentAnnouncement}>
          {localStorage.getItem('acm-announcement') || "No announcement set"}
        </div>
        <p style={styles.label}>New announcement:</p>
        <textarea
          style={styles.textarea}
          placeholder="New announcement here..."
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
        />
        <div style={styles.buttons}>
          <button style={styles.clearBtn} onClick={handleClear}>Clear</button>
          <button style={styles.updateBtn} onClick={handleUpdate}>Update</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    paddingTop: "50px",
    textAlign: "center",
  },
  container: {
    width: "80%",
    maxWidth: "600px",
    margin: "0 auto",
  },
  label: {
    textAlign: "left",
    marginBottom: "8px",
    marginTop: "20px",
  },
  currentAnnouncement: {
    width: "100%",
    minHeight: "60px",
    backgroundColor: "#333",
    color: "white",
    border: "1px solid #555",
    borderRadius: "15px",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
    textAlign: "left",
  },
  textarea: {
    width: "100%",
    height: "100px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "15px",
    padding: "10px",
    fontSize: "18px",
    resize: "none",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  clearBtn: {
    width: "120px",
    height: "40px",
    fontSize: "18px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  updateBtn: {
    width: "120px",
    height: "40px",
    fontSize: "18px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "limegreen",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
}; 

export default CarouselAnnouncements;