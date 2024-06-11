/* 
États de notre Tamastudi possibles :
- 🥚 : partie non lancée
- 🐣 : naissance pendant tant qu'il n'a pas fait son 1er caca
Ensuite il devient un "grand" avec une humeur variable
- 😢 : triste 0/5
- 🙁 : pas content 1/5
- 🙂 : normal 2/5
- 😄 : content 3/5
- 🤗 : heureux 4/5
- 🥰 : très heureux 5/5
- 👻 : mort 0/5
Ses envies :
- 😋 : faim, aléatoire minimum 30 sec et max 3 minutes
- 🥱 : jouer, aléatoire minimum 30 sec et max 3 minutes
- 💩 : caca, aléatoire minimum 30 sec et max 1.30 minutes uniquement après avoir mangé
*/
/* PHASE 0 : activer le tama
1-cliquer sur le bouton du milieu
2- quand on arrive a 5 clics 
3-alors on fait naitre notre tama
*/
const start=()=> {
//étape 1`
    const buttonCenter = document.querySelector (`.js-button[data-direction="center"]`
    )
    //je crée un compteur pour mes 5 click (je l' initialise en dehors de mon add.eventListner)
    let count=0
    //étape 2
    buttonCenter.addEventListener("click", () => {
    count++   
    if(count===5){
    //étape 3 
        birth()
    }
    })
}
/* PHASE 1 naissance du tama
1-demander le prenom a mon utilisateur
2-fait eclore mon oeuf pour passer au poussin (changer l'oeuf en un poussin de mon html)
3- affiche mes vitals(retirer le hidden de mon html)
4- afficher le nom de mon tama dans les vitals
5-mettre le score de mes vitals a 5 (passer les 0 à 5 de mon html)
*/
// creation d'une fonction pour l'étape 1
const birth=()=>{
    //1-demander le prenom a mon utilisateur
    const tamaName = prompt("quel nom a votre tamastudi ?")
    //2-fait eclore mon oeuf pour passer au poussin (changer l'oeuf en un poussin de mon html)
    /*(remplacer par une fonction car 2 elements identique appeler) const character= document.querySelector(".js-character")
    character.textContent="🐣" */
    showInScreen("🐣")
    //3- affiche mes vitals(retirer le hidden de mon html)
    const vitals=document.querySelector(".js-vitals")
    vitals.classList.remove("hidden")
   
    //4- afficher le nom de mon tama dans les vitals
    const nameDisplay=document.querySelector(".js-tamaName")
    nameDisplay.textContent=tamaName
    //5-mettre le score de mes vitals a 5 (passer les 0 à 5 de mon html)
    const scoresDisplay=document.querySelectorAll(".js-score")//selectionner tous les classes"js-score" de mon html
    scoresDisplay.forEach((score)=> {
        score.textContent="5"
    })
    //6-afficher les actions 
    const actions = document.querySelector(".js-actions")
    actions.classList.remove("hidden")
    //7-appel de la fonction pour la faire grandir
    evolve()

}

/*Phase 2 l'evolution du tama
1-attendre que notre tama est une première envie
2-il devient grand

*/
const evolve =() => {
//1-
const functionToExecute = () => {
    showInScreen("🥰")
}
wantsTo(functionToExecute)
//2-

}
//fonction pour générer l'envie
const wantsTo= (callback) => {
    const needs=["😋", "🥱", "💩"]
    const minDuration=1000
    const maxDuration=3000
    const duration = getRandomInt({
        min: minDuration,
        max: maxDuration,
    })
    setTimeout(() => {
        const randomIndexNeeds = getRandomInt({
            max: needs.length,
        })
        const desire = needs [randomIndexNeeds]
        
        if (callback){
            callback()
        }else {
            showInScreen(desire)
        }
    },duration) 
}
//fonction qui retourne un nombre aleatoire entre un min et un max
const getRandomInt=(props) => {
   /* let {max,min} = props  remplacer par un ternaire*/
   const max = props.max
   const min = props.min ? props.min :0
   return Math.floor(Math.random() * (max-min) + min)//pour avoir un chiffre compris entre 1et 3
}
//fonction qui gere l affichage des emoticone dans l ecran du tama
const character= document.querySelector(".js-character")
const showInScreen = (display) =>{
    character.textContent=display
}

// lancer la fonction de début de mon tama
start()
