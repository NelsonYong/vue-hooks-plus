---
map:
  # 映射到docs的路径
  path: /useRequest/
---

# 🚀 useRequest

With a strong ability to manage network requests, Hook has a flying experience <br /> <br />

`useRequest` Through the plug-in organization code, the core code is easy to understand, and can be easily expanded to more advanced functions. Capacity is now available to include

- Automatic/manual request
- Polling
- Debounce
- Throttle
- Refresh on window focus
- Error retry
- Loading delay
- SWR(stale-while-revalidate)
- Caching
- InfiniteScroll
- Fetchs
- Plugins

## Default request

By default, the first parameter of `useRequest` is an asynchronous function, which is automatically executed when the component is initialized. At the same time, it automatically manages the status of `loading`, `data`, `error` of the asynchronous function.

```js
const { data, error, loading } = useRequest(service)
```

<br />

<demo src="./basic/demo/demo.vue"
  language="vue"
  title=""
  desc="The fetch request is sent by default"> </demo>
