/*var num1 = 9;
//console.log (num1)//
var num2 = 16;
var num3 = 4;
if (num1 > num2 && num1 > num3){
  console.log (num1,"es el mas grande")
}else if (num2 > num1 && num2 > num3){
  console.log(num2,"es el mas grande")
}else {
  console.log(num3,"es el mas grande")
};

if (num1 < num2 && num1 < num3){
  console.log (num1,"es el mas chico")
}else if (num2 < num1 && num2 < num3){
  console.log(num2,"es el mas chico")
}else {
  console.log(num3,"es el mas chico")
};*/
function Func_ej1(){
  //alert('me ejecuto dentro de una funcion')//
  let Ej1_Num01 = parseFloat(document.getElementById('Ej1_Num1').value);
  let Ej1_Num02 = parseFloat(document.getElementById('Ej1_Num2').value);
  let Ej1_Num03 = parseFloat(document.getElementById('Ej1_Num3').value);

  if (Ej1_Num01 > Ej1_Num02 && Ej1_Num01 > Ej1_Num03){
      document.getElementById('Ej1_res').value = Ej1_Num01
  }else if (Ej1_Num02 > Ej1_Num01 && Ej1_Num02 > Ej1_Num03){
      document.getElementById('Ej1_res').value = Ej1_Num02
  }else {
      document.getElementById('Ej1_res').value = Ej1_Num03
  }

  //let num1 = 9;//
  //console.log (num1)//
  /*let num2 = 16;
  let num3 = 4;*/
  /*if (Ej1_Num1 > Ej1_Num2 && Ej1_Num1 > Ej1_Num3){
    let ResMyr = (Ej1_Num1,"es el mas grande")
  }else if (Ej1_Num2 > Ej1_Num1 && Ej1_Num2 > Ej1_Num3){
    let ResMyr =(Ej1_Num2,"es el mas grande")
  }else {
    let ResMyr =(Ej1_Num3,"es el mas grande")
  };*/
  
  /*if (Ej1_Num1 < Ej1_Num2 && Ej1_Num1 < Ej1_Num3){
    console.log (Ej1_Num1,"es el mas chico")
  }else if (Ej1_Num2 < Ej1_Num1 && Ej1_Num2 < Ej1_Num3){
    console.log(Ej1_Num2,"es el mas chico")
  }else {
    console.log(Ej1_Num3,"es el mas chico")
  };*/
  
  /*const Resul = Ej1_Num1+Ej1_Num2+Ej1_Num3;
  document.getElementById('Ej1_res').value = Resul;*/
  };

  function Func_ej2(){
    //alert('me ejecuto dentro de una funcion')//
    let Ej2_num1 = parseFloat(document.getElementById('Ej2_num1').value);
    let Ej2_num2 = parseFloat(document.getElementById('Ej2_num2').value);


    let Resul2 = (Ej2_num1+Ej2_num2);
    document.getElementById('Ej2_res').value = Resul2;

};


function Func_ej3_for(){
  let Ej3_tex1 = document.getElementById('Ej3_tex1').value;
  let Ej3_num1 = document.getElementById('Ej3_num1').value;


  /*for (let Ej3_tex1 = 0; Ej3_tex1 < Ej3_num1; Ej3_tex1++){
      //alert ('Ej3_tex1');//
      document.write(Ej3_tex1);
  };

  document.getElementById('Ej3_res').value =Resul3;*/
  let repText = Ej3_tex1.repeat(Ej3_num1)

  document.getElementById('textRepea').innerHTML = repText;

};


function Func_ej3_for(){
  let Ej3_tex1 = document.getElementById('Ej3_tex1').value;
  let Ej3_num1 = document.getElementById('Ej3_num1').value;


  /*for (let Ej3_tex1 = 0; Ej3_tex1 < Ej3_num1; Ej3_tex1++){
      //alert ('Ej3_tex1');//
      document.write(Ej3_tex1);
  };

  document.getElementById('Ej3_res').value =Resul3;*/
  let repText = Ej3_tex1.repeat(Ej3_num1)

  document.getElementById('textRepea').innerHTML = repText;

};


function Func_ej4_2(){
  let Ej4_GCel = document.getElementById('Ej4_Cel').value;
  let Ej4_GFar = document.getElementById('Ej4_Far').value;
                   
  /*function validar() {
       //obteniendo el valor que se puso en campo text del formulario
       miCampoTexto = document.getElementById("miCampo").value;
       //la condición
       if (miCampoTexto.length == 0) {
           return false;
       }
       return true;
  };*/

  function InEmpty(text){
      if (text.length == 0){
          return false;
      }else{
          return true;
      }
  };

  if (InEmpty(Ej4_GCel)){
      let conver = ((Ej4_GCel*1.8)+32);

   document.getElementById('TempCon').innerHTML = Ej4_GCel+" grados °C  son "+conver+" grados °F";

  }else if (InEmpty(Ej4_GFar)){
      let converF = ((Ej4_GFar-32)/1.8);

   document.getElementById('TempCon').innerHTML = Ej4_GFar+" grados °F  son "+converF+" grados °C";
  };

  /*if (Ej4_GCel !== 0){
      let conver = ((Ej4_GCel*1.8)+32);

   document.getElementById('TempCon').innerHTML = Ej4_GCel+" grados °C  son "+conver+" grados °F";
  }else if (Ej4_GFar !== 0){
      let converF = ((Ej4_GFar-32)/1.8);
      /*console.log(converF)*/

   /*document.getElementById('TempCon').innerHTML = Ej4_GFar+" grados °F  son "+converF+" grados °C";
  }*/



};


