import React from "react";
import { MobXProviderContext } from "mobx-react";
export function useMobXStores<T>(): any {
  return React.useContext(MobXProviderContext) as T;
}
