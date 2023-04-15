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

type Props = { urlAp: string; number: number };

export const RandomFox = ({ urlAp, number }: Props) => {
  const [urls, setUrls] = useState<string[]>([]);
  const title: string = `Imagen #${number}`;
  console.log(title);

  useEffect(() => {
    console.log("init axios");
    axios({
      method: "GET",
      url: urlAp,
    })
      .then((res) => {
        console.log(res);
        setUrls((prev) => [...prev, res.data.image]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [number]);

  return {
    urls,
  };
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
