import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from '@/App.vue'
import TheHeader from '@/components/layouts/Header.vue'

describe('App.vue', () => {
  it('renders the main layout correctly', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterView: true // Stub
        }
      }
    })

    // Check if TheHeader component is present
    expect(wrapper.findComponent(TheHeader).exists()).toBe(true)

    // Check if RouterView is rendered
    expect(wrapper.find('router-view-stub').exists()).toBe(true)

    // Check if the main element has the correct class
    const mainElement = wrapper.find('main')
    expect(mainElement.exists()).toBe(true)
    expect(mainElement.classes()).toContain('main')
  })
})
