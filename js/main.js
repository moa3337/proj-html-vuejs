const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            /* ARRAY CON ELEMENTI DEL MENU */
            menu: {
                links: [
                    'HOME',
                    'PAGES',
                    'PORTFOLIO',
                    'BLOG',
                    'SHOP',
                    'ELEMENTS'
                ],
            },

            showList: false,
        };
    },
    /* METODO PER MOSTRARE IL MENU AL "CLICK" */
    methods: {
        iconMenu() {
            this.showList = !this.showList;
        },
    },
});

app.mount("#app");
