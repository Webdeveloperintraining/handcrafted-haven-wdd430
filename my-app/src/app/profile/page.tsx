"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Nav from '../nav';

const ProfilePage = () => {
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState(null);

  useEffect(() => {
    fetch('/sellers.json')
      .then(response => response.json())
      .then(data => setSellers(data));
  }, []);

  const handleSellerSelect = (seller: any) => {
    setSelectedSeller(seller);
  };

  return (
    <div className="page">
      <Nav></Nav>
      <h1>Seller Profiles</h1>
      <div className="seller-grid">
        {sellers.map((seller) => (
          <div key={seller.id} className="seller-card" onClick={() => handleSellerSelect(seller)}>
            <Image src={seller.profilePicture} alt={seller.name} width={150} height={150} />
            <h2>{seller.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;