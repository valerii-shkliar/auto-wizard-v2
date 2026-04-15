import { Skeleton } from '@/components/ui/skeleton';

function LoadingCatalog() {
  return (
    <div className="flex w-full flex-col gap-2.5 p-2.5">
      {Array.from({ length: 7 }).map((_, index) => (
        <div className="flex gap-2.5 p-2.5 w-full " key={index}>
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-4/10" />
          <Skeleton className="h-6 w-14 ml-auto" />
        </div>
      ))}
    </div>
  );
}
export default LoadingCatalog;
