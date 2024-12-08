export interface Seller {
    id: number;
    name: string;
    profilePicture: string;
    products: {
      id: number;
      name: string;
      image: string;
    }[];
  }