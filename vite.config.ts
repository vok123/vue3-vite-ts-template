import path from 'path';
import unocss from 'unocss/vite';
import { UserConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import presetMini from '@unocss/preset-mini';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default () => {
  return {
    plugins: [
      vuePlugin(),
      vueJsxPlugin(),
      eslintPlugin({
        cache: false,
        include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx']
      }),
      unocss({
        presets: [presetMini()]
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        directoryAsNamespace: true
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      port: 8099
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import './src/styles/var.scss';`
        }
      }
    }
  } as UserConfig;
};
