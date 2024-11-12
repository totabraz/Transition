import { useEffect, useState } from "react";
import "./App.css";
import { TransitionCell } from "./components/transitionCell";
import { transitionsMock, TTransition } from "./mocks/transitionMock";

function App() {
  const [transitions, setTransitions] = useState<TTransition[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [valueToCheck, setValueToCheck] = useState("");

  const fetchTransitions = async () => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      if (transitionsMock) {
        resolve(transitionsMock);
      } else {
        reject("Error to fetch transitions");
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchTransitions()
      .then((transitions) => {
        setTransitions(transitions as TTransition[]);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  }, []);

  if (loading) {
    // loading component
    return <div />;
  }

  const getTransitionTable = () => {
    return transitions.map((transition) => {
      const { ID, amount } = transition;
      // const shouldHighlight = checkValues(transition);
      return <TransitionCell key={ID} ID={ID} amount={amount} />;
    });
  };

  const checkValues = (transition: TTransition) => {
    // transition
    // valueToCheck

    let shouldHighlight = false;
    transitions.forEach((trans) => {
      if (!shouldHighlight) {
        const isTheSum =
          transition?.amount + trans?.amount === parseInt(valueToCheck);
        if (isTheSum) {
          shouldHighlight = isTheSum;
        }
      }
    });

    return shouldHighlight;
  };

  return (
    <>
      <section>
        <h1>Transitions History</h1>
        {transitions ? (
          <div>
            <input
              value={valueToCheck}
              placeholder="Value to check combination"
              onChange={(event) => {
                setValueToCheck(event?.target?.value);
              }}
            />
            <ul>{getTransitionTable()}</ul>
            <button onClick={() => {}}>Check Transactions</button>
          </div>
        ) : null}
        {errorMessage ? <p>{errorMessage}</p> : null}
      </section>
    </>
  );
}

export default App;
