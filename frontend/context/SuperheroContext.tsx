import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { fetchSuperheroesService, addSuperheroService } from "../services/superheroService";

interface SuperheroContextType {
	superheroes: any[];
	loading: boolean;
	error: string;
	getSuperheroes: () => Promise<void>;
	addSuperhero: (name: string, superpower: string, humilityScore: number) => Promise<void>;
}

const SuperheroContext = createContext<SuperheroContextType | null>(null);

export const useSuperheroesContext = () => {
	return useContext(SuperheroContext);
};

export const SuperheroProvider = ({ children }: { children: ReactNode }) => {
	const [superheroes, setSuperheroes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const getSuperheroes = async () => {
		try {
			const data = await fetchSuperheroesService();
			setSuperheroes(data);
		} catch (err) {
			if (err instanceof Error && err.message) {
				setError(err.message);
			} else {
				setError("An unknown error occurred");
			}
		} finally {
			setLoading(false);
		}
	};

	const addSuperhero = async (name: string, superpower: string, humilityScore: number) => {
		try {
			await addSuperheroService(name, superpower, humilityScore);
			// Fetch new data
		} catch (err) {
			setError((err as Error).message);
		}
	};

	useEffect(() => {
		getSuperheroes();
	}, []);

	return (
		<SuperheroContext.Provider value={{ superheroes, loading, error, getSuperheroes, addSuperhero }}>
			{children}
		</SuperheroContext.Provider>
	);
};
