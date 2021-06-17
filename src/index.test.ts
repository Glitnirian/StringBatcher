import { StringBatcher } from '.';

test('Batching working all right', async () => {
    const testStr = 'ABCDEFGHIJKLMNOPQ';
    const processStrs: any[] = [];

    const batcher = new StringBatcher({
        batchSize: 3,
        process: async (str) => {
            processStrs.push(str);
        }
    });

    await batcher.process(testStr);

    expect(processStrs[0]).toBe('ABC');
    expect(processStrs[1]).toBe('DEF');
    expect(processStrs[2]).toBe('GHI');
    expect(processStrs[3]).toBe('JKL');
    expect(processStrs[4]).toBe('MNO');
    expect(processStrs[5]).toBe('PQ');
});
