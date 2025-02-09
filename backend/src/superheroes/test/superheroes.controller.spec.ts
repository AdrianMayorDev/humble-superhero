import { Test, TestingModule } from "@nestjs/testing";
import { SuperheroesController } from "../superheroes.controller";
import { SuperheroesService } from "../superheroes.service";
import { CreateSuperheroDto } from "../dto/create-superhero.dto";

describe("SuperheroesController", () => {
	let controller: SuperheroesController;
	let service: SuperheroesService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [SuperheroesController],
			providers: [SuperheroesService],
		}).compile();

		controller = module.get<SuperheroesController>(SuperheroesController);
		service = module.get<SuperheroesService>(SuperheroesService);
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});

	describe("addSuperhero", () => {
		it("should add a superhero", () => {
			const createSuperheroDto: CreateSuperheroDto = {
				name: "Superman",
				superpower: "Flight",
				humilityScore: 10,
			};

			const result = {
				name: "Superman",
				superpower: "Flight",
				humilityScore: 10,
			};

			jest.spyOn(service, "addSuperhero").mockImplementation(() => result);

			expect(controller.addSuperhero(createSuperheroDto)).toBe(result);
		});
	});
});
