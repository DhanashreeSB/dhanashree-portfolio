import { inject, injectable } from "inversify";
import { SERVICE_IDENTIFIER } from "../constants/InversifyConstants";
import { NavigationStoreI } from "./NavigationStore";

export interface RootStoreI {
    navigationState: NavigationStoreI;
    clearLoadedState: () => void;
}

@injectable()
export class RootStore implements RootStoreI {
    @inject(SERVICE_IDENTIFIER.NAVIGATION_STATE)
    public navigationState!: NavigationStoreI;
    clearLoadedState() {
        this.navigationState.clear();
    }
}