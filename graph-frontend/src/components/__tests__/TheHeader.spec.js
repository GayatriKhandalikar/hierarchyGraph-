import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Header from '@/components/layouts/TheHeader.vue';

describe('Header.vue', () => {
  it('renders the header with correct text', () => {
    const wrapper = mount(Header);

    
    const headerText = wrapper.find('h1').text();
    expect(headerText).toBe('Hierarchy graph');
  });
});
