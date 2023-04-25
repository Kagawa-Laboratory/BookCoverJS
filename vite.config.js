// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "",  
  build: {
    rollupOptions: {
      input: {
        main:          resolve(__dirname, 'index.html'),
        blockly:       resolve(__dirname, 'blockly.html'),
        codemirror:    resolve(__dirname, 'codemirror.html'),
        bookCoverTest: resolve(__dirname, 'bookCoverTest.html'),
        samples:       resolve(__dirname, 'samples.html'),
      },
    },
  },
})
