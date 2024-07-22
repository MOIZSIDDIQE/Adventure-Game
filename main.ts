#! /usr/bin/env node

import inquirer from "inquirer"

class player {
    name: string
    fuel: number = 100;

    constructor(name: string) {
        this.name = name;
    }
    fuel_decreses() {
        let fuels = this.fuel - 25;
        this.fuel = fuels
    }
    Fuel_Increase() {
        this.fuel = 100;
    }
}

class opponent {
    name: string
    fuel: number = 100;

    constructor(name: string) {
        this.name = name;
    }
    fuel_decreses() {
        let fuels = this.fuel - 25;
        this.fuel = fuels
    }
}

let player_name_asking = await inquirer.prompt([
    {
        name: "player_name",
        type: "input",
        message: "Enter your name:"
    }
]);
let opponent_name_asking = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your opponent",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);

let player1 = new player(player_name_asking.player_name);
let opponent1 = new opponent(opponent_name_asking.select);

do{
    if (opponent_name_asking.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "function",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink portion", "Run for your Life...."]
            }
        ]);
        if (ask.function === "Attack") {
            let num = Math.floor(Math.random() * 2)

            if (num >0) {
                player1.fuel_decreses();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (player1.fuel <= 0) {
                    console.log(`You Loose, Better Luck Next Time`)
                    process.exit()
                }
            }
            if (num <= 0) {
                opponent1.fuel_decreses();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (opponent1.fuel <= 0) {
                    console.log(`You Win The Game`)
                    process.exit()
                }
            }
        } else if (ask.function === "Drink portion") {
            player1.Fuel_Increase();
            console.log(`you Drink Health Portion your Fuel is ${player1.fuel}`)
        } else if (ask.function === "Run for your Life....") {
            console.log(`You Loose, Better Luck Next Time`)
            process.exit()
        }
    }

    if (opponent_name_asking.select === "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "function",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink portion", "Run for your Life...."]
            }
        ]);
        if (ask.function === "Attack") {
            let num = Math.floor(Math.random() * 2)

            if (num > 0) {
                player1.fuel_decreses();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (player1.fuel <= 0) {
                    console.log(`You Loose, Better Luck Next Time`)
                    process.exit()
                }
            }
            if (num <= 0) {
                opponent1.fuel_decreses();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (opponent1.fuel <= 0) {
                    console.log(`You Win The Game`)
                    process.exit()
                }
            }
        } else if (ask.function === "Drink portion") {
            player1.Fuel_Increase();
            console.log(`you Drink Health Portion your Fuel is ${player1.fuel}`)
        } else if (ask.function === "Run for your Life....") {
            console.log(`You Loose, Better Luck Next Time`)
            process.exit()
        }
    }

    if (opponent_name_asking.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "function",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink portion", "Run for your Life...."]
            }
        ]);
        if (ask.function === "Attack") {
            let num = Math.floor(Math.random() * 2)

            if (num > 0) {
                player1.fuel_decreses();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (player1.fuel <= 0) {
                    console.log(`You Loose, Better Luck Next Time`)
                    process.exit()
                }
            }
            if (num <= 0) {
                opponent1.fuel_decreses();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (opponent1.fuel <= 0) {
                    console.log(`You Win The Game`)
                    process.exit()
                }
            }
        } else if (ask.function === "Drink portion") {
            player1.Fuel_Increase();
            console.log(`you Drink Health Portion your Fuel is ${player1.fuel}`)
        } else if (ask.function === "Run for your Life....") {
            console.log(`You Loose, Better Luck Next Time`)
            process.exit()
        }
    }
}while(true)
