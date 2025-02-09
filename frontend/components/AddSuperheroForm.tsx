import React, { useState } from "react";
import { useSuperheroesContext } from "../context/SuperheroContext";
import ErrorComponent from "./ErrorComponent";

const AddSuperheroForm: React.FC = () => {
	const [name, setName] = useState("");
	const [superpower, setSuperpower] = useState("");
	const [humilityScore, setHumilityScore] = useState<number | "">("");
	const superheroContext = useSuperheroesContext();

	if (!superheroContext) {
		return <div className='error'>Error: Superhero context is not available</div>;
	}

	const { addSuperhero, getSuperheroes, error } = superheroContext;

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (typeof humilityScore === "number" && humilityScore >= 1 && humilityScore <= 10) {
			try {
				await addSuperhero(name, superpower, humilityScore);
				// Reset form fields
				setName("");
				setSuperpower("");
				setHumilityScore("");

				// Fetch new data
				await getSuperheroes();
			} catch (error) {
				console.error(error);
			}
		} else {
			alert("Humility score must be a number between 1 and 10");
		}
	};

	if (error) {
		return <ErrorComponent message={error} />;
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Name:</label>
				<input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
			</div>
			<div>
				<label>Superpower:</label>
				<input type='text' value={superpower} onChange={(e) => setSuperpower(e.target.value)} required />
			</div>
			<div>
				<label>Humility Score (1-10):</label>
				<input
					type='number'
					min={1}
					max={10}
					value={humilityScore}
					onChange={(e) => setHumilityScore(e.target.value === "" ? "" : Number(e.target.value))}
					required
				/>
			</div>
			<button type='submit'>Add Superhero</button>
		</form>
	);
};

export default AddSuperheroForm;
