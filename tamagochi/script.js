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
//étape 1
    const buttonCenter = document.querySelector (".js-button[data-direction='center']"
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
    const character= document.querySelector(".js-character")
    character.textContent="🐣"
    //3- affiche mes vitals(retirer le hidden de mon html)
    const vitals=document.querySelector(".js-vitals")
    vitals.classList.remove("hidden")
    //4- afficher le nom de mon tama dans les vitals
    const nameDisplay=document.querySelector(".js-tamaName")
    nameDisplay.textContent=tamaName
    //5-mettre le score de mes vitals a 5 (passer les 0 à 5 de mon html)
    const scoreDisplay=document.querySelectorAll(".js-score")//selectionner tous les classes"js-score" de mon html
    scoreDisplay.forEach((score)=> {
        score.textContent="5"
    })
    //6-afficher les actions 
    const actions = document.querySelector(".js-action")
    actions.classList.remove("hidden")
}

/*Phase 2 l'evolution du tama
1-attendre que notre tama est une première envie
2-il devient grand

*/
setTimeout(()=> {

},1000)
// lancer la fonction de début de mon tama
start()
