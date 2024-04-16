// Veamos como unir 2 arreglos, para ello existe un arreay method llamado .concat

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


// Unir 2 arreglos con concat...
const meses3 = meses.concat(meses2,'Otro mes');
console.log(meses3);

// Existe otra forma... que es con rest operator o spread operator..
              //cpmeses, cpmeses2
const meses4 = [...meses,...meses2,'Otro mes']; // Tienes que asegurarte de que sean arrays cuando usas ...  'Otro mes'
//const meses4 = [...meses,...meses2,...'Otro mes']; // Evitar hacer esto ya que mete como arreglo el string
//con ... se agregan en el orden que se van colocando
console.log(meses4)

