import CategoryPage from '@/components/CategoryPage';
import { getCategoryBySlug } from '@/lib/products';

export const metadata = {
  title: 'Historical Clothing & Apparel | Khaimah Enterprises',
  description:
    'Authentic period garments — ruffle shirts, knight shirts, lace shirts, tunics, togas, trousers and gambesons stitched from premium cotton.',
};

export default function HistoricalClothingPage() {
  const category = getCategoryBySlug('historical-clothing')!;
  return <CategoryPage category={category} />;
}
