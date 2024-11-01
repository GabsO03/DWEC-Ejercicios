let playerLife = 100;
let monsterLife = 200;
let potions = 5;
let playerMaxAttack = 30;
let monsterMaxAttack = 20;
let maxHealingPotion = 50;

function atacarMonstruo () {
    let numRandom = (Math.floor(Math.random() * (playerMaxAttack) + 1));
    monsterLife -= numRandom;
    if(monsterLife>0) {
        window.alert("Auch el monstruo recibió " + numRandom + " de daño\nMonstruo: " + monsterLife + "\nTú: " + playerLife);
    }
    else window.alert("El mosntruo se murió, ganaste\nMonstruo: " + monsterLife + "\nTú: " + playerLife)
}

function tomarPocion () {
    let numRandom = (Math.floor(Math.random() * (maxHealingPotion) + 1));
    playerLife += numRandom;
    potions -= 1;
    window.alert("Vaya, recuperaste " + numRandom + " de vida, te quedan " + potions + " pociones\nMonstruo: " + monsterLife + "\nTú: " + playerLife);
}

function buscarPocion () {
    let numRandom = (Math.floor(Math.random() * 4 + 1));
    if(numRandom === 1) {
        potions += 1; 
        window.alert("Felicidades encontraste una nueva poción, ahora cuentas con " + potions + " pociones");
    }
    else window.alert("Lo siento, no encontraste poción");
}

function contraataqueDeMonstruo () {
    let numRandom = (Math.floor(Math.random() * (monsterMaxAttack) + 1));
    playerLife -= numRandom;
    if(playerLife>0) {
        window.alert("Oh no, el mosntruo te atacó con " + numRandom + " de daño\nMonstruo: " + monsterLife + "\nTú: " + playerLife);
    }
    else window.alert("Te moriste. Gamer over")
}
let opcion;
while (opcion !== 4 && playerLife>0 && monsterLife>0) {
    opcion = parseInt(prompt("Escoge tu próximo movimiento\n1. Atacar monstruo\n2. Tomar poción\n3. Buscar poción\n4. Salir"));
    switch (opcion) {
        case 1:
            atacarMonstruo();
            break;
        case 2:
            tomarPocion();
            break;
        case 3:
            buscarPocion();
            break;
        case 4:
            window.alert("Te rendiste");
            break;
    }
    contraataqueDeMonstruo();
}

