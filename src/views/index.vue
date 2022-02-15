<template>
  <div class="index">
    <div class="w-500px m-auto mt-24px">
      <m-input v-model="width" placeholder="Width">
        <template #append> px </template>
      </m-input>

      <m-input v-model="height" class="mt-12px" placeholder="Height">
        <template #append> px </template>
      </m-input>

      <div class="flex-auto flex mt-24px">
        <div class="w-1/2 p-8px flex items-center justify-center rounded-md bg-black text-white">Submit</div>
        <div class="ml-24px w-1/2 p-8px flex items-center justify-center rounded-md border border-gray-300">Cancel</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MInput from '@/components/base/Input/index.vue';

export default defineComponent({
  name: 'Index',
  components: {
    MInput
  },
  setup() {
    const width = ref('');
    const height = ref('');

    return { width, height };
  }
});
</script>

<style lang="scss" scoped>
.index {
}
</style>
