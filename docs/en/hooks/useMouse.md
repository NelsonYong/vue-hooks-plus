---
map:
  # 映射到docs的路径
  path: /useMouse
---

# useMouse

Track cursor position

## Code demonstration

### Default Usage

<demo src="useMouse/demo.vue"
  language="vue"
  title="Default Usage"
  desc="Tracking cursor position."> </demo>

### Mouse position relative to the element

<demo src="useMouse/demo1.vue"
  language="vue"
  title="Mouse position relative to the element"
  desc="By passing in the target element, you can get the position of the mouse relative to the element."> </demo>

## API

```typescript
const state: {
  screenX: number,
  screenY: number,
  clientX: number,
  clientY: number,
  pageX: number,
  pageY: number,
  elementX: number,
  elementY: number,
  elementH: number,
  elementW: number,
  elementPosX: number,
  elementPosY: number,
} = useMouse(target?: Target);
```

## Params

| Property | Description        | Type                                          |
| -------- | ------------------ | --------------------------------------------- |
| target   | DOM element or ref | `Element` \| `() => Element` \| `JSX.Element` |

## Result

| Property | Description | Type |
| --- | --- | --- |
| screenX | Position left relative to the top left of the physical screen/monitor | `number` |
| screenY | Position top relative to the top left of the physical screen/monitor | `number` |
| clientX | Position left relative to the upper left edge of the content area | `number` |
| clientY | Position top relative to the upper left edge of the content area | `number` |
| pageX | Position left relative to the top left of the fully rendered content area in the browser | `number` |
| pageY | Position top relative to the top left of the fully rendered content area in the browser | `number` |
| elementX | Position left relative to the upper left edge of the target element | `number` |
| elementY | Position top relative to the upper left edge of the target element | `number` |
| elementH | Target element height | `number` |
| elementW | Target element width | `number` |
| elementPosX | The position of the target element left relative to the top left of the fully rendered content area in the browser | `number` |
| elementPosY | The position of the target element top relative to the top left of the fully rendered content area in the browser | `number` |
