import {useQuery} from "@tanstack/react-query";
import Card from "./Card/card.tsx";
import FormInventory from "./FormInventory/FormInventory.tsx";
import {getItems, MyInventory} from "./api.tsx";
import '../App.css'

const ItemInventory = () => {

	const { data: items, isLoading, isError } = useQuery({
		queryFn: () => getItems(),
		queryKey: ["results"]
	});

	if (isLoading) {
		return <div className="container mt-3">Loading...</div>;
	}

	if (isError) {
		return <div className="container mt-3">Error Loading Data...</div>;
	}

	return (
		<section className="add-item">
			<div className="container mt-3">
				<div className="row">
					<div className="col-6">
						<FormInventory
								onSubmit={() => {
									console.log('submitted')
								}}
						/>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="wrapper">
						{items?.map(({name, description, price, stock}: MyInventory) => (
							<div className="flex" key={Math.random()}>
								<Card
									name={name}
									description={description}
									price={price}
									stock={stock}
									onDelete={() => {
									}}/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ItemInventory;