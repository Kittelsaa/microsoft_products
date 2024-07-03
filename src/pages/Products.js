import React from 'react';
import '../styles/Products.css';
import Word from '../assets/wrd.png';
import PowerPoint from '../assets/pptt.png';
import Excel from '../assets/exc.png';
import OneDrive from '../assets/odv.png';
import Outlook from '../assets/otl.png';
import Teams from '../assets/ttm.png';
import OneNote from '../assets/onn.png';
import Clipchamp from '../assets/cch.png';
import Header from '../components/Header';
import Footer from '../components/Footer';



export default function Products() {
    const products = [
        { name: "Word", description: "Document Editor", image: Word },
        { name: "PowerPoint", description: "Presentation Creator", image: PowerPoint },
        { name: "Excel", description: "Spreadsheet Software", image: Excel },
        { name: "OneDrive", description: "Cloud Storage", image: OneDrive },
        { name: "Outlook", description: "Email Client", image: Outlook },
        { name: "Teams", description: "Collaboration Tool", image: Teams },
        { name: "OneNote", description: "Note-Taking", image: OneNote },
        { name: "Clipchamp", description: "Video Editor", image: Clipchamp }
      ];

      const data = {
        A: ['Access (PC only)', 'Advanced Threat Analytics', 'Archive'],
        B: ['Bookings'],
        C: ['Cloud App Security', 'Clipchamp', 'Copilot'],
        D: ['Defender (Microsoft Defender XDR)', 'Defender for Business', 'Defender for Endpoint', 'Defender for Identify', 'Defender for Individuals', 'Defender for Office 365', 'Designer (Microsoft Designer)'],
        D: ['Edge', 'Editor(Microsoft Editor)', 'Endpoint Manager', 'Enterprise Mobility + Security', 'Excel', 'Excel'],
        F: ['Forms'],
        I: ['Intune'],
        K: ['Kaizala'],
        L: ['Lists(Microsoft Lists)', 'Loop(Microsoft Loop)'],
        M: ['Mesh(Microsoft Mesh)', 'Mobile apps', 'Microsoft 365 app'],
        O: ['OneDrive', 'OneNote', 'Outlook'],
        P: ['Planner', 'Power Apps', 'Power Automate', 'Power BI', 'PowerPoint', 'Project', 'Publisher (PC only)'],
        V: ['Visio', 'Viva (Microsoft Viva)'],
        W: ['Whiteboard', 'Windows', 'Windows 365', 'Word'],
      };



  return (
    <div>
        <Header/>
        <div className="product-container">
      <h1>Microsoft Products</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div className="more-from-microsoft">
      <h2>More from Microsoft</h2>
      <div className="grid">
        {Object.keys(data).map(letter => (
          <div key={letter} className="grid-item">
            <div className="letter-box">{letter}</div>
            <ul>
              {data[letter].map((item, index) => (
                <li key={index}><a href="/">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    </div>

    <Footer/>
    </div>
    
  )
}
