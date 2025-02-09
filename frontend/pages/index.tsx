import AddSuperheroForm from "../components/AddSuperheroForm";
import SuperheroList from "../components/SuperheroList";
import { SuperheroProvider } from "../context/SuperheroContext";

const Home = () => {
	return (
		<div className='container'>
			<h1>Humble Superhero API</h1>
			<SuperheroProvider>
				<AddSuperheroForm />
				<SuperheroList />
			</SuperheroProvider>
		</div>
	);
};

export default Home;
