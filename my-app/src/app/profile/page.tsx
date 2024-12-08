"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Nav from '../nav';
import Link from 'next/link';

// Define the interface for a seller
interface Seller {
  id: number;
  name: string;
  profilePicture: string;
  products: {
    id: number;
    name: string;
    image: string;
  }[];
}

const ProfilePage = () => {
  // Specify the type of the sellers state
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [selectedSeller, setSelectedSeller] = useState<Seller | null>(null);

  useEffect(() => {
    fetch('/sellers.json')
      .then(response => response.json())
      .then((data: Seller[]) => setSellers(data));
  }, []);

  return (
    <div className="page">
      <Nav></Nav>
      <h1>Seller Profiles</h1>
      <div className="seller-grid">
        {sellers.map((seller: Seller) => (
          <Link href={`/profile/${seller.id}`} key={seller.id}>
            <div className="seller-card">
              <Image src={seller.profilePicture} alt={seller.name} width={150} height={150} />
              <h2>{seller.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;