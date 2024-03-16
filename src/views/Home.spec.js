import { describe, expect, it, vi } from 'vitest';
import Home from './Home.vue';
import { mount } from '@vue/test-utils';
import * as services from '@/service/index';
import { nextTick } from 'vue';

vi.spyOn(services, 'getWeather').mockReturnValue({ main: { temp: 10 } })

describe('Home', () => {
  it('should mount without error', () => {
    expect(() => mount(Home)).not.toThrowError();
  });

  it('should have three cities elements', async () => {
    const wrapper = mount(Home);

    await nextTick();

    expect(wrapper.findAll('[data-testid="city"]').length).toBe(3);
  });
});
