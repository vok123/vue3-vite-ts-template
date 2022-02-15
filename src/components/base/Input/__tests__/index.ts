import input from '../index.vue';
import { mount } from '@vue/test-utils';
import { defaultGlobal } from '@/__tests__';

describe('input', () => {
  test('input render', async () => {
    const wrapper = mount(input, defaultGlobal);
    expect(wrapper.find('.el-input').exists()).toBeTruthy();
  });
});