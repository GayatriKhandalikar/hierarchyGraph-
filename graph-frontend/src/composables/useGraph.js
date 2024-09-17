import { ref, onMounted } from 'vue'
import * as d3 from 'd3'

export function useGraph(apiUrl, isModalOpen) {
  const hierarchyGraph = ref(null)
  const error = ref(null)
  const nodeData = ref([])

  // Method to close the modal
  const closeModal = () => {
    isModalOpen.value = false
    nodeData.value = []
  }

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl)
      if (!response.ok) {
        // Throw an error
        throw new Error(
          `Network request failed with status: ${response.status} (${response.statusText})`
        )
      }
      const graphData = await response.json()
      return graphData
    } catch (err) {
      // Handle the error and display the message
      error.value = err.message
      console.error('Failed to fetch data:', err.message)
      return null
    }
  }
  const generateHierarchy = (graphData) => {
    const map = {}
    graphData.forEach((item) => (map[item.name] = { ...item, children: [] }))
    const hierarchy = []
    graphData.forEach((item) => {
      if (item.parent) {
        map[item.parent].children.push(map[item.name])
      } else {
        hierarchy.push(map[item.name])
      }
    })
    return hierarchy[0] // Return the hierarchy node
  }
  const buildGraph = async () => {
    try {
      const data = await fetchData()
      if (!data || data.length === 0) {
        error.value = 'There is no data or empty data'
        return
      }
      const root = d3.hierarchy(generateHierarchy(data))

      const width = 1000
      const height = 600
      const margin = { top: 20, right: 90, bottom: 30, left: 90 }

      // Create the SVG container
      const svg = d3
        .select(hierarchyGraph.value)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`)

      // Create a tree layout
      const treeLayout = d3.tree().size([height, width])

      // Apply the layout to the root node
      const treeData = treeLayout(root)

      // Get the nodes and links from the tree
      const nodes = treeData.descendants()
      const links = treeData.links()

      // Normalize the y-position for each node
      nodes.forEach((d) => (d.y = d.depth * 300))

      // Add links between the nodes
      const link = svg
        .selectAll('.link')
        .data(links)
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr(
          'd',
          d3
            .linkHorizontal()
            .x((d) => d.y)
            .y((d) => d.x)
        )
        .attr('fill', 'none')
        .attr('stroke', '#ccc')

      link.transition().duration(500).attr('stroke', '#8d9194')

      // Add nodes to the tree
      const node = svg
        .selectAll('.node')
        .data(nodes)
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', (d) => `translate(${d.y},${d.x})`)
        .on('click', (event, d) => {
          if (d && d.data) {
            nodeData.value.push(d.data)
            isModalOpen.value = true
          }
        })

      // rectangular node
      node
        .append('rect')
        .attr('width', 80)
        .attr('height', 60)
        .attr('x', -80) // Center the square
        .attr('y', -30) // Center the square
        .attr('fill', '#ECF2F7')
        .attr('stroke', 'black')
        .attr('rx', 10)
        .attr('ry', 10)
        .on('mouseover', function () {
          d3.select(this).style('fill', '#b0b7bd')
        })
        .on('mouseout', function () {
          d3.select(this).style('fill', '#ECF2F7')
        })

      // Add labels to the nodes
      node
        .append('text')
        .attr('dy', '0.2em')
        .attr('dx', '-3.5em')
        .attr('text-anchor', 'right')
        .text((d) => d.data.name)
        .style('fill', '#1c1818')
        .attr('font-size', '16px')
    } catch (err) {
      console.error('Unable to render graph:', err)
    }
  }

  onMounted(() => {
    buildGraph()
  })

  return {
    hierarchyGraph,
    error,
    nodeData,
    closeModal
  }
}
