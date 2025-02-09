const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchSuperheroesService = async () => {
	try {
		const response = await fetch(`${BASE_URL}/superheroes`);
		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Failed to fetch superheroes");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export const addSuperheroService = async (name: string, superpower: string, humilityScore: number) => {
	try {
		const response = await fetch(`${BASE_URL}/superheroes`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, superpower, humilityScore }),
		});
		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Failed to add superhero");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};
