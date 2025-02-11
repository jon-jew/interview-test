"use client"
import { useEffect, useState } from 'react';

const API_URL = 'https://api.unsplash.com/photos';


export default function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}?client_id=${process.env['NEXT_PUBLIC_ACCESS_KEY']}`)
    .then((res) => res.json())
    .then((photoList) => setPhotos(photoList))
  }, []);

  console.log(photos);
  return (
    <div className="image-gallery">
      {photos.map((photo) => 
        <img src={photo.links.download} alt={photo.altDescription} />
      )}
    </div>
  );
}
