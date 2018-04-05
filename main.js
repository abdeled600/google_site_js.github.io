function AFFICHER(bouton, id) {
  var div = document.getElementById(id);
  var button = document.getElementById("button");

  if(div.style.display=="none") {
    var temps_avant_aff_pub;
    div.style.display = "block";
    button.style.display = "none";
    temps_avant_aff_pub = window.setTimeout(afficherPub,10000);

  }

  function afficherPub() {
  alert("Hey ta grand mère la chauve");
  }

}

function recherche()
{

var recher= document.getElementById("A").value;
window.location.href="https://www.google.fr/#q="+recher+"";

}
