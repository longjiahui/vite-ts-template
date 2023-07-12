<template>
    <div>
        <div v-for="(d, i) in datas" :key="i">
            <slot v-bind="d"></slot>
        </div>
    </div>
</template>
<script setup lang="ts" generic="T">
withDefaults(
    defineProps<{
        datas: T[]
    }>(),
    {},
)
</script>
