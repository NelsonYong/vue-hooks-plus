<script setup lang="ts">
  import DemoEditor from './DemoEditor.vue'
  // import HomeTeam from './HomeTeam.vue'
  import Icon from './Icon.vue'
  // import Waves from '../Waves/index.vue'
  import Waves from '../Wave.vue'
</script>

<template>
  <div class="home">
    <Icon />

    <section id="hero">
      <Waves />
      <h1 class="tagline">
        <span class="accent">VueHooks</span>
        <br />Plus
      </h1>
      <p class="description"> </p>
      <p class="actions">
        <a class="get-started" href="/docs/hooks/en/guide/" style="position: relative; z-index: 9;">
          Get Started
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
          >
            <path
              d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
            />
          </svg>
        </a>
      </p>
    </section>
    <section id="highlights" class="vt-box-container">
      <div class="vt-box">
        <h2>🛸 Hooks for vue3 </h2>
        <p>
          Contains a comprehensive collection of basic Hooks.
        </p>
      </div>
      <div class="vt-box">
        <h2>🏄🏼‍♂️ Easy to learn and use</h2>
        <p>
          Simple language and easy-to-use features, easy to use, detailed documentation.
        </p>
      </div>
      <div class="vt-box">
        <h2>🎯 TypeScript</h2>
        <p>
          Written in TypeScript with predictable static types.
        </p>
      </div>
      <div class="vt-box">
        <h2>🎪 Interactive demo</h2>
        <p>
          Interactive demo, immersive.
        </p>
      </div>
      <div class="vt-box">
        <h2>🔋 Support SSR</h2>
        <p>
          Friendly support for server-side rendering.
        </p>
      </div>
      <div class="vt-box">
        <h2>🦾 useRequest</h2>
        <p>
          Preferred useRequest, Powerful request middle tier.
        </p>
      </div>
      <div class="vt-box">
        <h2>🤺 Playground</h2>
        <p>
          there's ample scope for one's abilities.
        </p>
      </div>
      <div class="vt-box">
        <h2>🪄 On-demand load</h2>
        <p>
          Take what you want, the package is smaller.
        </p>
      </div>
      <div class="vt-box">
        <h2>🔐 Safe</h2>
        <p>
          Perfect test, safe and reliable.
        </p>
      </div>
    </section>
    <DemoEditor>
      <div class="demo-name">
        Demo.vue
      </div>

      <!-- <div class="language-md !bg-transparent">
        <pre ref="block" class="text-left whitespace-normal font-mono bg-transparent"></pre>
      </div> -->
    </DemoEditor>
    <!-- <HomeTeam /> -->
  </div>
</template>

