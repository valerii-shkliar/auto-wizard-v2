'use client';

function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="p-2.5 w-full">
      <h4 className="text-center font-semibold text-2xl">Failed to load services</h4>
      <p className="p-5 mb-2 relative flex justify-center items-center gap-2.5">
        Message: &quot;{error.message}&quot;
      </p>
      <button className="btn-primary m-auto" onClick={reset}>
        Try again...
      </button>
    </div>
  );
}

export default Error;
