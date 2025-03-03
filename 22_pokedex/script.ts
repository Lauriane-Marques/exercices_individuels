class Pokemon{
    constructor(
        public num: string,
        public name: string,
        public spawnChance: number,
    ){}
}

class Pokedex {
    constructor(
        public pokemons: Array<Pokemon>
    ) {}

    countPokemons() {
        return this.pokemons.length;
    }

    countPokemonsOver10Kgs() {
        let countPokemonsOver10Kgs = 0;
        this.pokemons.forEach((pokemon) => {
            if ( pokemon.weight > 10) {
                countPokemonsOver10Kgs++
            }
        })
        return countPokemonsOver10Kgs;
    }

    async main() {
        const URL = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"

        const response = await fetch(URL)
        const data = await response.json()
        let poke = data.pokemon
        
        console.log(poke.length)


        for (let i =0; i< poke.length; i++){
            let pokemon = new Pokemon(poke[i].num, poke[i].name, poke[i].spawn_chance)
            this.pokemons.push(pokemon);
        //     let pokemon = new Array()
        //     pokemon.push(new Pokemon(poke[i].num, poke[i].name, poke[i].spawn_chance))
        }
    }
}


const pokedex = new Pokedex([])
pokedex.main();
pokedex.countPokemons();