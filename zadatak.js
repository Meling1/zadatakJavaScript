/* napraviti html stranicu koja ima 2 input boxa u koje mozemo unijeti samo brojeve.
Dodati na stranicu treci input box koji je readonly u koji ce se ispisati rezultat izracunavanja.
dodati na stranicu button koji ce na onclick event pozvati funkciju iz javascripta
dodatak za vecu ocjenu:
- dodati button koji ce random unijeti dva broja u input boxove i odraditi automatsko izracunavanje

napraviti javascript sa funkcijom koja ce raditi sljedece:
- za parametre prima 2 ulazna podatka
- provjeriti da su ulazni podaci brojevi
- u slucaju da je jedan od podataka krivi, odnosno nije broj, u label ispisati gresku, odnosno rezultat funkcije
(funkcija mora vratiti tocnu gresku)
- u slucaju da su ulazni parametri ispravni odraditi sljedece:
- vratiti rezultat koji je od dva ulazna broja veci
- ukoliko su oba broja jednaka, vratiti prvi

- css-om odraditi sljedece:
- ukoliko je funkcija vratila ispravnu vrijednost obojati pozadinu treceg textbox-a u zelenu boju
- ukoliko je funkcija vratila gresku obojati pozadinu treceg textboxa-a u crvenu boju
*/

function ime1(a, b) {
  if (typeof a !== "number") {
    return "Greška: prvi parametar nije broj";
  }
  if (typeof b !== "number") {
    return "Greška: drugi parametar nije broj";
  }
  if (a > b) {
    return a;
  }
  if (a < b) {
    return b;
  }
  if (a === b) {
    return a;
  }
}

function zbroj(a, b) {
  return a + b;
  document.getElementById("input").innerHTML = zbroj(2, 3);
}
