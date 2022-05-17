import { RtspRequest, RtspResponse, RtspServer } from 'rtsp-server';
import { ClientWrapper } from './ClientWrapper';
import { Mount } from './Mount';
import { Mounts } from './Mounts';
export interface ClientServerHooksConfig {
    authentication?: (username: string, password: string, req: RtspRequest, res: RtspResponse) => Promise<boolean>;
    checkMount?: (req: RtspRequest) => Promise<boolean | number>;
    clientClose?: (mount: Mount) => Promise<void>;
}
/**
 *
 */
export declare class ClientServer {
    hooks: ClientServerHooksConfig;
    mounts: Mounts;
    rtspPort: number;
    server: RtspServer;
    clients: {
        [sessionId: string]: ClientWrapper;
    };
    /**
     *
     * @param rtspPort
     * @param mounts
     */
    constructor(rtspPort: number, mounts: Mounts, hooks?: ClientServerHooksConfig);
    start(): Promise<void>;
    /**
     *
     * @param req
     * @param res
     */
    optionsRequest(req: RtspRequest, res: RtspResponse): Promise<void>;
    /**
     *
     * @param req
     * @param res
     */
    describeRequest(req: RtspRequest, res: RtspResponse): Promise<void>;
    /**
     *
     * @param req
     * @param res
     */
    setupRequest(req: RtspRequest, res: RtspResponse): Promise<void>;
    /**
     *
     * @param req
     * @param res
     */
    playRequest(req: RtspRequest, res: RtspResponse): Promise<void>;
    /**
     *
     * @param req
     * @param res
     */
    teardownRequest(req: RtspRequest, res: RtspResponse): Promise<void>;
    /**
     *
     * @param clientId
     */
    clientGone(clientId: string): Promise<void>;
    /**
     *
     * @param req
     * @param res
     */
    private checkAuthenticated;
}
