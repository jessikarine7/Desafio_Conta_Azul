import { describe, expect, it } from 'vitest';
import TopMenu from './TopMenu.vue';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';

describe('Home', () => {
  it('should mount without error', () => {
    expect(() => mount(TopMenu)).not.toThrowError();
  });
  it('should have menuTitle', () => {
    const wrapper = mount(TopMenu)
    expect(wrapper.findAll('[data-testid="menuTitle"]').length).toBe(1);
  });
  it('should have menuButton', () => {
    const wrapper = mount(TopMenu)
    expect(wrapper.findAll('[data-testid="menuButton"]').length).toBe(1);
  });
  it('should have menuItems after click on menuMobile', async () => {
    const wrapper = mount(TopMenu)

    wrapper.get('[data-testid="menuMobile"]').trigger('click');

    await nextTick();

    expect(wrapper.get('[data-testid="menuItems"]').isVisible()).toBe(true);
  });  
});
