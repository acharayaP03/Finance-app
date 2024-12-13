// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["shadcn-nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/icon"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  tailwindcss: {},
});