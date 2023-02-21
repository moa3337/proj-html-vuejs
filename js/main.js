const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            menu: [
                'HOME',
                'PAGES',
                'PORTFOLIO',
                'BLOG',
                'SHOP',
                'ELEMENTS'
            ],
            showList: false,
        };
    },
    methods: {
        toggleLIst() {
            this.showList = !this.showList;
        },
    },
});

app.mount("#app");

/*
{
    home: 'HOME',
    page: 'PAGES',
    portf: 'PORTFOLIO',
    blog: 'BLOG',
    shop: 'SHOP',
    page: 'PAGES'
},
*/