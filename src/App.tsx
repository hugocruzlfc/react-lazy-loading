import { Suspense, lazy } from "react";
import { LazyComponent } from "./components";
import "./App.css";

const CodeSplittingComponentA = lazy(
  () => import("./components/CodeSplittingComponentA")
);
const CodeSplittingComponentB = lazy(
  () => import("./components/CodeSplittingComponentB")
);

function App() {
  return (
    <main>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
      <br />
      <hr />
      <br />
      <h1>Code Splitting Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CodeSplittingComponentA />
        <CodeSplittingComponentB />
      </Suspense>
    </main>
  );
}

export default App;
