

function loaded(){
    getProducts();
}

function getProducts(){
    var tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML= "";
    for (var product of products){
        var tr = "<tr>";
        tr += "<td class= 'center'>" + product.id+ "</td>";
        tr += "<td class='leftPad'>" + product.code+ "</td>";
        tr += "<td class='leftPad'>" + product.name+ "</td>";
        tr += "<td class='right'>" + "$" + product.price+ "</td>";
        tr += "<td class='center'>" + product.vendor.name + "</td>";
        tr += "</tr>";


        tbodyCtrl.innerHTML += tr;
    }       
}