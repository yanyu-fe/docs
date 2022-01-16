import { defineClientAppEnhance } from "@vuepress/client"
import NpmBadge from "./components/NpmBadge.vue"
export default defineClientAppEnhance(({ app }) => {
    app.component('NpmBadge',NpmBadge)
})
