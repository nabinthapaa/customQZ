export function ErrorView({ error }: { error: Error }) {
  return (
    <div role="alert" className="mx-auto container text-center">
      <p className="text-xl leading-30">Something went wrong:</p>
      <pre className="text-red-600 text-4xl font-bold leading-12">
        {error.message}
      </pre>
      <pre className="text-left mt-4">{error.stack}</pre>
    </div>
  );
}
