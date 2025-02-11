"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

const API_URL = 'https://api.unsplash.com/photos';

interface Photo {
  id: string,
  urls: { small: string },
  alt_description: string,
};

export default function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}?client_id=${process.env['NEXT_PUBLIC_ACCESS_KEY']}`)
      .then((res) => res.json())
      .then((photoList) => {
        setPhotos(photoList);
      });
  }, []);

  return (
    <div className="app">
      <h1>Image Gallery</h1>
      <div className="image-gallery">
        {photos.map((photo: Photo) =>
          <div key={photo.id} className="image-container">
            <Image
              src={photo.urls.small}
              alt={photo.alt_description}
              loading="lazy"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
