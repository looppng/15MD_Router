import {useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getItemsById, updateItem} from "../api.tsx";
import EditFormInventory from "../FormInventory/EditFormInventory.tsx";
import Item from "./Item.tsx";

const EditItem = () => {
	const queryClient = useQueryClient();

	const navigate = useNavigate();
	const { id } = useParams();

	const { isLoading, isError, data: item, error} = useQuery({
		queryKey: ['item', id],
		queryFn: () => getItemsById(id)
	});

	const updateItemMutation = useMutation({
		mutationFn: updateItem,
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['results']})
			navigate('/inventory')
		}
	})

	if (isLoading) {
		return <div className="container mt-3">Loading...</div>;
	}

	if (isError) {
		return <div className="container mt-3">Error Loading Data...{error.message}</div>;
	}

	const handleSubmit = (updatedItem) => {
		updateItemMutation.mutate({id, ...updatedItem})
	}

	return (
			<>
				<div className='container mt-3'>EDIT PAGE</div>
				<div className='container mt-3'><EditFormInventory  onSubmit={handleSubmit} initialValue={item}/></div>
			</>
	)
}

export default EditItem