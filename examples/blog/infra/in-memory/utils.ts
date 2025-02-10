import { wait } from "@_core";

import { UIDValueType } from "../../domain";

export const generateRandomUID: () => UIDValueType = () => new Date().getTime();

export const fakeWait = () => wait(0);

export const breakReference = <T>(object: T): T => ({ ...object });
