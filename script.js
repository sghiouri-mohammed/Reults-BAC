

function calculate(){
    var national = parseFloat(document.getElementById("national").value);
    var regional = parseFloat(document.getElementById("regional").value);

    var result = national * 0.75 + regional * 0.25;

    document.getElementById('resultat').innerText = "Résultat : " + parseFloat(result);

}
