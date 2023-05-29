<template>
    <div class="flex h-full w-full flex-col items-center justify-center">
        <div
            class="justfiy-center flex cursor-pointer flex-col items-center space-y-2 rounded-lg border p-12 text-gray-500 transition-opacity duration-300 hover:opacity-70"
            @click="
                $router.replace({
                    name: $const.Routes.default,
                })
            "
        >
            <div class="text-4xl font-bold">404</div>
            <div>找不到该页面，点击回到首页</div>
        </div>
    </div>
</template>
