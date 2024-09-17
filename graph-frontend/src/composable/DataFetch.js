import { ref } from 'vue'

export default async function fetchData() {
  const error = ref('') 
  try {
    const response = await fetch('api/data')
    if (!response.ok) {
      throw new Error(
        `Network request failed with status: ${response.status} (${response.statusText})`
      )
    }
    const graphData = await response.json()
    return graphData
  } catch (err) {
    error.value = err.message
    console.error('Failed to fetch data:', error.value)
    return null
  }
}
