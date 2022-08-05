import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";

export interface NavigationStoreI {
  displayNavigationMenu: boolean;
  showNavigationMenu: () => void;
  hideNavigationMenu: () => void;
  clear: () => void;
}

@injectable()
export class NavigationStore implements NavigationStoreI {
  displayNavigationMenu = false;

  showNavigationMenu = () => {
      this.displayNavigationMenu = true;
  };

  hideNavigationMenu = () => {
    this.displayNavigationMenu = false;
  };

  constructor() {
    makeObservable(this, {
      displayNavigationMenu: observable,
      showNavigationMenu: action,
      hideNavigationMenu: action,
    });
  }

  clear() {
      this.displayNavigationMenu = false;
  }
}
