export interface Accommodation {
  title: string;
  images: string[];
  rating: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  price: number;
  summary: string;
  description: string;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
  reviews: number;
}
