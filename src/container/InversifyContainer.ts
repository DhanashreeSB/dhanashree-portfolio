import "reflect-metadata";
import { Container } from "inversify";
import { SERVICE_IDENTIFIER } from "../constants/InversifyConstants";
import { NavigationStore, NavigationStoreI } from "../store/NavigationStore";
import { RootStore, RootStoreI } from "../store/RootStore";

const container = new Container();

container.bind<RootStoreI>(SERVICE_IDENTIFIER.STATE_SERVICE).to(RootStore);
container
  .bind<NavigationStoreI>(SERVICE_IDENTIFIER.NAVIGATION_STATE)
  .to(NavigationStore);

export default container;
