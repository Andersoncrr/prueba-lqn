export interface person {
  name: string;
  birthYear: string;
  eyeColor: string;
  skinColor: string;
  mass: string;
  id: string;
  hairColor: string;
  filmConnection: {
    films: [
      {
        title: string;
        planetConnection: {
          planets: [
            {
              name: string;
            }
          ];
        };
      }
    ];
  };
}

export interface Query {
  person: person;
}

export interface Variables {
  ID: string | null;
}

export interface people {
      name: string
      id:string
}