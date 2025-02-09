export class Superhero {
	constructor(public name: string, public superpower: string, public humilityScore: number) {}
}

export class SuperheroesService {
	private superheroes: Superhero[] = [];

	addSuperhero(name: string, superpower: string, humilityScore: number): Superhero {
		const newSuperhero = new Superhero(name, superpower, humilityScore);
		this.superheroes.push(newSuperhero);
		return newSuperhero;
	}

	getSuperheroes(): Superhero[] {
		return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
	}
}
