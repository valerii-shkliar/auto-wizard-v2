'use client';

function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="p-5 w-full">
      <h4 className="mb-2 text-center font-semibold text-2xl">
        Failed to load catalog of services
      </h4>
      <p className=" relative flex justify-center items-center gap-2.5">
        Error Message: &quot;{error.message}&quot;
      </p>
      <p className=" mb-2 relative flex justify-center items-center gap-2.5">
        Error Name: &quot;{error.name}&quot;
      </p>
      <button className="btn-primary m-auto" onClick={reset}>
        Try load again
      </button>
    </div>
  );
}

export default Error;
