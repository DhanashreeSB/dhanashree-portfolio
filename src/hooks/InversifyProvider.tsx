import React from 'react';
import { Container } from 'inversify';
export const InversifyContext = React.createContext<{
  container: Container | null;
}>({ container: null });
export const InversifyProvider = (props: {
  container: any;
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <InversifyContext.Provider value={{ container: props.container }}>
      {props.children}
    </InversifyContext.Provider>
  );
};