import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as path from "path";
import * as dotenv from "dotenv";
import { BadRequestException, ValidationPipe } from "@nestjs/common";

// Load environment variables from the .env file located outside the backend directory
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: process.env.FRONTED_URL,
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	});

	console.log(`CORS enabled for: ${process.env.FRONTED_URL}`);

	const port = process.env.BACKEND_PORT || 8000;

	app.useGlobalPipes(
		new ValidationPipe({
			exceptionFactory: (errors) => {
				const messages = errors.map(
					(error) => `${error.property} - ${error.constraints ? Object.values(error.constraints).join(", ") : "No constraints"}`
				);
				return new BadRequestException(messages);
			},
		})
	);
	await app.listen(port);

	console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
