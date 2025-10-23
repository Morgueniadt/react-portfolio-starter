// src/components/BackgroundRotator.jsx
import { useEffect, useState } from "react";

const albumImages = [
  "https://i.scdn.co/image/ab67616d0000b273c1d41c1f4c1d9979a3f0686d",
  "https://f4.bcbits.com/img/a0303935498_10.jpg",
  "https://i.scdn.co/image/ab67616d0000b27316e8b93af30718a4f67ffd12",
];

export default function BackgroundRotator() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % albumImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background-rotator"
      style={{
        backgroundImage: `url(${albumImages[currentImageIndex]})`,
      }}
    />
  );
}
