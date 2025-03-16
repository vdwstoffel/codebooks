import { useQuery } from "@tanstack/react-query";

import {getUsers} from "../../../helpers/fakeServer"

export default function BasicReactQueryExample() {

    const { isPending, error, data } = useQuery({
        queryKey: ["data"],
        queryFn: getUsers,
      });
    
      if (isPending) return <p>Loading...</p>;
      if (error)
        return (
          <p>
            Error: {error.status} - {error.message}
          </p>
        );
    
      return (
        <>
          <h1>Basic Setup</h1>
          {data.map(user => <p>{user.name}, {user.age}</p>)}
        </>
      );

}