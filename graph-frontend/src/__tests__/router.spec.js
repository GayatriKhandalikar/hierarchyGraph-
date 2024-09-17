import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect } from 'vitest'
import GraphView from '@/views/GraphView/GraphView.vue'
import App from '@/App.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: GraphView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

describe('Router', () => {
  it('renders GraphView when navigating to /', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    // Check if the GraphView component is rendered
    expect(wrapper.findComponent(GraphView).exists()).toBe(true)
  })
})
