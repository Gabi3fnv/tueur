"use strict";
// Un tueur en série nommé Jason est en cavale. Il est caché quelque part en forêt.
// Une équipe de choc est présente pour le neutraliser.
// Nous avons besoin d’un tueur nommé Jason et qui possède 100 points de vie.
// Nous avons besoin de Caractéristiques de personnages avec des noms bien clichés (nerd, sportif, blonde…),
// une probabilité de mourir, une de mettre des dégâts et une de mourir en mettant des dégâts (ex: 0.3, 0.5, 0.2)
// Nous avons besoin de 5 Survivants avec un nom généré aléatoirement d’un tableau de prénoms et d’une
// caractéristique prise de celles disponibles (toujours aléatoire).
// Tant que le tueur n’est pas mort ou que les survivants n’ont pas tué Jason :
// Le tueur attaque un des survivants :
// - soit le survivant meurt
// - soit le survivant esquive et inflige 10 points de dégâts
// - soit le survivant inflige 15 points de dégâts mais meurt
// Les morts seront affichés à la fin
// Un message est attendu pour chaque action (Jason a tué X, X a esquivé et a infligé X dmg, Jason est mort,
// Les survivants ont gagné mais RIP à X, X, X…)

class Personnage {
    constructor(nom, probabiliteMort, degats, probabiliteMortavecDegat) {
        this.nom = nom;
        this.probabiliteMort = probabiliteMort;
        this.degats = degats;
        this.probabiliteMortavecDegat = probabiliteMortavecDegat;
    } 
   
    attaquer(cible) {
        // Vérifie si l'attaque réussit en comparant à la probabilité d'attaque
        if (Math.random() < this.degats) {
          // Affiche un message d'esquive réussie
          console.log(`${this.nom} esquive ${cible.nom} et inflige ${this.degats} points de dégâts.`);
          cible.encaisserDegats(this.degats); // Appelle la méthode encaisserDegats de la cible pour lui infliger des dégâts
        } else {
          // Affiche un message de mort
          console.log(`${this.nom} meurt et ${cible.nom}.`);
        }
      }  
      }

let Jason = 100; //points de vie 


let nom=[]; 
nom.push ('Emma','Bob','Sydney','Marcus','Bryan');

let caract=[];
caract.push ('nerd', 'blond(e)', 'sportif', 'geek', 'riche');

const survivant = Math.floor(Math.random()*nom.length); //rendre aléatoire le choix du survivant

let tour = 1; //boucle de combat jusqu'à ce qu'un personnage soit vaincu
let survivant1 = new Personnage(nom[survivant]+' le/la '+caract[survivant], 0.3, 0.2, 0.5);
let survivant2 = new Personnage(nom[survivant]+' le/la '+caract[survivant], 0.3, 0.2, 0.5);
let survivant3 = new Personnage(nom[survivant]+' le/la '+caract[survivant], 0.3, 0.2, 0.5);
let survivant4 = new Personnage(nom[survivant]+' le/la '+caract[survivant], 0.3, 0.2, 0.5);
let survivant5 = new Personnage(nom[survivant]+' le/la '+caract[survivant], 0.3, 0.2, 0.5);

let tableausurvivants = [survivant1,survivant2,survivant3,survivant4,survivant5];
//tableau des 5 survivants 

let survivantmort = [];
//tableau des survivants morts

//les 3 possibilités lorsque jason attaque sont : soit le survivant meurt, 
//soit le survivant esquive et inflige 10 points de dégâts, soit le survivant inflige 15 points de dégâts mais meurt
while (Jason >0 && survivantmort.length >5) { //je voulais faire en sorte que tant que jason est en vie et quil y a moins de 5 survivants morts mais ça me fait une boucle infini quand je fais <5

    console.log(`Tour ${tour}:`); //affiche le tour
        console.log("Jason attaque !");

    }if (survivant1.probabiliteMort>Math.random()){ 
        console.log(`Jason a tué ${survivant1.nom}`);
        survivantmort+=survivant1.nom; //rajoute le survivant mort à la liste des morts

    }if (survivant1.attaquer){ //comment utiliser le encaisserDegats?
        console.log(`${survivant1.nom} a esquivé et a infligé 10 dmg`)

    }else if (survivant1.attaquer){
      console.log(`${survivant1.nom} est mort mais a infligé 1 dmg`)
    }

//Comment répéter avec les autres survivants du tableausurvivants sans réécrire tout ?

// Affiche un message indiquant le résultat du combat
if (Jason <= 0) {
    console.log(`Jason est mort ! Les survivants gagnent mais RIP à ${survivantmort}!`);
  } else if (survivantmort.length == 5) { //la liste de survivants morts arrive à 5 (donc plus de survivants restants)
    console.log("Les survivants sont tous morts ! Jason gagne !");
  } else {
    console.log("Le combat se termine en match nul. Survivants et Jason sont tous épuisés !");
  }