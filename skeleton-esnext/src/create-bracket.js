import {inject} from 'aurelia-framework';

export class Bracket {
	heading = 'Create bracket';
    miMo = [] = [];
    usrData = this.usrInput;


 saveBtn() {
  if(this.usrData.checkValidity() == false){
    alert("Ingrese algun nombre porfavor!");
    return false;
 }
  else{
    this.miMo.push(usrData.value);
    clearInput();
 }
}

 clearInput() {
  this.usrInput.value = "";
}

 deleteBtn() {
  if (confirm("¿Seguro que desea borrar?") == true) {
    while (this.miMo.length > 0) {
    this.miMo.pop();
   }
    }
  else {
        return false;
  }
}

}
