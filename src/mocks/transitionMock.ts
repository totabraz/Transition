export type TTransition = {
  ID: number;
  amount: number;
};

const getTransition = (index: number) => {
  const value = index;
  return {
    ID: value,
    amount: value,
  };
};

export const transitionsMock: TTransition[] = [
  getTransition(1),
  getTransition(2),
  getTransition(3),
  getTransition(4),
  getTransition(5),
];
