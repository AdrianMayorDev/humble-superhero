import { useSuperheroesContext } from "../context/SuperheroContext";
import React from "react";
import ErrorComponent from "./ErrorComponent";

const SuperheroList = () => {
	const superheroContext = useSuperheroesContext();
	if (!superheroContext) {
		return <div className='error'>Error: Superhero context is not available</div>;
	}

	const { superheroes, loading, error } = superheroContext;

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		<ErrorComponent message={error} />;
	}

	return (
		<div>
			<h2>Superhero List</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Superpower</th>
						<th>Humility Score</th>
					</tr>
				</thead>
				<tbody>
					{superheroes.map((hero) => (
						<tr key={hero.name}>
							<td>{hero.name}</td>
							<td>{hero.superpower}</td>
							<td>{hero.humilityScore}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SuperheroList;
