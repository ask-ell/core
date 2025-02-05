import type { Server } from "node:http";

export interface IServerProvider {
  listen: (port: number) => Promise<Server>;
}
