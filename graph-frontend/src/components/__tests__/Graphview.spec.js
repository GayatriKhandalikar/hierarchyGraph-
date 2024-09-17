import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import GraphView from '@/views/GraphView/GraphView.vue';
import * as useGraphComposable from '@/composables/useGraph'; 

// Mock the composable
vi.mock('@/composables/useGraph', () => ({
  useGraph: vi.fn(() => ({
    hierarchyGraph: { value: null },
    error: { value: 'Test error message' },
    nodeData: { value: [] },
    closeModal: vi.fn(),
  })),
}));

describe('GraphView', () => {
  it('renders without crashing', () => {
    const wrapper = shallowMount(GraphView);
    expect(wrapper.exists()).toBe(true);
  });

  it('should open modal when isModalOpen is true', async () => {
    const wrapper = shallowMount(GraphView);
    await wrapper.vm.$nextTick(); 
    wrapper.vm.isModalOpen = true;
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent({ name: 'BaseModal' }).exists()).toBe(true);
  });

  it('should display error message when error is set', async () => {
    // Create a mock instance for the composable
    const useGraphMock = {
      hierarchyGraph: { value: null },
      error: { value: 'Test error message' },
      nodeData: { value: [] },
      closeModal: vi.fn(),
    };
    vi.mocked(useGraphComposable).useGraph.mockReturnValueOnce(useGraphMock);

    const wrapper = shallowMount(GraphView);

    await wrapper.vm.$nextTick();

    expect(wrapper.find('.error').text()).toContain('Test error message');
  });

});

