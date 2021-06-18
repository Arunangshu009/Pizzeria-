add_item_array=["Extra virgin olive oil","Cornmeal","Tomato sauce","Firm mozzarella cheese","Fresh soft mozzarella cheese","Fontina cheese","Parmesan cheese","Feta cheese"];
function add_item() {
    var htmldata;
    htmldata="<ol class='additem";
    add_item_array.sort();
    for(var i=0;i<add_item_array.length;i++){
htmldata= htmldata+'<input>'+ add_item_array[i] + '</input>';
}
htmldata= htmldata+ "</ol>";
document.getElementById("display_add_item").innerHTML = htmldata;
}