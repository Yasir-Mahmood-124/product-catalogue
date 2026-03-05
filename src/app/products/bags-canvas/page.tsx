import CategoryPage from '@/components/CategoryPage';
import { getCategoryBySlug } from '@/lib/products';

export const metadata = {
  title: 'Bags & Canvas Accessories | Khaimah Enterprises',
  description:
    'Durable canvas bags and accessories — backpacks, sling bags, waist bags, tote bags, duffle bags, tool bags, punching bags and aprons.',
};

export default function BagsCanvasPage() {
  const category = getCategoryBySlug('bags-canvas')!;
  return <CategoryPage category={category} />;
}
