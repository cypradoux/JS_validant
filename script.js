import { exo1 } from './script_1.js'
import { exo2 } from './script_2.js'
import { exo3 } from './script_3.js'
import { exo4 } from './script_4.js'
import { exo5 } from './script_5.js'
import { exo6 } from './script_6.js'

const userInput = prompt("Choisis le numero d'exo"); //gets.chomp en Ruby


    const exerciseNumber = parseInt(userInput);//to_i en Ruby

    switch (exerciseNumber) {
        case 1:
          console.log("T'as choisi exo 1");
            exo1();
          break;
        case 2:
          console.log("T'as choisi exo 2");
            exo2();
          break;
        case 3:
            console.log("T'as choisi exo 3");
            exo3();
          break;
        case 4:
            console.log("T'as choisi exo 4");
            exo4();
          break; 
        case 5:
            console.log("T'as choisi exo 5");
            exo5();
          break;  
        case 6:
            console.log("T'as choisi exo 6");
            exo6();    

          break;
        default:
            console.log("T'as choisi un exo qui n'existe pas");
            break;
        }