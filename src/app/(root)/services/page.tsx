import Categories from './(repairs)/Categories';
import Header from './(repairs)/Header';
import ServicesList from './(repairs)/ServicesList';

function Page() {
  return (
    <div className="w-3/4 background-light900_dark100 text-light900_dark100 rounded-lg shadow-gray-300 shadow-lg">
      <Header />
      <div className="flex">
        <Categories />
        <ServicesList />
      </div>
    </div>
  );
}

export default Page;
