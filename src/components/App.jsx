import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TopBar from "./TopBar";

function useRenderCount() {
  const count = React.useRef(1);

  React.useEffect(() => {
    count.current = count.current + 1;
  });

  return count.current;
}

const CountContext = React.createContext();
const CountUpdaterContext = React.createContext();

function CountPrivider({ value, children }) {
  const [count, setCount] = React.useState(value);

  return (
    <CountContext.Provider value={count}>
      <CountUpdaterContext.Provider value={setCount}>
        {children}
      </CountUpdaterContext.Provider>
    </CountContext.Provider>
  );
}

function useCount() {
  const count = React.useContext(CountContext);

  if (count === undefined) {
    throw new Error("useCount must be used whthin CountProvider");
  }

  return count;
}

function useCountUpdater() {
  const setCount = React.useContext(CountUpdaterContext);

  if (setCount === undefined) {
    throw new Error("useCount must be used whthin CountProvider");
  }

  const increment = () => setCount(c => c + 1);

  return { increment, setCount };
}

const Display = React.memo(() => {
  const renderCount = useRenderCount();
  const count = useCount();
  return (
    <h2>
      ({renderCount}) Count: {count}
    </h2>
  );
});

const Updater = React.memo(() => {
  const renderCount = useRenderCount();
  const { increment } = useCountUpdater();

  const handleClick = () => {
    increment();
  };

  return <button onClick={handleClick}>({renderCount}) Increment</button>;
});

export default function App() {
  const renderCount = useRenderCount();
  const [state, setState] = React.useState(Math.floor(Math.random() * 1000));

  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <main>
        <Container maxWidth="md">
          <CountPrivider value={10}>
            <h4>
              ({renderCount}) COUNTER APP: {state}
            </h4>
            <Display />
            <Updater />
            <button
              onClick={() => setState(s => Math.floor(Math.random() * 1000))}
            >
              SetState
            </button>
          </CountPrivider>
        </Container>
      </main>
    </React.Fragment>
  );
}
