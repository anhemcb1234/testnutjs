<template>
<div class="container mx-auto">
    <div class="mx-auto flex items-center justify-center m-10">
        <input class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="..." type="text" v-model="homeData">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="asyncData()">Click</button>
    </div>
    <div v-for="(item, index) in data.articles" :key="index" class="flex m-10">
        <div class="thumb">
            <a :href="item.url"><img :src="item.urlToImage" class="w-50" :alt="item.title"></a>
        </div>
        <div class="title mx-10">
            <h1 class="text-bold">{{item.title}}</h1>
            <p>{{item.description}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'IndexPage',
    data() {
        return {
            homeData: '',
            data: []
        }
    },
    methods: {
        async asyncData() {
            if (this.homeData === '') {
                alert('Khong duoc de rong');
                return
            }
            if (process.client) {}
            this.data = await this.$repositories.home.getData(this.homeData); //await this.$axios.get('/home');
        }
    },
    fetchOnServer: false,
}
</script>
