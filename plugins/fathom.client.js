import { defineNuxtPlugin } from "#app";
import VueFathom from "@ubclaunchpad/vue-fathom";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    nuxtApp.vueApp.use(VueFathom, {
        siteID: config.public.fathom.siteId,
        settings: {
            url: "https://" + config.public.fathom.domain + "/script.js",
            spa: "history",
        },
    });
});