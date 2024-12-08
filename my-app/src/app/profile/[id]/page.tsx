"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Nav from '../../nav';
import SellerProfileDetails from '../../SellerProfileDetails';

interface ISeller {
  id: number;
  // Add other properties that sellers might have
}



const SellerProfile = () => {
  const params = useParams();
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    
    fetch('/sellers.json')
      .then(response => response.json())
      .then(data => {
        const foundSeller = data.find((s: ISeller) => s.id === parseInt(params.id as string));
        setSeller(foundSeller);
      });
  }, [params.id]);

  if (!seller) {
    return (
      <div className="page">
        <Nav />
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="page">
      <Nav />
      <SellerProfileDetails seller={seller} />
    </div>
  );
};

export default SellerProfile;