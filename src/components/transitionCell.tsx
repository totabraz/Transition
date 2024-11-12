import { TTransition } from "../mocks/transitionMock";
import styles from "./styles.module.scss";

export const TransitionCell = (transition: TTransition) => {
  const { ID, amount } = transition;
  if (ID && amount) {
    return (
      <li className={styles.transitionCell}>
        <div>{ID}</div> <div>{amount}</div>
      </li>
    );
  }
  return null;
};
