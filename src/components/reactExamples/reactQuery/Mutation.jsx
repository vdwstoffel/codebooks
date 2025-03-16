import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getUsers, addUser } from "../../../helpers/fakeServer";

export default function Mutations() {
  const queryClient = useQueryClient(); // get access to the queryClient

  const {
    isPending: isFetching,
    error,
    data,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  // Mutation Function
  const { isPending: isPosting, mutate } = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => console.log(error),
  });

  // Check the status of the data loading
  if (isFetching) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Error: {error.status} - {error.message}
      </p>
    );

  return (
    <>
      <h1>Mutations</h1>
      <button
        disabled={isPosting}
        onClick={() => mutate({ name: "Doe", age: 101 })}
      >
        {isPosting ? "Loading" : "Post"}
      </button>
      <ul>
        {data.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
