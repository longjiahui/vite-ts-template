<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <div
            @click="
                $router.replace({
                    name: $const.Routes.default,
                })
            "
            class="p-12 flex flex-col space-y-2 justfiy-center items-center border rounded-lg text-gray-500 cursor-pointer transition-opacity duration-300 hover:opacity-70"
        >
            <div class="font-bold text-4xl">404</div>
            <div>找不到该页面，点击回到首页</div>
        </div>
    </div>
</template>
