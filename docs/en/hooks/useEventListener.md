---
map:
  # 映射到docs的路径
  path: /useEventListener
---

# useEventListener

Use addEventListener elegant by Hook.

## Code demonstration

### Default usage

<demo src="useEventListener/demo.vue"
  language="vue"
  title="Default usage"
  desc="Click the button to preview."> </demo>

### Browser-based usage

<demo src="useEventListener/demo1.vue"
  language="vue"
  title=""
  desc="Listen for the browser events"> </demo>

## API

```typescript
useEventListener(
  eventName: string,
  handler: (ev: Event) => void,
  options?: Options,
);
```

## Params

| Property  | Description            | type                  | default |
| --------- | ---------------------- | --------------------- | ------- |
| eventName | Event name             | `string`              | -       |
| handler   | Callback function      | `(ev: Event) => void` | -       |
| options   | More options(optional) | `Options`             | -       |

## Options

| Property | Description | type | default |
| --- | --- | --- | --- |
| target | DOM element or ref | `(() => Element)` \| `Element` \| `React.MutableRefObject<Element>` \| `Window` \| `Document` | `window` |
| capture | Optional, a Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. | `boolean` | `false` |
| once | Optional, A Boolean indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked. | `boolean` | `false` |
| passive | Optional, A Boolean which, if true, indicates that the function specified by listener will never call preventDefault(). If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning. | `boolean` |
