const Router = [
  {
    text: 'State',
    items: [
      { text: 'useBoolean', link: '/useBoolean/' },
      { text: 'useUrlState', link: '/useUrlState/' },
      { text: 'useFormatResult', link: '/useFormatResult/' },
      { text: 'useDebounce', link: '/useDebounce/' },
      { text: 'useThrottle', link: '/useThrottle/' },
      { text: 'useToggle', link: '/useToggle/' },
      { text: 'useCookieState', link: '/useCookieState/' },
      { text: 'useLocalStorageState', link: '/useLocalStorageState/' },
      { text: 'useSessionStorageState', link: '/useSessionStorageState/' },
      { text: 'useMap', link: '/useMap/' },
      { text: 'useSet', link: '/useSet/' },
      { text: 'useSetState', link: '/useSetState/' },
    ],
  },

  {
    text: 'Effect',
    items: [
      { text: 'useDebounceFn', link: '/useDebounceFn/' },
      { text: 'useThrottleFn', link: '/useThrottleFn/' },
      { text: 'useFetchs', link: '/useFetchs/' },
      { text: 'useLockFn', link: '/useLockFn/' },
      { text: 'useUpdate', link: '/useUpdate/' },
      { text: 'useInterval', link: '/useInterval/' },
      { text: 'useTimeout', link: '/useTimeout/' },
    ],
  },
  {
    text: 'Scene',
    items: [
      { text: 'useCounter', link: '/useCounter/' },
      { text: 'useInfiniteScroll', link: '/useInfiniteScroll/' },
      { text: 'useNetwork', link: '/useNetwork/' },
      { text: 'useVirtualList', link: '/useVirtualList/' },
      { text: 'useWebSocket', link: '/useWebSocket/' },
    ],
  },
  {
    text: 'Dom',
    items: [
      {
        text: 'useEventListener',
        link: '/useEventListener/',
      },
      {
        text: 'useExternal',
        link: '/useExternal/',
      },
      { text: 'useDrop & useDrag', link: '/useDrop/' },
      { text: 'useDarkMode', link: '/useDarkMode/' },
      { text: 'useFavicon', link: '/useFavicon/' },
      { text: 'useFocusWithin', link: '/useFocusWithin/' },
      { text: 'useFullscreen', link: '/useFullscreen/' },
      { text: 'useHover', link: '/useHover/' },
      { text: 'useInViewport', link: '/useInViewport/' },
      { text: 'useKeyPress', link: '/useKeyPress/' },
      { text: 'useMedia', link: '/useMedia/' },
      { text: 'useMouse', link: '/useMouse/' },
      { text: 'useSize', link: '/useSize/' },
      { text: 'useScroll', link: '/useScroll/' },
      { text: 'useTitle', link: '/useTitle/' },
      { text: 'useWinResize', link: '/useWinResize/' },
    ],
  },
  {
    text: 'Advanced',
    items: [
      { text: 'useEventEmitter', link: '/useEventEmitter/' },
      {
        text: 'useAsyncOrder',
        link: '/useAsyncOrder/',
      },
      { text: 'usePreview', link: '/usePreview/' },
    ],
  },
  {
    text: 'Dev',
    items: [
      { text: 'useTrackedEffect', link: '/useTrackedEffect/' },
      { text: 'useWhyDidYouUpdate', link: '/useWhyDidYouUpdate/' },
    ],
  },
]

const useRequestRouter = [
  {
    text: 'useRequest',
    items: [
      {
        text: '快速开始',
        link: '/useRequest/',
      },
      {
        text: '基础用法',
        link: '/useRequest/basic/',
      },

      {
        text: '防抖',
        link: '/useRequest/debounce/',
      },
      {
        text: '节流',
        link: '/useRequest/throttle/',
      },

      {
        text: '轮询',
        link: '/useRequest/polling/',
      },

      {
        text: 'Ready',
        link: '/useRequest/ready/',
      },
      {
        text: '依赖刷新',
        link: '/useRequest/refreshDeps/',
      },

      {
        text: '并行请求',
        link: '/useRequest/fetchs/',
      },
      {
        text: '错误重试',
        link: '/useRequest/retry/',
      },

      {
        text: '缓存 & SWR',
        link: '/useRequest/cache/',
      },
      {
        text: 'loadingDelay',
        link: '/useRequest/loadingDelay/',
      },
      {
        text: '屏幕聚焦重新请求',
        link: '/useRequest/refreshOnWindowFocus/',
      },
      {
        text: '滚动加载 & 分页加载',
        link: '/useRequest/scroll/',
      },
      {
        text: '🌟 开发插件',
        link: '/useRequest/plugin/',
      },
    ],
  },
]

const useRequestRouterEN = [
  {
    text: 'useRequest',
    items: [
      {
        text: 'Quick Start',
        link: '/en/useRequest/',
      },
      {
        text: 'Basic',
        link: '/en/useRequest/basic/',
      },

      {
        text: 'Debounce',
        link: '/en/useRequest/debounce/',
      },
      {
        text: 'Throttle',
        link: '/en/useRequest/throttle/',
      },

      {
        text: 'Polling',
        link: '/en/useRequest/polling/',
      },

      {
        text: 'Ready',
        link: '/en/useRequest/ready/',
      },
      {
        text: 'RefreshDeps',
        link: '/en/useRequest/refreshDeps/',
      },

      {
        text: 'Fetchs',
        link: '/en/useRequest/fetchs/',
      },
      {
        text: 'Retry',
        link: '/en/useRequest/retry/',
      },

      {
        text: 'Cache & SWR',
        link: '/en/useRequest/cache/',
      },
      {
        text: 'LoadingDelay',
        link: '/en/useRequest/loadingDelay/',
      },
      {
        text: 'RefreshOnWindowFocus',
        link: '/en/useRequest/refreshOnWindowFocus/',
      },
      {
        text: 'Scroll',
        link: '/en/useRequest/scroll/',
      },
      {
        text: '🌟 Plugin',
        link: '/en/useRequest/plugin/',
      },
    ],
  },
]

const getUseRequestRouter = (langPrefix = '/') => {
  if (langPrefix === '/') return useRequestRouter
  else return useRequestRouterEN
}

export function getRouterConfig(langPrefix = '/') {
  return [
    {
      text: langPrefix === '/' ? '介绍' : 'Getting started',
      items: [
        {
          text: langPrefix === '/' ? '🪧 入手指南' : '🪧 Guide',
          link: `${langPrefix}guide/`,
        },
        {
          text: langPrefix === '/' ? '📐 UseRequest规范' : '📐 UseRequest specification',
          link: `${langPrefix}useRequest/guide/`,
        },
      ],
    },
    ...getUseRequestRouter(langPrefix),
    ...Router.map(item => ({
      text: item.text,
      items: item.items?.map(i => ({
        text: i.text,
        link: `${langPrefix}${i.link.replace('/', '')}`,
      })),
    })),
  ]
}
