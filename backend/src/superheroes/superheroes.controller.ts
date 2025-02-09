import { Controller, Post, Get, Body } from "@nestjs/common";
import { SuperheroesService } from "./superheroes.service";
import { CreateSuperheroDto } from "./dto/create-superhero.dto";
import { Superhero } from "../common/interfaces/superhero.interface";

@Controller("superheroes")
export class SuperheroesController {
	constructor(private readonly superheroesService: SuperheroesService) {}

	@Post()
	addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto): Superhero {
		return this.superheroesService.addSuperhero(
			createSuperheroDto.name,
			createSuperheroDto.superpower,
			createSuperheroDto.humilityScore
		);
	}

	@Get()
	getSuperheroes(): Superhero[] {
		return this.superheroesService.getSuperheroes();
	}
}
