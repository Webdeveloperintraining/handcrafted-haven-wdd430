import Nav from "./nav";
import Image from "next/image";
export default function LandingPage() {
  return (
    <div className="page">
      <Nav></Nav>
      <main>
        <h1>Welcome to Handcrafted Haven</h1>
        <p>
          We are a team of skilled craftsmen dedicated to creating unique, handcrafted items for the home.
        </p>


        <br></br>

        <div className="product-grid">
          <Image src="https://picsum.photos/300/300?random=1" alt="Product" width={300} height={300} className="product-image" style={{margin: '0 10px'}} />
          <Image src="https://picsum.photos/300/300?random=2" alt="Product" width={300} height={300} className="product-image" style={{margin: '0 10px'}} />
          <Image src="https://picsum.photos/300/300?random=3" alt="Product" width={300} height={300} className="product-image" style={{margin: '0 10px'}} />
        </div>
      </main>
    </div>
  );
}
