<template>
<div>
        <h1>Preferences:</h1>

        <label for="name">Language:
        <select v-model="languages">
            <option disabled value=""></option>
            <option>English</option>
            <option>Chinese</option>
            <option>Malay</option>
            <option>Tamil</option>
        </select>
        </label><br><br><br>

        <h1>Delete Account:</h1>
        <button id="delete">Delete My Account</button>
        <br><br><br>
        <button id="end">Save Changes</button>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
label {
  padding-right:5px;
}
select {
    float: right;
    clear: both;
    width: 120px
}
#end {
    background-color: rgb(32,52,79);
    border: none;
    color: white;
    padding: 12px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 8px 4px;
    cursor: pointer;
    border-radius: 8px;
}
</style>