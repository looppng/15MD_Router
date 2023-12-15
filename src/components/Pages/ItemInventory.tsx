import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import Card from "../Card/card.tsx";
import FormInventory from "../FormInventory/FormInventory.tsx";
import {addItem, getItems, MyInventory, removeItem} from "../api.tsx";
import '../../App.css';
import {useId} from "react";

const ItemInventory = () => {

	const id = useId();
	const queryClient = useQueryClient();

	const { data: items, isLoading, isError } = useQuery({
		queryFn: () => getItems(),
		queryKey: ["results"]
	});

	const createItemMutation = useMutation({
		mutationFn: addItem,
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['results']})
			console.log('success')
		}
	})

	const deleteItemMutation = useMutation({
		mutationFn: removeItem,
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['results']})
		}
	})

	const handleCreateItem = (item: MyInventory) => {
		createItemMutation.mutate({
					id,
					...item
		})
	}

	const handleDelete = (id: number) => {
		deleteItemMutation.mutate(id)
	}

	if (isLoading) {
		return <div className="container mt-3">Loading...</div>;
	}

	if (isError) {
		return <div className="container mt-3">Error Loading Data...</div>;
	}

	return (
		<section className="add-item mb-5">
			<div className="container mt-3">
				<div className="row">
					<div className="col-6">
						<FormInventory
								onSubmit={handleCreateItem}
						/>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="wrapper">
						{items?.map(({id, name, description, price, stock}: MyInventory) => (
							<div className="flex" key={Math.random()}>
								<Card
									id={id}
									name={name}
									description={description}
									price={price}
									stock={stock}
									onDelete={() => {
										handleDelete(Number(id))
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