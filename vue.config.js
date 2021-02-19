module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/${process.env.VUE_APP_THEME}/_variabless.scss"; @import "@/assets/${process.env.VUE_APP_THEME}/_ui.scss";`
            },
        }
    },
}
