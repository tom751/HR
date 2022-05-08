<template>
  <div class="mb-4">
    <label class="text-gray-800" :for="id">{{ label }}</label>
    <input
      v-bind="$attrs"
      v-on="validationListeners"
      :value="value"
      :id="id"
      :type="type"
      :class="{ 'border-red-400 border-2': !!errorMessage }"
    />
    <p v-if="errorMessage" class="text-red-500 font-medium">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { computed } from 'vue'

interface Props {
  label: string
  id: string
  type?: string
}
const { type = 'text', id } = defineProps<Props>()

const { errorMessage, value, handleChange } = useField(id, undefined, { validateOnValueUpdate: false })

const validationListeners = computed(() => {
  if (!errorMessage.value) {
    return {
      blur: handleChange,
      change: handleChange,
      input: (e: unknown) => handleChange(e, false),
    }
  }

  return {
    blur: handleChange,
    change: handleChange,
    input: handleChange,
  }
})
</script>
