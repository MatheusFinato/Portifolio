var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData(){
    var formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["naipe"] = document.getElementById("naipe").value;
    formData["numero"] = document.getElementById("numero").value;

    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("Lista-de-Cartas").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.naipe;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.numero;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = '<a onClick="onEdit(this)">Editar</a><a onClick="onDelete(this)">Deletar</a>';
}

function resetForm(){
    document.getElementById("nome").value = "";
    document.getElementById("naipe").value = "";
    document.getElementById("numero").value = "";

    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("naipe").value = selectedRow.cells[1].innerHTML;
    document.getElementById("numero").value = selectedRow.cells[2].innerHTML;

}

function onDelete(td) {
    if (confirm('Certeza?')) {
        row = td.parentElement.parentElement;
        document.getElementById("Lista-de-Cartas").deleteRow(row.rowIndex);
        resetForm();
    }
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.nome;
    selectedRow.cells[1].innerHTML = formData.naipe;
    selectedRow.cells[2].innerHTML = formData.numero;

}
function validate() {
    isValid = true;
    if (document.getElementById("nome").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}