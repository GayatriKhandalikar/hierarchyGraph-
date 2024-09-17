import { ref } from 'vue'
import { describe, it, expect, vi } from 'vitest'
import fetchData from '@/composable/DataFetch.js'

// Mock the global fetch function
global.fetch = vi.fn()

describe('fetchData', () => {
  // Test for successful fetch
  it('should return graph data when the fetch is successful', async () => {
    const mockGraphData = { nodes: [], edges: [] }
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockGraphData)
    })

    const error = ref('')
    const result = await fetchData(error)
    expect(result).toEqual(mockGraphData)
    expect(error.value).toBe('')
  })
})
