let animalTypes: string[] = ["MOOSE", "COW", "HORSE"];

function getNoise(animalTypes: string) {

    if (animalTypes === "MOOSE") { console.log("NEIIIIIIIGH whatever noise Moose make"); }
    else if (animalTypes === "COW") { console.log("MOOOOOOOOOOO"); }
    else if (animalTypes === "HORSE") { console.log("WHINNNNY"); }

}

export {
    getNoise,
    animalTypes
}