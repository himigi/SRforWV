/// <reference types="node" />
import { RtspRequest } from 'rtsp-server';
import { Client } from './Client';
import { ClientServer } from './ClientServer';
import { Mount } from './Mount';
export declare class ClientWrapper {
    id: string;
    mount: Mount;
    clientServer: ClientServer;
    clients: {
        [clientId: string]: Client;
    };
    keepaliveTimeout?: NodeJS.Timeout;
    context: any;
    authorizationHeader: string;
    constructor(clientServer: ClientServer, req: RtspRequest);
    /**
     *
     * @param mounts
     * @param req
     */
    addClient(req: RtspRequest): Client;
    /**
     *
     */
    play(): void;
    /**
     *
     */
    close(): void;
    /**
     *
     */
    keepalive(): void;
}
