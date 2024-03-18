import { describe, expect, it, vi } from 'vitest';
import Home from './Home.vue';
import { mount } from '@vue/test-utils';

describe('Home', () => {
  it('should mount without error', () => {
    expect(() => mount(Home)).not.toThrowError();
  });
  it('should have title', () => {
    const wrapper = mount(Home)
    expect(wrapper.findAll('[data-testid="title"]').length).toBe(1);
  });
  it('should have card', () => {
    const wrapper = mount(Home)
    expect(wrapper.findAll('[data-testid="card"]').length).toBe(1);
  });
});
