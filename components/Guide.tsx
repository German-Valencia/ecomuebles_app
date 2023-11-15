import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Estamos para asesorarte
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Tu Mejor Elección
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
          Ofrecemos una plataforma en línea para comprar productos de calidad, asequibles, especializándonos en muebles y artículos de segunda mano restaurados y auténticos. Facilitamos transacciones seguras y entregas a domicilio, promoviendo una alternativa sostenible a la compra de productos nuevos. Ayudamos a nuestros clientes a encontrar tesoros económicos, ecológicos y ahorros significativos.
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <Image
          className="w-full object-cover object-center 2xl:rounded-5xl"
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
          className="h-full w-auto"
          src='/meter.svg'
          alt="meter"
          width={16}
          height={158}
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destino</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Baranoa</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Inicio Trayecto</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Barranquilla</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
