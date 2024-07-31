import { useEffect, useState } from "react";
import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Importar estilos de Leaflet
import L from "leaflet"; // Importar Leaflet para solucionar problema de iconos

function App() {
  const [menu, setMenu] = useState(false);
  const submitShowMenu = () => {
    setMenu(!menu);
  };

  const zoom = 9;
  const Sumapaz = [4.41667, -74.1];
  const Chicaque = [4.60634279, -74.30475616];
  const tunos = [4.6161871, -74.35184479];
  const monarca = [4.85580111, -74.09506989];
  const flores = [4.72426987, -74.25228119];
  const Oso = [4.8295269, -47.0136795];
  const vega = [5.00206041, -74.33998871];

  return (
    <div className='font-["Julius Sans One"] font-light'>
      <header>
        <div className="fixed text-[#BFEA7C] h-[64px] bg-[#416D19] flex justify-between w-full items-center px-4 text-normal font-semibold">
          <ul className="gap-3 ">
            <li className="text-xl cursor-pointer">BioCundi</li>
          </ul>
          <ul className="cursor-pointer sm:flex hidden sm:gap-3">
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150">
              <a href="#sobrenosotros">Sobre nosotros</a>
            </li>
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150">
              <a href="#senderos">Senderos</a>
            </li>
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150">
              <a href="">Experiencias</a>
            </li>
            <li className="hover:text-white hover:-translate-y-1 transition hover:duration-150">
              <a href="">Paisajes</a>
            </li>
          </ul>
          <button onClick={() => submitShowMenu()} className="sm:hidden">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/menu--v3.png"
              alt="menu--v3"
            />
          </button>
          <section
            className={`fixed flex justify-center items-center transition-opacity    ${
              menu
                ? "opacity-100 visible z-20 durarion-200"
                : "opacity-0 invisible duration-200 "
            }`}
          >
            <div className="h-[200px] w-screen fixed top-[60px] bottom-0 right-0 left-0 bg-gradient-to-b from-[#416D19] to-[#9BCF53]">
              <ul className="grid ml-2 font-semibold  my-4 gap-10 text-[#FFF67E]">
                <li className="cursor-pointer hover:tracking-wider duration-200 ">
                  <a href="#sobrenosotros">Sobre nosotros</a>
                </li>
                <li className="cursor-pointer hover:tracking-wider duration-200 ">
                  <a href="#senderos">Senderos</a>
                </li>
                <li className="cursor-pointer hover:tracking-wider duration-200 ">
                  <a href="">Experiencias</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </header>
      <section className="bg-[url('/bird.svg')] h-[500px] min-w-screen bg-center bg-cover pt-10">
        <div className="pt-7">
          <h1 className='font-["Julius Sans One"] font-light  text-[#FFF67E] sm:text-4xl whitespace-break-spaces text-xl w-[250px] pl-6]'>
            Senderos y Biodiversidad CundiBoyacense
          </h1>
        </div>
        <div id="sobrenosotros" className="h-[600px]"></div>
      </section>

      <section>
        <article className="text-white bg-gray-600 ">
          <div className="gap-3 p-6 sm:flex">
            <div className=" sm:grid sm:mt-9 ">
              <h2 className="text-2xl text-[#FFF67E] sm:h-[50px]">
                Quienes somos
              </h2>
              <div className="sm:w-[400px]">
                <p className="font-light text-[#FFF67E] ">
                  Descubre la riqueza única de la biodiversidad en Cundinamarca
                  y Boyacá. Esta región alberga especies únicas en el mundo y
                  varias endémicas, convirtiéndose en un tesoro natural
                  invaluable. Acompáñanos en un viaje por senderos accesibles
                  para conocer de cerca la flora, fauna y ecosistemas que hacen
                  de este lugar un paraíso biodiverso. ¡Explora, aprende y
                  celebra la naturaleza con nosotros!
                </p>
              </div>
            </div>

            <div id="senderos" className="p-6">
              <img className="sm:h-[auto] w-[auto]" src="/imagen1.jpg" alt="" />
            </div>
          </div>
        </article>
      </section>
      <section>
        <div className="grid h-[full] gap-3 bg-[#416D19]">
          <h2 className="pl-5 pt-6 font-light text-2xl text-[#FFF67E] font-semi">
            Senderos
          </h2>
          <div className="w-[320px] h-[320px] text-center ml-[40px] md:translate-x-1/2 md:w-[380px]">
            <MapContainer
              center={monarca}
              zoom={zoom}
              className="w-full h-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              <Marker position={Sumapaz}>
                <Popup>
                  Parque nacional <br />
                  Natural Sumapaz
                </Popup>
              </Marker>
              <Marker position={Chicaque}>
                <Popup>
                  Parque nacional <br />
                  Natural Chicaque
                </Popup>
              </Marker>
              <Marker position={tunos}>
                <Popup>
                  Parque nacional <br />
                  Natural Los tunos
                </Popup>
              </Marker>
              <Marker position={monarca}>
                <Popup>
                  Parque nacional <br />
                  Natural Monarca
                </Popup>
              </Marker>
              <Marker position={flores}>
                <Popup>
                  Parque nacional <br />
                  Natural de las flores
                </Popup>
              </Marker>
              <Marker position={Oso}>
                <Popup>
                  Parque Montaña <br />
                  del Oso
                </Popup>
              </Marker>
              <Marker position={vega}>
                <Popup>
                  Parque San Felipe <br />
                  de la Vega
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="text-[#FFF67E] text-xl text-center font-light ">
            Aca podrás encontrar las mejores rutas posibles sin necesidad de
            pagar
          </div>
        </div>
      </section>
      <footer className="bg-[#273f10] h-[250px]  text-center grid pt-10">
        <div className="flex justify-center gap-3 text-[#faf6c2] text-lg font-light ">
          <a
            className="cursor-pointer hover:text-white hover:-translate-y-1 transition hover:duration-200"
            href="https://github.com/carlos92aandres"
            target="_blank"
          >
            Carlos Garcia
          </a>

          <a
            className="cursor-pointer hover:text-white hover:-translate-y-1 transition hover:duration-200"
            href="https://github.com/Linda-Reyes"
            target="_blank"
          >
            Linda Reyes
          </a>
          <a
            className="cursor-pointer hover:text-white hover:-translate-y-1 transition hover:duration-200"
            href="https://github.com/Dianisvibra5"
            target="_blank"
          >
            Diana Diaz
          </a>
          <a
            className="cursor-pointer hover:text-white hover:-translate-y-1 transition hover:duration-200"
            href="https://github.com/jcesarrios"
            target="_blank"
          >
            Julio Rios
          </a>
        </div>
        <h3 className="text-xl font-light text-[#FFF67E]">
          © Copyright todos los derechos reservados
        </h3>
      </footer>
    </div>
  );
}

export default App;