<style scoped lang="less">
  @import './index.less';

  .demo-name {
    opacity: 0.5;
    text-align: center;
  }

  section {
    padding: 0 42px 32px 42px;
    background: url('/grid.svg');
  }
  #hero {
    padding: 0 32px 32px 32px;
    text-align: center;
    position: relative;
  }
  #team {
    padding: 64px 232px;
  }
  .head {
    width: 1000px;
    display: flex;
    justify-content: center;
  }

  .tagline {
    font-size: 66px;
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: -1.5px;
    max-width: 960px;
    margin: 0px auto;
  }
  .accent {
    font-size: 76px;
  }

  html:not(.dark) .accent,
  .dark .tagline {
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .description {
    max-width: 960px;
    line-height: 1.5;
    // color: var(--vt-c-text-2);
    transition: color 0.5s;
    font-size: 22px;
    margin: 24px auto 40px;
    zoom: 0.6;
  }
  .actions a {
    font-size: 16px;
    display: inline-block;
    background: var(--vhp-getstart-bg);
    border-radius: 20px;
    padding: 8px 18px;
    font-weight: 500;
    transition: background-color 0.5s, color 0.5s;

    // -webkit-background-clip: text;
    // animation: move 2s infinite linear;
  }
  .actions .get-started {
    /* margin-right: 18px; */
    font-size: 16px;
  }
  .actions .icon {
    display: inline;
    position: relative;
    top: -1px;
    margin-left: 2px;
    fill: currentColor;
    transition: transform 0.2s;
  }
  .actions .get-started:hover {
    transition-duration: 0.2s;
  }
  .actions .get-started:hover .icon {
    transform: translateX(2px);
  }
  .actions .get-started,
  .actions .setup {
    color: var(--vt-c-indigo-light);
  }
  .actions .get-started:hover,
  .actions .setup:hover {
    background: var(--vhp-getstart-bg);
  }
  .dark .actions .get-started:hover,
  .dark .actions .setup:hover {
    background: var(--vhp-getstart-bg);
  }
  #special-sponsor {
    border-top: 1px solid var(--vt-c-divider-light);
    border-bottom: 1px solid var(--vt-c-divider-light);
    padding: 12px 24px;
    text-align: center;
  }
  #special-sponsor span {
    color: var(--vt-c-text-2);
    font-weight: 500;
    font-size: 13px;
    vertical-align: middle;
    margin-right: 24px;
  }
  #special-sponsor img {
    display: inline-block;
    vertical-align: middle;
    height: 36px;
    margin-right: 24px;
  }
  .dark #special-sponsor img {
    filter: grayscale(1) invert(1);
  }
  #highlights {
    max-width: 960px;
    margin: 0px auto;
    color: var(--vt-c-text-2);
  }
  #team {
    /* max-width: 960px; */
    color: var(--vt-c-text-2);
  }
  #highlights h2 {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: -0.4px;
    color: var(--vt-c-text-1);
    transition: color 0.5s;
    margin-bottom: 0.75em;
  }
  #highlights p {
    font-weight: 400;
    font-size: 15px;
  }
  #highlights .vt-box {
    background-color: var(--vhp-func-bg);
    margin-top: 16px;
  }

  #sponsors {
    max-width: 900px;
    margin: 0px auto;
  }
  #sponsors h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 1em;
  }
  #sponsors .sponsor-container {
    margin-bottom: 3em;
  }

  @media (max-width: 960px) {
    .tagline {
      font-size: 64px;
      letter-spacing: -0.5px;
    }
    .accent {
      font-size: 74px;
    }
    .description {
      font-size: 18px;
      margin-bottom: 48px;
    }
  }
  @media (max-width: 768px) {
    .tagline {
      font-size: 36px;
      letter-spacing: -0.5px;
    }
    .accent {
      font-size: 48px;
    }
  }
  @media (max-width: 576px) {
    #hero {
      padding: 8px 64px 32px 64px;
    }
    .description {
      font-size: 16px;
      margin: 18px 0 30px;
    }
    #special-sponsor img {
      display: block;
      margin: 2px auto 1px;
    }
    #highlights h3 {
      margin-bottom: 0.6em;
    }
    #highlights .vt-box {
      padding: 20px 36px;
      margin-top: 0px;
    }
    #highlights .vt-box:first-child {
      margin-top: 8px;
    }
    .actions a {
      margin: 0.5em 0;
    }
  }
  @media (max-width: 370px) {
    .tagline {
      font-size: 26px;
    }
    .accent {
      font-size: 36px;
    }
  }
  @media (max-width: 768px) {
    .vt-box-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .vt-box-container .vt-box {
      background-color: var(--vt-c-bg-soft);
      transition: color 0.5s, background-color 0.5s;
      padding: 28px 36px;
      border-radius: 8px;
      flex: 0 100%;
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: 500;
    }
  }

  @media (min-width: 769px) {
    .vt-box-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .vt-box-container .vt-box {
      background-color: var(--vt-c-bg-soft);
      transition: color 0.5s, background-color 0.5s;
      padding: 28px 28px;
      border-radius: 8px;
      flex: 0 32%;
      font-size: 14px;
      font-weight: 500;
    }
  }

  /* .vt-box-container {
  	display: flex;
  	flex-wrap: wrap;
  	justify-content: space-between;
  }
  .vt-box-container .vt-box {
  	background-color: var(--vt-c-bg-soft);
  	transition: color 0.5s, background-color 0.5s;
  	padding: 28px 36px;
  	border-radius: 8px;
  	flex: 0 32%;
  	font-size: 14px;
  	font-weight: 500;
  } */

  /* .get-started {
  	color: var(--vt-c-text-code);
  	background: var(--vt-c-black-mute);
  }

  .actions .get-started {
  	margin-right: 18px;
  	background: var(--vt-c-black-mute);
  } */
</style>
