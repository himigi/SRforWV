import { Client } from './lib/Client';
import { ClientServer, ClientServerHooksConfig } from './lib/ClientServer';
import { ClientWrapper } from './lib/ClientWrapper';
import { Mount } from './lib/Mount';
import { Mounts } from './lib/Mounts';
import { PublishServer, PublishServerHooksConfig } from './lib/PublishServer';
import { RtpUdp } from './lib/RtpUdp';
export interface RtspServerConfig {
    clientPort: number;
    rtpPortCount: number;
    rtpPortStart: number;
    serverPort: number;
    publishServerHooks?: PublishServerHooksConfig;
    clientServerHooks?: ClientServerHooksConfig;
}
export default class RtspServer {
    ClientServer: ClientServer;
    Mounts: Mounts;
    PublishServer: PublishServer;
    constructor(config: RtspServerConfig);
    start(): Promise<void>;
}
export { Client, ClientServerHooksConfig, ClientWrapper, Mount, Mounts, PublishServer, PublishServerHooksConfig, RtpUdp };
