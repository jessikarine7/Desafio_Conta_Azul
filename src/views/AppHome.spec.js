import { describe, expect, it } from 'vitest';
import AppHome from './AppHome.vue';
import { mount } from '@vue/test-utils';

describe('Home', () => {
  it('should mount without error', () => {
    expect(() => mount(AppHome)).not.toThrowError();
  });
  it('should have title', () => {
    const wrapper = mount(AppHome)
    expect(wrapper.findAll('[data-testid="title"]').length).toBe(1);
  });
  it('should have card', () => {
    const wrapper = mount(AppHome)
    expect(wrapper.findAll('[data-testid="card"]').length).toBe(1);
  });
});
