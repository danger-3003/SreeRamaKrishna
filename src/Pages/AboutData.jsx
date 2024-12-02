import React from "react";

const YourComponent = () => {
    const data = `Established in 1960 in Nidadavolu, West Godavari, Sree Rama Krishna Engineering Company was founded by <span style="color: #eb2348; font-weight: 600;">Immani Vishnu Rao garu</span> with a vision to deliver excellence in industrial and construction materials. Over the decades, we have specialized in providing <span style="color: #eb2348; font-weight: 600;">premium Mild Steel (M.S.), Galvanized Iron (G.I.), and Square Pipes</span>, sourced from trusted brands like Jindal, Fortune, and Tata. With branches in <span style="color: #eb2348; font-weight: 600;">Visakhapatnam, Secunderabad,</span> and <span style="color: #eb2348; font-weight: 600;">Rajahmundry</span>, we bring premium pipe solutions closer to your projects and needs.`;

  return (
    <p
      className="text-gray-700 text-lg" // Add additional styles here if needed
      dangerouslySetInnerHTML={{ __html: data }}
    ></p>
  );
};

export default YourComponent;
