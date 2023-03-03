import React from "react";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import Image from "next/image";
import mypict from "/public/image/pict-1.png";
import Footer from "@/components/foooter";

export default function profile() {
  return (
    <div className="bg-slate-50">
      <Layout title="profile"></Layout>
      <Navbar />
      <section className="bg-slate-50 text-gray-100">
        <div className="flex justify-center items-center mt-8">
          <Image
            src={mypict}
            width="auto"
            height="400"
            className="ml-16  truncate justify-center"
          ></Image>
          <div className=" text-slate-50 font-semibold">
            Zhida marties alfareza
          </div>
        </div>
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14  text-gray-400	">
                <h3 className="text-3xl font-semibold ">Education</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                  Tak kasih tau kalo aku pernah sekolah di....
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 text-gray-400 ">
              <div className="col-span-12 space-y-12 relative  sm:col-span-8 sm:space-y-8   ">
                <div className="flex hover:bg-slate-200 p-4  flex-col sm:relative   ">
                  <h3 className="text-xl font-semibold tracking-wide hover:text-gray-600">
                    TK AL-IKLASH
                  </h3>
                  <time className="text-xs tracking-wide uppercase  text-gray-400">
                    2008-2011
                  </time>
                  <p className="mt-3">
                    gweh sebagai anak tk yah merasa gweh legent bgt ,gimana gak?
                    TK aja gweh 3 tahun cui.
                  </p>
                </div>
                <div className="flex flex-col hover:bg-slate-200 hover:text-gray-600 p-4  sm:relative   ">
                  <h3 className="text-xl font-semibold tracking-wide">
                    SDI AL-HAKIM
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400">
                    2011-2017
                  </time>
                  <p className="mt-3">
                    Sd sih,tapi di sd ini aku masih tergolong angkatan muda
                    gais,gimana ga aku aja angkatan 3 keren ga keren gaa ,yadong
                    keren ,bisa jadi legend juga aku di sini
                  </p>
                </div>
                <div className="flex flex-col hover:bg-slate-200 hover:text-gray-600 p-4  sm:relative   ">
                  <h3 className="text-xl font-semibold tracking-wide">
                    MTsN 1 Tulungagung
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400">
                    2017-2020
                  </time>
                  <p className="mt-3">
                    Mulia dah masuk remaja ,udah ngerti nih sama kerjaan,jujur
                    aja aku disini (bunkannya sombong) ,aku terkenalbanget cui
                    di 5 angkatan ku ,keren gaaa yaaa walaupun ga semua se tapi
                    juga bangga lah masa ga
                  </p>
                </div>
                <div className="flex flex-col hover:bg-slate-200 hover:text-gray-600	 p-4  sm:relative   ">
                  <h3 className="text-xl font-semibold tracking-wide">
                    SMK Telkom Malang
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400">
                    2020-now
                  </time>
                  <p className="mt-3">
                    Ini nih sekolah gue sekarang keren ga?jujur masuk snk ini
                    agak saljur ya tapi gaaao tak jalanin denganbaik kok
                    walaupun agak cryevernicetry
                  </p>
                  <p className="mt-10">Next mana ya??</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
