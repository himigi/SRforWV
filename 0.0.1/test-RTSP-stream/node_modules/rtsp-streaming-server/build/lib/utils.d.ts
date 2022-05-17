import { IDebugger } from 'debug';
export interface MountInfo {
    path: string;
    streamId: number;
}
export declare function getMountInfo(uri: string): MountInfo;
export declare function getDebugger(name: string): IDebugger;
