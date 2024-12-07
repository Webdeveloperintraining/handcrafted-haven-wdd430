import Nav from "../nav";

export default function ProfilePage() {
  return (
    
    <div className="page">
      <Nav></Nav>
      <h1>Seller Profile</h1>
      <div className="profile">
        <img className="profile-image" src="https://picsum.photos/150/150?random=1" alt="Profile" />
        <h2>John Doe</h2>
        <p>Handcrafted Haven is a team of skilled craftsmen dedicated to creating unique, handcrafted items for the home.</p>
        <div className="product-grid">
          <img className="product-image" src="https://picsum.photos/300/300?random=2" alt="Product" />
          <img className="product-image" src="https://picsum.photos/300/300?random=3" alt="Product" />
          <img className="product-image" src="https://picsum.photos/300/300?random=4" alt="Product" />
        </div>
      </div>
    </div>

  );
}
