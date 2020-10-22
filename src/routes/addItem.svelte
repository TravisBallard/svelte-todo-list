<script>
    export let items = []
    const addItem = (item) => items.push(item)

    console.log('items', items)
</script>

<style>
    h2 {
        font-size: 1.4em;
    }
</style>

<h2>Add item</h2>
<form>
    <div>
        <label for="item">Item to add:</label>
        <input type="text" id="item" value="" placeholder="Enter item here." size="100">
    </div>
    <div>
        <input type="submit" value="Submit">
    </div>
</form>