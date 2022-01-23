import { useQuery } from "@apollo/client";
import { GET_STARWARS } from "../graphql/getStarWars";
import { Loading } from "./loading/Loading";
import { StarWarsCard } from "./starWars/StarWarsCard";
import { people } from "./starWars/definitions";

export const StarWars = () => {
  const { data, error, loading } = useQuery(GET_STARWARS);
  if (loading) return <Loading />;
  if (error) return <p>`Error... ${error.message}`</p>;

  return (
    <div>
      <div
        style={{
          height: "9rem",
          width: "100%",
          textAlignLast: "center",
          marginTop: "1rem",
        }}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png"></img>
      </div>
      <div
        style={{ width: "100%", marginTop: "1rem", marginBottom: "1rem" }}
        className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn"
      >
        {data.allPeople.people.map((item: people) => (
          <StarWarsCard data={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};
