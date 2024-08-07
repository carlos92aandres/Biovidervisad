import { useState } from "react";
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
    <div className='font-["Julius Sans One"] font-light min-h-screen flex flex-col'>
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
              <a href="#riquezaNatural">Riqueza Natural</a>
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
            className={`fixed flex justify-center items-center transition-opacity    ${menu
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
                  <a href="#riquezaNatural">Riqueza Natural</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </header>
      <main className='flex-grow'>
        <section className="bg-[url('/bird.svg')] h-[500px] min-w-screen bg-center bg-cover pt-10">
          <div className="pt-7">
            <h1 className='font-["Julius Sans One"] font-light  text-[#FFF67E] p-6 sm:text-4xl whitespace-break-spaces text-xl w-[250px] pl-6]'>
              Senderos y Biodiversidad CundiBoyacense
            </h1>
          </div>
          <div id="sobrenosotros" className="h-[600px]"></div>
        </section>

        <section>
          <article className="text-white bg-gray-600 ">
            <div className="gap-3 p-6 sm:flex">
              <div className=" sm:grid sm:mt-9 ">
                <h2 className="text-2xl text-[#BFEA7C] sm:h-[50px]">
                  Sobre Nosotros
                </h2>
                <div className="sm:w-[400px]">
                  <p className="font-light text-[#BFEA7C] ">
                    Descubre la riqueza única de la biodiversidad en Cundinamarca
                    y Boyacá. Esta región alberga especies únicas en el mundo y
                    varias endémicas, convirtiéndose en un tesoro natural
                    invaluable. Acompáñanos en un viaje por senderos accesibles
                    para conocer de cerca la flora, fauna y ecosistemas que hacen
                    de este lugar un paraíso biodiverso. ¡Explora, aprende y
                    celebra la naturaleza con nosotros: Un grupo de estudiantes de Talento Tech,
                    que quiere dar a conocer la Biovidersidad de la Región CunduBoyacense!
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
          <div className="grid bg-[#416D19] ">     
            <h2 className="pl-3 pt-6 text-2xl text-[#BFEA7C] sm:h-[50px] ">
              Senderos
            </h2>
            <div className="w-[320px] h-[320px] text-center mb-[35px] ml-[35px] md:translate-x-1/2 md:w-[380px]">
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
            <section className="">
              <div id="riquezaNatural" className=" h-[420px] grid gap-5 pl-2 bg-[#D8F8A7]">
                <h2 className="text-[#416D19] pl-3 pt-5 text-2xl md:text-4xl ">
                  Riqueza Verde
                </h2>
                <p className="text-[#243A10] md:p-4 md:text-xl">
                  Descubre la biodiversidad única de Cundinamarca y Boyacá. Estas
                  regiones colombianas, con sus páramos y bosques andinos,
                  albergan especies endémicas como el frailejón y el reyezuelo de
                  frente roja. Su flora y fauna no solo enriquecen nuestro
                  entorno, sino que también mantienen el equilibrio ecológico.
                  Proteger estas especies es crucial para conservar nuestro
                  patrimonio natural y asegurar que las futuras generaciones
                  disfruten de esta belleza. Únete a nosotros para celebrar y
                  preservar la biodiversidad de Cundinamarca y Boyacá.
                </p>
              </div>
            </section>

            <section className="bg-[#9BCF53] grid gap-3">
              <div className="">
                <h2 className="text-[#4A791E] pl-3 pt-5 font-light ml-4 text-2xl md:mt-5 md:text-4xl">Fauna</h2>
              </div>
              <div className=" grid gap-5 md:flex md:justify-center md:items-center md:gap-0 md:p-3">
                <div className="grid gap-5 content-center justify-items-center md:gap-0 md:h-[350px] ">
                  <img
                    className="h-[300px] w-[300px] md:w-[230px] md:h-[230px]"
                    src="/conejoCampo.png"
                    alt=""
                  />
                  <p className="text-[#FFFFFF] p-2">
                    Oryctolagus cuniculus: También conocido como el conejo de
                    montaña o conejo del páramo, se encuentra en los
                    ecosistemas de páramo de los Andes.
                  </p>
                </div>

                <div className="grid gap-5 content-center justify-items-center md:h-[350px]">
                  <img
                    className="h-[300px] w-[300px] md:w-[230px] md:h-[230px]"
                    src="ColumbaCorensis.png"
                    alt=""
                  />
                  <p className="text-[#FFFFFF] p-2">
                    Lachesis muta: Una serpiente venenosa que se encuentra en la
                    región andina, aunque su distribución es más amplia.
                  </p>
                </div>
                <div className="grid gap-5 content-center justify-items-center md:h-[350px]">
                  <img
                    className="h-[300px] w-[300px] md:w-[230px] md:h-[230px]"
                    src="LachesisMuta.png"
                    alt="Lachesis Muta"
                  />
                  <p className="text-[#FFFFFF] p-2">
                    Columba corensis: Una paloma endémica que habita en los
                    bosques de montaña.
                  </p>
                </div>

              </div>
              <div>
                <p className="text-[#243A10] p-6">
                  Embárcate en un viaje por los senderos ecológicos de
                  Cundinamarca y Boyacá y descubre una fauna fascinante y única.
                  Estos ecosistemas montañosos y de páramo albergan una gran
                  variedad de especies endémicas que no se encuentran en ningún
                  otro lugar del mundo. Desde el escurridizo conejo de montaña
                  hasta la serpiente venenosa de la región, cada encuentro con
                  la vida silvestre ofrece una experiencia inolvidable. Aprecia
                  cómo estos animales han evolucionado para adaptarse a sus
                  hábitats específicos y contribuye a la conservación de su
                  entorno natural visitando estas áreas protegidas.
                </p>
              </div>
            </section>

            <section className="bg-[#8dbf48] grid gap-3 pt-5">
              <div className="">
                <h2 className="text-[#4A791E] pl-3 pt-5 text-2xl ml-4 md:text-4xl ">Flora</h2>
              </div>
              <div className="  grid gap-5 md:flex md:justify-center md:items-center md:gap-0 md:p-3">
                <div className="grid gap-5 content-center justify-items-center md:gap-0 md:h-[350px]">
                  <img
                    className="h-[300px] w-[300px] md:w-[230px] md:h-[230px]"
                    src="/frailejon.png"
                    alt="frailejón"
                  />
                  <p className="text-[#FFFFFF] p-2">
                    Espeletia pycnophylla: Conocida como frailejón, es una
                    planta característica de los páramos de los Andes colombianos.
                  </p>
                </div>

                <div className="grid gap-5 content-center justify-items-center md:h-[350px]">
                  <img
                    className="h-[300px] w-[300px] md:w-[230px] md:h-[230px]"
                    src="/andicola.png"
                    alt="Eryngium andicola"
                  />
                  <p className="text-[#FFFFFF] p-2">
                    Eryngium andicola: Una planta de la familia de las apiáceas
                    que crece en los páramos y bosques de montaña.
                  </p>
                </div>
                <div className="grid gap-5 content-center justify-items-center md:h-[350px]">
                  <img className="h-[300px] w-[300px] md:w-[230px] md:h-[230px]"
                    src="/lavis.png"
                    alt="Senecio laevis"
                  />
                  <p className="text-[#FFFFFF] p-2">
                    Senecio laevis: Otra especie de la familia Asteraceae,
                    endémica de los páramos.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#243A10] p-6">
                  La flora de Cundinamarca y Boyacá es un verdadero tesoro de
                  biodiversidad que te espera en nuestros senderos ecológicos.
                  Los exuberantes bosques andinos y los majestuosos páramos
                  están adornados con plantas endémicas que sólo crecen en esta
                  región. Observa la imponente belleza del frailejón y la
                  resistencia de otras especies adaptadas a las condiciones
                  extremas de altura. Estos senderos ofrecen una oportunidad
                  única para conectarte con la vegetación local y comprender la
                  importancia de conservar estos ecosistemas vitales para la
                  salud ambiental.
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
      <footer className='bg-[#25370c] text-white p-4'>
        <div className='flex justify-center gap-3 text-[#faf6c2] text-lg font-light'>
          <a className='cursor-pointer hover:text-white hover:-translate-y-1 transition hover:duration-200' href="https://github.com/carlos92aandres" target="_blank">Carlos Garcia</a>
          <a className='cursor-pointer hover:text-white hover:-translate-y-1 transition hover:duration-200' href="https://github.com/Linda-Reyes" target="_blank">Linda Reyes</a>
          <a className='cursor-pointer hover:text-white hover:-translate-y-1 transition hover:duration-200' href="https://github.com/Dianisvibra5" target="_blank">Diana Diaz</a>
          <a className='cursor-pointer hover:text-white hover:-translate-y-1 transition hover:duration-200' href="https://github.com/jcesarrios" target="_blank">Julio Rios</a>
        </div>
        <h3 className='flex justify-center text-xl font-light text-[#FFF67E]'>
          © Copyright todos los derechos reservados
        </h3>
      </footer>

    </div>
  );
}

export default App;