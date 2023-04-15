import Image from "next/image";
import { Inter } from "next/font/google";
import { RandomFox } from "./components/RandomFox";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const urlAp: string = "https://randomfox.ca/floof/";
  const [number, setNumber] = useState<number>(1);

  const { urls } = RandomFox({ urlAp, number });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    setNumber((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        className="rounded-md bg-blue-800 m-10 p-2 text-lg"
        onClick={handleClick}
      >
        Agregar imagen
      </button>
      <div className="flex flex-col-reverse">
        {urls ? (
          urls.map((url, index) => (
            <img
              key={index}
              width={320}
              height="auto"
              className="rounded m-4"
              src={url}
              alt="Imagen Zorro"
            />
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
    </main>
  );
}
