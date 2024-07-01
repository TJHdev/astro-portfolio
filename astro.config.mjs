import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import compressor from "astro-compressor";

export default defineConfig({
  integrations: [tailwind(), icon(), compressor()],
  image: {
    service: passthroughImageService(),
  },
});
