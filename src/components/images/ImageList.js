import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8086/api/images')
      .then(response => {
        console.log(response.data);
        setImages(response.data.images);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  // Add drag event handlers
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.src);
  };

  return (
    <div>
      {images.map(image => (
        <img 
          src={`http://localhost:8086/api/images/${image}`} 
          alt={image} 
          key={image}
          draggable="true"
          onDragStart={handleDragStart}
        />
      ))}
    </div>
  );
}

export default ImageList;
