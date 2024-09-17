<template>
    <!-- Teleport the modal to the body element -->
    <Teleport to="body">
        <!-- Backdrop that closes the modal when clicked outside -->
        <div class="backdrop" @click="closeModal"></div>
        <dialog id="base-modal" open>
            <button class="close-button" @click="closeModal">X</button>
            <section>
                <div><strong>Node name: {{ data[0].name }}</strong></div>
                <div><strong>Node description: {{ data[0].description }}</strong></div>
            </section>
        </dialog>
    </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    data: Object,
});

const emit = defineEmits(['close']);

// Method to emit the close event
const closeModal = () => {
    emit('close');
};
</script>

<style scoped>
section {
    padding: 1rem;
}

@media (min-width: 768px) {
    dialog {
        left: calc(50% - 20rem);
        width: 40rem;
    }
}
</style>
