import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getItemsById, removeItem} from "../api.tsx";
import {useNavigate, useParams} from "react-router-dom";
import Card from "../Card/card.tsx";

const Item = () => {

	const navigate = useNavigate();
	const { id } = useParams();
	const queryClient = useQueryClient();

	const { data: item , isLoading, isError } = useQuery({
		queryKey: ["results", id],
		queryFn: () => getItemsById(id),
	});

	const deleteItemMutation = useMutation({
		mutationFn: removeItem,
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['results']})
		}
	})

	const handleDelete = (id: number) => {
		deleteItemMutation.mutate(id)
		navigate('/inventory');
	}

	if (isLoading) {
		return <div className="container mt-3">Loading...</div>;
	}

	if (isError) {
		return <div className="container mt-3">Error Loading Data...</div>;
	}

	return (
			<>
				<div className='container mt-3'>ITEM PAGE</div>
				<div className="container">
					<div className="row">
						<div className="wrapper">
							<div className="flex" key={Math.random()}>
								<Card
										id={item.id}
										name={item.name}
										description={item.description}
										price={item.price}
										stock={item.stock}
										onDelete={() => {
											handleDelete(Number(item.id))
										}}/>
							</div>
						</div>
					</div>
				</div>
			</>
	)
}

export default Item