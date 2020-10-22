<script>
	import {items} from '../stores.js'
	let items_arr = [];
	let itemsLength

	const unsubscribe = items.subscribe(value => {
		items_arr = value
		itemsLength = items_arr.length
	})

</script>

<style>
	h1 {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>My ToDo List</title>
</svelte:head>

<h1>{itemsLength} Items in TODO list</h1>
<ul>
	{#each items_arr as todo, index (todo.id)}
		<li>
			<input type="checkbox" checked={todo.completed}/> {todo.title}
		</li>
	{:else}
		<li>Nothing to do here!</li>
	{/each}
</ul>
