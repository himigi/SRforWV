import { RtspRequest, RtspResponse, RtspServer } from 'rtsp-server';
import { Mount } from './Mount';
import { Mounts } from './Mounts';
export interface PublishServerHooksConfig {
    authentication?: (username: string, password: string, req: RtspRequest, res: RtspResponse) => Promise<boolean>;
    checkMount?: (req: RtspRequest) => Promise<boolean>;
    mountNowEmpty?: (mount: Mount) => Promise<void>;
}
/**
 *
 */
export declare class PublishServer {
    hooks: PublishServerHooksConfig;
    mounts: Mounts;
    rtspPort: number;
    server: RtspServer;
    authenticatedHeader?: string;
    /**
     *
     * @param rtspPort
     * @param mounts
     */
    constructor(rtspPort: number, mounts: Mounts, hooks?: PublishServerHooksConfig);
    /**
     *
     */
    start(): Promise<void>;
    /**
     *
     * @param req
     * @param res
     */
    optionsRequest(req: RtspRequest, res: RtspResponse): void;
    /**
     *
     * @param req
     * @param res
     */
    announceRequest(req: RtspRequest, res: RtspResponse): Promise<void>;
    /**
     *
     * @param req
     * @param res
     */
    setupRequest(req: RtspRequest, res: RtspResponse): void;
    /**
     *
     * @param req
     * @param res
     */
    recordRequest(req: RtspRequest, res: RtspResponse): Promise<void>;
    /**
     *
     * @param req
     * @param res
     */
    teardownRequest(req: RtspRequest, res: RtspResponse): void;
    /**
     *
     * @param req
     * @param res
     */
    private checkAuthenticated;
}
