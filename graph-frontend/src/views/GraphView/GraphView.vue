<template>
    <section>
        <div class="graph">
            <div class="graph-area">
                <svg ref="hierarchyGraph"></svg>
                <div v-if="error" class="error">{{ error }}</div>
            </div>
        </div>
        <div>
            <BaseModal v-if="isModalOpen" :data="selectedNode" @close="closeModal">
            </BaseModal>
        </div>
    </section>
</template>

<script setup>
import { useGraph } from '../../composable/useGraphView.js';
import BaseModal from '@/components/UI/modal.vue'
import { ref, computed } from 'vue';

// is Modal visible
const isModalOpen = ref(false);

const { hierarchyGraph, error, nodeData, closeModal } = useGraph(isModalOpen);

const selectedNode = computed(() => {
    return nodeData.value;
});

</script>

<style lang="css" scoped>
.graph-container {
    width: 100%;
    height: 100vh;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
}

svg {
    width: 100%;
    height: auto;
    min-width: 1000px;
}

.error {
    color: var(--error-color);
    font-size: 2rem;
    padding: 16px 0;
    text-align: center;
}
</style>