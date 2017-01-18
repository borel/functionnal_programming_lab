var a = new Array("Vent","Pluie","Feu");
a.join();      // "Vent,Pluie,Feu"
console.log(a.join(", "));  // "Vent, Pluie, Feu"
a.join(" + "); // "Vent + Pluie + Feu"
a.join("");    // "VentPluieFeu"