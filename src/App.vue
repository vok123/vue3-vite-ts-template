<template>
  <div class="content">
    <el-config-provider :size="'large'" :locale="{ name: 'zh-cn', el: {} }">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider
  }
});
</script>

<style lang="scss"></style>
