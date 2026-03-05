import CategoryPage from '@/components/CategoryPage';
import { getCategoryBySlug } from '@/lib/products';

export const metadata = {
  title: 'Tents & Shelters | Khaimah Enterprises',
  description:
    'Canvas tents and shelters — square, marquee, oval, round pavillion, scout, single pole, viking, toura tents and tarpaulines.',
};

export default function TentsSheltersPage() {
  const category = getCategoryBySlug('tents-shelters')!;
  return <CategoryPage category={category} />;
}
