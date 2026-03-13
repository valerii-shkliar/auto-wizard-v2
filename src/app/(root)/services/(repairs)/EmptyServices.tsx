function EmptyServices() {
  return (
    <>
      <h4 className="p-5 text-center font-semibold">Here may be your order</h4>
      <p className="p-5 pb-0 relative flex justify-center items-center gap-2.5 before:w-10 before:h-10  before:bg-[url('/icons/systems/pointer-services.svg')] before:bg-pattern before:transform before:scale-x-[-1]">
        You can choose needed services, then create appointment
      </p>
      <p className="p-5 pb-0 relative flex justify-center items-center gap-2.5 after:w-10 after:h-10  after:bg-[url('/icons/systems/pointer-services.svg')] after:bg-pattern">
        ...or such create appointment
      </p>
    </>
  );
}

export default EmptyServices;
