<script>
  import {items} from '../stores.js'
  let items_arr = [];
  const unsubscribe = items.subscribe(value => items_arr = value)

  const addItem = (event) => {
    items_arr.push({
      id: Math.random() * 1999,
      title: document.getElementById('item').value
    })
    items.set(items_arr)
    document.getElementById('item').value = ''
  }


</script>

<style>
    h2 {
        font-size: 1.4em;
    }
</style>

<h2>Add item</h2>
<form on:submit={() => { return false }}>
    <div>
        <label for="item">Item to add:</label>
        <input type="text" id="item" value="" placeholder="Enter item here." size="100">
    </div>
    <div>
        <input type="button" value="Submit" on:click={e => addItem(e)}>
    </div>
</form>