import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const URL =
      "http://api.catalogo.biodiversidad.co/record_search/search?q=Leopardus%20pardalis";
    axios
      .get(URL)
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(info);

  return (
    <div>
      <header>
        <div className=" text-[#BFEA7C] h-[64px] bg-[#416D19] flex justify-between items-center px-4 text-normal font-semibold ">
          <ul className="gap-3 ">
            <li className="text-xl cursor-pointer">BioCundi</li>
          </ul>
          <ul className="flex gap-3  cursor-pointer   ">
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150 hover: ">
              <i className=""></i> Senderos
            </li>
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150">
              <i className=""></i> Mapas
            </li>
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150">
              <i className=""></i> Animales
            </li>
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150 hover: ">
              <i className=""></i> Paisajes
            </li>
          </ul>
        </div>
      </header>
      <section className="">
        <div className="pt-7 pl-[80px]">
          <h1 className='font-["Julius Sans One"] font-light  text-[#FFF67E] text-4xl whitespace-break-spaces w-[450px]'>
            Senderos y Biodiversidad CundiBoyacense
          </h1>
        </div>
        <div className="h-[600px]">

      </div>
      </section>
      
      <section>
        <article className="flex text-white bg-gray-600">
          <div className=" flex gap-3 p-6">
            <div className="grid gap-4">
              <h2 className="text-2xl">About us</h2>
              <div className="">
                <p className="font-light ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  impedit sapiente optio voluptates dolorum architecto mollitia
                  maiores possimus nemo voluptatum unde officia, tempore
                  corporis animi sequi atque vero nobis delectus.
                </p>
              </div>
            </div>

            <div className="p-6">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias adipisci dignissimos cupiditate, distinctio quo ex.
                Expedita praesentium nobis ipsa atque, cumque provident vero?
                Rerum ad alias odit suscipit tenetur consequuntur?
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
