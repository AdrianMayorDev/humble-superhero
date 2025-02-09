import { Module } from "@nestjs/common";
import { SuperheroesModule } from "./superheroes/superheroes.module";
import { SuperheroesController } from "./superheroes/superheroes.controller";
import { SuperheroesService } from "./superheroes/superheroes.service";

@Module({
	imports: [SuperheroesModule],
})
export class AppModule {}
