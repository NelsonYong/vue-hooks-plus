<template>
  <div>name：{{ loading ? 'loading' : data }}</div>
  <div>
    <input v-model="value">
    <vhp-button style="margin-left: 8px;" @click="run({ desc: value })">Edit</vhp-button>
  </div>
  <br>
  <div> Params: {{ JSON.stringify(params) }} </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRequest } from 'vue-hooks-plus'

  function getUsername(params: { desc: string }): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`vue-hooks-plus ${params.desc}`)
      }, 1000)
    })
  }
  const value = ref('vue-hooks-plus')
  const { data: data, loading, run, params } = useRequest(getUsername, {
    defaultParams: [
      {
        desc: 'nice',
      },
    ],
  })
</script>
