import React from 'react';

export default function MapComponent() {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7457082236553!2d-122.41941638468173!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858093eaf3bebf%3A0x3d3f1a9f5e1d15e3!2sSan%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sus!4v1625612411936!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy"
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  );
}