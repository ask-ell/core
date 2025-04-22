import { wait } from "@_core";
import { UID } from "@_core/ddd";

export const generateRandomUID: () => UID = () =>
  new Date().getTime().toString();

export const fakeWait = (): Promise<void> => wait(0);

export const breakReference = <T>(object: T): T => ({ ...object });
