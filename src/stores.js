import {writable} from 'svelte/store'
export const items = writable([
  {
    id: 1,
    title: 'First TODO item.',
    completed: false,
  }
])