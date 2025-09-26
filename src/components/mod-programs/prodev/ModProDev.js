import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import workshopImage1 from './images/Conference_and_getting_interviews.png';
import workshopImage2 from './images/Behavioral.png';
import workshopImage3 from './images/CS_Roadmap.png';
import workshopImage4 from './images/How_to_manage_Finances.png';
import workshopImage5 from './images/Resume_workshop_LinkedIn.png';

const ModProDev = () => {
  const borderStyle = {
    border: '2px solid rgba(0, 153, 255, 0.4)',
    borderRadius: '8px'
  };

  return (
    <Card className="h-100 modprodev-card" style={{ ...borderStyle, width: '100%' }}>
      <style>{`
        .modprodev-summary { 
          background:#ffffff; 
          padding:15px; 
          margin:0 0 15px; 
          border-radius:8px; 
        }
        .modprodev-card { width:100%; }
        .modprodev-image-grid { 
          display:grid; 
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); 
          gap:14px; 
          padding: 0 4px; 
          margin-top: -5px;
        }
        .modprodev-image-grid img { 
          width:100%; 
          height:auto; 
          border-radius:8px; 
          object-fit:cover; 
          box-shadow:0 2px 6px rgba(0,0,0,0.12); 
          transition:transform .18s ease; 
        }
        .modprodev-image-grid img:hover { 
          transform:translateY(-4px); 
        }
        /* Phones: stack images vertically (one per row, full width) */
        @media (max-width: 650px) {
          .modprodev-image-grid { 
            display:flex; 
            flex-direction:column; 
            gap:18px; 
            padding: 4px 2px 10px; 
            margin: 6px 0 4px; 
          }
          .modprodev-image-grid img { 
            width:100%; 
            max-width:600px; 
            margin: 0 auto; 
          }
        }
        /* Small phones */
        @media (max-width: 480px) { 
          .modprodev-image-grid { 
            gap:16px; /* carried from scroll layout */
          }
          .modprodev-link a { 
            font-size:.95rem; 
            gap:6px; 
          }
          .modprodev-link img { 
            width:24px; 
            height:24px; 
          }
          .modprodev-card .card-body { 
            padding: 0.9rem 0.65rem 1.15rem; 
          }
          .modprodev-summary { 
            padding:12px 10px; 
            margin-top: 0 !important; 
          }
          .modprodev-summary p { 
            font-size: .95rem; 
            line-height: 1.35; 
          }
        }
      `}</style>
      <Card.Body className="px-4 pb-2">
        <Card.Title className="text-center py-2 title" style={{ marginTop: '-20px' }}>
          Pro Dev Workshops
        </Card.Title>
        <div className="modprodev-summary" style={{ marginTop: '-25px' }}>
          <p style={{ textAlign: 'center', margin: 0, color: '#333', lineHeight: 1.4 }}>
            Our Professional Development Workshops are designed to equip you with essential skills for career growth, networking, and personal advancement in the tech industry.
          </p>
        </div>
        <div className="modprodev-image-grid">
          <img src={workshopImage1} alt="Conference and Getting Interviews" style={borderStyle} />
          <img src={workshopImage2} alt="Behavioral Workshop" style={borderStyle} />
            <img src={workshopImage3} alt="CS Roadmap" style={borderStyle} />
          <img src={workshopImage4} alt="How to Manage Finances" style={borderStyle} />
          <img src={workshopImage5} alt="Resume Workshop LinkedIn" style={borderStyle} />
        </div>
        <div className="link modprodev-link text-center">
          <a href="./prodev" className='d-inline-flex align-items-center my-3'>
            <Image src={require("./images/link.png")} alt='Professional Development Link Icon' style={{ width: 30, height: 30, marginRight: 8 }} />
            Learn more about our workshops!
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ModProDev;
