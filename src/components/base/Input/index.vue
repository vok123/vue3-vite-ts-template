<template>
  <el-input class="m-input">
    <template #append>
      <slot name="append"></slot>
    </template>
  </el-input>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElInput } from 'element-plus';

export default defineComponent({
  name: 'MInput',
  components: {
    ElInput
  }
});
</script>

<style lang="scss" scoped>
.m-input {
}
</style>
