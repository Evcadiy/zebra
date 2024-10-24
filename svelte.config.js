import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess({
    typescript: true
  }),
  vitePlugin: {
    experimental: {
      inspector: {
        // change shortcut
        toggleKeyCombo: "control-z",
        // hold and release key to toggle inspector mode
        holdMode: true,
        // show or hide the inspector option
        showToggleButton: "always",
        // inspector position
        toggleButtonPos: "top-right"
      }
    }
  }
}
export default config
