---
map:
  # 映射到docs的路径
  path: /useCounter
---

# useCounter

管理计数器的 Hook 。

## 代码演示

<demo src="useCounter/demo.vue"
  language="vue"
  title="管理计数器"
  desc="一个简单的例子管理计数器"> </demo>

## API

```typescript
const [current, { inc, dec, set, reset }] = useCounter(initialValue, { min, max })
```

## Result

| 参数    | 说明         | 类型                                                   |
| ------- | ------------ | ------------------------------------------------------ |
| current | 当前值       | `Readonly<Ref<number>>`                                |
| inc     | 加，默认加 1 | `(delta?: number) => void`                             |
| dec     | 减，默认减 1 | `(delta?: number) => void`                             |
| set     | 设置 current | `(value: number` \| `((c: number) => number)) => void` |
| reset   | 重置为默认值 | `() => void`                                           |

## Params

| 参数         | 说明   | 类型     | 默认值 |
| ------------ | ------ | -------- | ------ |
| initialValue | 默认值 | `number` | `0`    |
| min          | 最小值 | `number` | -      |
| max          | 最大值 | `number` | -      |
