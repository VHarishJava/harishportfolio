import React from "react";
import "./Certificate.css";
import javaCertificate from "./../../assets/Java Full Stack Certificate .jpg";
import javaScriptCssCertificate from "./../../assets/javaScriptandCss.jpg";

const certificates = [
  {
    title: "Java Full Stack Developer",
    issuer: "V Cube ISO Certified",
    img: javaCertificate,
    // link: "https://certificates.ccbp.in/intensive/static-website?id=RDGEBMFWIA",
  },
  {
    title: "Developer Program",
    issuer: "Udemy",
    img: javaScriptCssCertificate,
    // link: "https://certificates.ccbp.in/intensive/responsive-website?id=HRUDNRCAVV",
  },
  // {
  //   title: "Build Your Own Dynamic Web Application",
  //   issuer: "NxtWave",
  //   img: "https://media-content.ccbp.in/certificates/share/IGPQCEXFMM_thumbnail.png",
  //   link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=IGPQCEXFMM",
  // },
  // {
  //   title: "Responsive Web Design using Flexbox",
  //   issuer: "NxtWave",
  //   img: "https://media-content.ccbp.in/certificates/share/MZWQIGWXHP_thumbnail.png",
  //   link: "https://certificates.ccbp.in/intensive/flexbox?id=MZWQIGWXHP",
  // },
  // {
  //   title: "React JS",
  //   issuer: "NxtWave",
  //   img: "https://media-content.ccbp.in/certificates/share/MEWXGYKBRG_thumbnail.png",
  //   link: "https://certificates.ccbp.in/intensive/react-js?id=MEWXGYKBRG",
  // },
];

const Certificate = () => {
  return (
    <section className="certificates" id="certification">
      <h2>📜 My Certifications</h2>
      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card fade-in">
            <img src={cert.img} alt={cert.title} />
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
