function enviarEncuesta() {
    const p1 = document.querySelector('input[name="p1"]:checked').value;
    const p2 = document.querySelector('input[name="p2"]:checked').value;
    const p3 = document.querySelector('input[name="p3"]:checked').value;

    document.getElementById("resultado1").innerText = "1.- ¿Te gusta leer libros de ficción? " + p1;
    document.getElementById("resultado2").innerText = "2.- ¿Lees regularmente libros de no ficción? " + p2;
    document.getElementById("resultado3").innerText = "3.- ¿Prefieres leer libros en formato digital o impreso? " + p3;

    document.getElementById("resultados").style.display = "block";
}