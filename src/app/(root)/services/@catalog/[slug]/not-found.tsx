function NotFound() {
  return (
    <div className="p-2.5 w-full">
      <h4 className="text-center font-semibold text-2xl">Such category is not exist</h4>
      <p className="p-5 mb-2 relative flex justify-center items-center gap-2.5">
        Services for such category not found. Please, try elect another categories.
      </p>
    </div>
  );
}

export default NotFound;
