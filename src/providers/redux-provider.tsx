import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { createStore } from "src/store/store";

const ReduxProvider = ({ children }: PropsWithChildren) => {
  const store = createStore();

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
