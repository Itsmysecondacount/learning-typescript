import { FunctionComponent, FC, useEffect, useState } from "react";
import axios from "axios";
// Si usas el type es para que a la hora de hacer el buid
// el compilador los pueda eliminar

// export const RandomFox = () => {
//     return (
//       <>
//         <img />
//       </>
//     );
//   };   FORMA IMPLICITA

export const RandomFox = (): JSX.Element => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://randomfox.ca/floof/",
    })
      .then((res) => {
        console.log(res);
        setUrl(res.data.image);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <img
        width={320}
        height="auto"
        className="rounded"
        src={url}
        alt="Imagen Zorro"
      />
    </>
  );
}; //FORMA EXPLICITA(La recomendada)

// export const RandomFox: FunctionComponent = (): JSX.Element => {
//     return (
//       <>
//         <img />
//       </>
//     );
//   }; Es muy similar a la segunda, es una ayuda de ract que nos daba
// para poder excribir TypeScript

//   export const RandomFox: FC = (): JSX.Element => {
//     return (
//       <>
//         <img />
//       </>
//     );
//   };
