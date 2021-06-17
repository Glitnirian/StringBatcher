import { IOptions, ProcessCallback } from './types';

export class StringBatcher {
    private _process: ProcessCallback;
    private _batchSize: number;

    constructor(options: IOptions) {
        this._process = options.process;
        this._batchSize = options.batchSize;
    }

    public async process(str: string): Promise<void> {
        if (str.length > this._batchSize) {
            while (str.length > 0) {
                const toProcessChunk = str.substr(0, this._batchSize);
                str = str.substr(this._batchSize);
                await this._process(toProcessChunk);
            }
        } else {
            await this._process(str);
        }
    }
}
