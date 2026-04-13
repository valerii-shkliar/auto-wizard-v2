import { TCategory } from '@/features/services/types';
import CategoryItem from './CategoryItem';
import CategoryCart from './CategoryCart';

function CategoriesList({ categories }: { categories: TCategory[] }) {
  return (
    <div className="min-w-1/3 border border-solid border-light-800">
      <ul className="p-2.5">
        <CategoryCart />
        {categories.map(({ id, title, slug }) => {
          return <CategoryItem key={id} id={id} title={title} slug={slug} />;
        })}
      </ul>
    </div>
  );
}

export default CategoriesList;
