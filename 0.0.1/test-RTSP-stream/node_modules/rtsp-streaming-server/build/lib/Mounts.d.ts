import { Mount } from './Mount';
import { PublishServerHooksConfig } from './PublishServer';
export interface MountsConfig {
    rtpPortCount: number;
    rtpPortStart: number;
}
export declare class Mounts {
    mounts: {
        [path: string]: Mount | undefined;
    };
    rtpPorts: number[];
    constructor(config: MountsConfig);
    getMount(uri: string): Mount | undefined;
    addMount(uri: string, sdp: string, hooks?: PublishServerHooksConfig): Mount;
    getNextRtpPort(): number | undefined;
    returnRtpPortToPool(port: number): void;
    deleteMount(uri: string): boolean;
}
