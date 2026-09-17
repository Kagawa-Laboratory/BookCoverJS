import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: "",  
  build: {
    rollupOptions: {
      input: {
        main:          resolve(import.meta.dirname, 'index.html'),
        blockly:       resolve(import.meta.dirname, 'blockly.html'),
        codemirror:    resolve(import.meta.dirname, 'codemirror.html'),
        bookCoverTest: resolve(import.meta.dirname, 'bookCoverTest.html'),
        samples:       resolve(import.meta.dirname, 'samples.html'),
        tutorial_bookcover: resolve(import.meta.dirname, 'Tutorial/bookcover.html'),
        tutorial_card:     resolve(import.meta.dirname, 'Tutorial/card.html')
      },
    },
  },
})
