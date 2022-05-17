import { Client } from './Client';
import { Mounts } from './Mounts';
import { PublishServerHooksConfig } from './PublishServer';
import { RtpUdp } from './RtpUdp';
export declare type RtspStream = {
    id: number;
    mount: Mount;
    clients: {
        [clientId: string]: Client;
    };
    listenerRtp?: RtpUdp;
    listenerRtcp?: RtpUdp;
    rtpStartPort: number;
    rtpEndPort: number;
};
export declare class Mount {
    id: string;
    mounts: Mounts;
    path: string;
    streams: {
        [streamId: number]: RtspStream;
    };
    sdp: string;
    range?: string;
    hooks?: PublishServerHooksConfig;
    constructor(mounts: Mounts, path: string, sdpBody: string, hooks?: PublishServerHooksConfig);
    createStream(uri: string): RtspStream;
    setup(): Promise<void>;
    close(): number[];
    clientLeave(client: Client): void;
}
