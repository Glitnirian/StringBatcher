# StringBatcher

A string processing batcher by chunks decomposition and handling!

Take string => process chunk by chunk!

Can be useful to all kind of things! One example would be to use with a notifier for a platform where messages are limited in size! For example telegram! By using the string batcher! You can create a notif method! That break down the long message! And send it by chunks automatically!

That just an example! It's a simple module for string batch processing!

## Construction

Constructor options:

```ts
export interface IOptions {
    process: ProcessCallback,
    batchSize: number
}

export type ProcessCallback = (str: string) => Promise<any>;
```

## Process string

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
