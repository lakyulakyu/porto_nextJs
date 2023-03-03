import react from "react";
import Image from "next/image";
import img_1 from "/public/image/pict-1.png";
import img_2 from "/public/image/pict-1.png";
import img_3 from "/public/image/pict-1.png";

export default function Reaction() {
  return (
    <div className="w-full flex justify-center bg-slate-50 ">
      <div className="max-w-screen-lg">
        <section className="p-4 lg:p-8 bg-stone-400 flex justify-center dark:text-gray-500">
          <div className="container mx-auto space-y-12">
            <div
              className="flex flex-col hover:duration-300  duration-500 lg:hover:scale-105 
        md:hover:scale-95  overflow-hidden rounded-md shadow-sm lg:flex-row"
            >
              <Image
                src={img_2}
                alt="Gambar"
                width={"0"}
                height={"0"}
                className="w-auto rounded aspect-video h-80 object-cover"
              />

              <div className="flex flex-col justify-center flex-1 p-6 bg-slate-50">
                <h3 className="text-3xl font-bold">Duta SMK </h3>
                <p className="my-6 ">
                  menjadi duta smk menjadi hal yang membuat saya bangga .apa
                  lagi jika saya di keal orang orang serta menjadi bagian dari
                  sekolah
                </p>
              </div>
            </div>

            <div
              className="flex flex-col hover:duration-300  duration-500 lg:hover:scale-105 
        md:hover:scale-95 overflow-hidden rounded-md shadow-sm lg:flex-row-reverse"
            >
              <Image
                src={img_1}
                alt="Gambar"
                width={"0"}
                height={"0"}
                className="w-auto rounded aspect-video h-80  object-cover"
              />

              <div className="flex flex-col justify-center flex-1 p-6 bg-slate-50">
                <h3 className="text-3xl font-bold">
                  We're not reinventing the wheel
                </h3>
                <p className="my-6 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aliquam possimus quas, error esse quos.
                </p>
              </div>
            </div>

            <div
              className="flex flex-col hover:duration-300  duration-500 lg:hover:scale-105 
        md:hover:scale-95 overflow-hidden rounded-md shadow-sm lg:flex-row"
            >
              <Image
                src={img_3}
                alt="Gambar"
                width={"0"}
                height={"0"}
                className="w-auto rounded aspect-video h-80 object-cover"
              />
              <div className="flex flex-col justify-center flex-1 p-6 bg-slate-50">
                <h3 className="text-3xl font-bold">
                  We're not reinventing the wheel
                </h3>
                <p className="my-6 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aliquam possimus quas, error esse quos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