function Func_ej5(){
  let Ej5_Cont = document.getElementById('Ej5_text').value;
  console.log(Ej5_Cont)
  let Ej5_Cont2 = Ej5_Cont.length;
  console.log("el string tiene"+" "+Ej5_Cont.length+" "+"caracteres");
  
  document.getElementById('Ej5_res').value = Ej5_Cont2;
};


function Func_ej6(){
  let Ej6_number = document.getElementById('Ej6_num').value;

  if (Ej6_number%2==0){
      document.getElementById('Ej6_res').value = "el numero"+" "+Ej6_number+" "+"es par";
  }else {
      document.getElementById('Ej6_res').value = "el numero"+" "+Ej6_number+" "+"es impar";
  }
};


function Func_ej7(){
  let Ej7_number1 = document.getElementById('Ej7_num1').value;
  let Ej7_number2 = document.getElementById('Ej7_num2').value;
  
  //let listMul3 = ' ';
  let list = [];
  
  for(var i = Ej7_number1 ; i <= Ej7_number2 ; i++)
        {
            if( i % 3 === 0){
              //listMul3 += i + ' ';
              list.push(i + " ");
              console.log (i);
            }
               
        }
        //console.log (listMul3)

  /*function multiple(valor, multiple)
        {
            resto = valor % multiple;
            if(resto==0)
                return valor;
            else
                return false;
        };*/

  
 
        // bucle del input 1 a input 2
        
        
        document.getElementById('Ej7_res').innerHTML = ("Los multplos de 3 entre " + Ej7_number1 + " y " + Ej7_number2 + " son: " + list);
        


  /*if (Ej7_number1 < Ej7_number2 && Ej7_number1>0){
      for (let ejec=Ej7_number1;ejec%3==0; ejec++){};
      console.log(ejec)

  };*/

  /*while (){

  };*/
  /*let ejec = Ej7_number1*/
  /*for (let ejec=Ej7_number1; (ejec<=Ej7_number2 && ejec%3==0); ejec++){
      console.log(ejec);
  };*/

  };

//Ejercicio 8//
  /*function esPrimoLimit(){
    let Ej8_nP = document.getElementById('Ej8_LimiP').value;

    for(let num = 2; num <= Ej8_nP ; num++){
        let esPrimo = true;

        for (let divisor = 2; divisor < num; divisor++){
            if (num % divisor === 0){
                esPrimo = false;
                break;
            }

        }

        if (esPrimo) {
            
            console.log(num)
            document.getElementById('NumPri').innerHTML = prim;
            let Ej8_nP = document.getElementById('NumPri').value= num;
        } 
    }


};*/

function Func_ej8(){
    let Ej8_nP = document.getElementById('Ej8_LimiP').value;

    let listP = [];
    let listP2 = ' ';
    let primo = true;

    /*for(let i = 2; i < Ej8_nP; i++){
        if(i % i && i % 1 === 1 || i){
            listP.push(i)
            //listP2 += i + ' ';
            //console.log(i)
        }
        //console.log(listP2)
        //console.log(listP)
    };*/
    //document.getElementById('NumPri').innerHTML = ("hola!" + listP + listP2)


    for (let i = 2; i < Ej8_nP; i++) {
      if (esPrimo(i)=== true){
        console.log(i)
        listP.push(i)
      }

      
    }
    console.log(listP)
    document.getElementById('NumPri').innerHTML = ("Los numeros primos hasta " + Ej8_nP +" son: " + listP)


    function esPrimo(num){

      for(var d=2;d<=num-1;d++) {
      
      if(num%d==0) {
      
      return false;
      
      }
      
      }
      
      return true;
      
    }

};


function Func_ej9(){
  let Ej9_nombre = document.getElementById('Ej9_nme').value;
  let Ej9_apellido = document.getElementById('Ej9_apell').value;
  let Ej9_age = document.getElementById('Ej9_edad').value;
  let Ej9_city = document.getElementById('Ej9_ciudad').value;

  let frase = ("Mi nombre es"+" "+Ej9_nombre+" "+Ej9_apellido+", "+"tengo"+" "+Ej9_age+" "+" años. Nací en la ciudad de"+" "+Ej9_city)

  document.getElementById('Text').innerHTML = frase;

};


function FuncEj10(){
  let Ent01 = document.getElementById('Ej10_num1').value;
  let Ent02 = document.getElementById('Ej10_num2').value;

let texto = '';
let list = [];
//console.log(Ent011)

//let numer = (Ent01 + 1);

  for(let i = Ent01 ; i < Ent02; i++){
    texto += i + ' '
    list.push(i + " ")
    console.log(i)
  };
  list.shift()

  document.getElementById('res10').innerHTML = ("Los numeros comprendidos entre "+ Ent01 + " y "+ Ent02 + " son:"+ list);
};


function Test() {
  let boxEnt = [];

for (let index = 0; index < array.length; index++){
  boxEnt.push(index);//boxEnt[0]=0, boxEnt[1]=1
}
document.getElementById('id').innerHTML = boxEnt.toString();

};
/*let boxEnt = [];

for (let index = 0; index < array.length; index++){
  boxEnt.push(index);//boxEnt[0]=0, boxEnt[1]=1
}
document.getElementById('id').innerHTML = boxEnt.toString();*/









