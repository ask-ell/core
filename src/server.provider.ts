import type { Server } from 'node:http'

export default interface ServerProvider {
  listen: (port: number) => Promise<Server>
}
