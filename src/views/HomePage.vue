<template>
    <div>
        <div>Home {{ test }}</div>
        <TestCom :datas="datas">
            <template #default="d">{{ d.title }}</template>
        </TestCom>
    </div>
</template>

<script setup lang="ts">
const test = ref(1)
const datas = ref([
    {
        title: 'hello',
    },
    {
        title: 'world',
    },
])
</script>
