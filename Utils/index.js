export const findByTestAtr = (comp, atr) => {
  const wrapper = comp.find(`[data-test='${atr}']`);
  return wrapper;
};
