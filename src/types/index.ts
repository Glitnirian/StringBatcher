export interface IOptions {
    process: ProcessCallback,
    batchSize: number
}

export type ProcessCallback = (str: string) => Promise<any>;
