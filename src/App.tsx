import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router/dom";
import { ErrorView } from "./components/ui/Error";
import { router } from "./routes";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorView}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
