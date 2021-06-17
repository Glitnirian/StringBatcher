# StringBatcher

A string processing batcher by chunks decomposition and handling!

Take string => process chunk by chunk!

## Construction

Constructor options:

```ts
export interface IOptions {
    process: ProcessCallback,
    batchSize: number
}

export type ProcessCallback = (str: string) => Promise<any>;
```

## Process string

```ts
public process(str: string): Promise<void>
```

To process a string we call the method above!

The method will be processed by chunk! Each time executing the processing callback!

## Example

```js
export function getStringBatchNotifier({
    notifSysOptions,
    stringBatcherOptions
}) {
  const notificationSystem = new NotificationSystem(notifSysOptions);

  const stringBatcher = new StringBatcher({
      batchSize: stringBatcherOptions.batchSize || 4000,
      process: async (message) => {
          await notificationSystem.groupChat_sendTo({ message });
      }
  });

  return async function notifier(message: string) {
    await stringBatcher.process(message);
  };
}
```
