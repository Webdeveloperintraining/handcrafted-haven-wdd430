import Image from 'next/image';

const SellerProfileDetails = ({ seller }) => {
  return (
    <div className="seller-profile-details">
      <Image src={seller.profilePicture} alt={seller.name} width={300} height={300} />
      <h1>{seller.name}</h1>
      <div className="product-grid">
        {seller.products.map((product : any) => (
          <div key={product.id} className="product-card">
            <Image src={product.image} alt={product.name} width={300} height={300} />
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerProfileDetails;