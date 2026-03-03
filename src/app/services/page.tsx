import Categories from './(repairs)/Categories';
import Header from './(repairs)/Header';
import ServicesList from './(repairs)/ServicesList';

function Page() {
  return (
    <div className="w-3/4 bg-box-background rounded-lg shadow-for-box">
      <Header />
      <div className="flex">
        <Categories />
        <ServicesList />
      </div>
    </div>
  );
}

export default Page;
