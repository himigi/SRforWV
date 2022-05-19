/// <reference types="node" />
import { Socket } from 'dgram';
import { RtspRequest } from 'rtsp-server';
import { Mount, RtspStream } from './Mount';
export declare class Client {
    open: boolean;
    id: string;
    mount: Mount;
    stream: RtspStream;
    remoteAddress: string;
    remoteRtcpPort: number;
    remoteRtpPort: number;
    rtpServer: Socket;
    rtcpServer: Socket;
    rtpServerPort?: number;
    rtcpServerPort?: number;
    constructor(mount: Mount, req: RtspRequest);
    /**
     *
     * @param req
     */
    setup(req: RtspRequest): Promise<void>;
    /**
     *
     */
    play(): void;
    /**
     *
     */
    close(): Promise<void>;
    /**
     *
     * @param buf
     */
    sendRtp(buf: Buffer): void;
    /**
     *
     * @param buf
     */
    sendRtcp(buf: Buffer): void;
    /**
     *
     */
    private listen;
    private setupServerPorts;
}
