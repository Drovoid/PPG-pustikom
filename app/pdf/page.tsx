"use client";

import React from "react";
import Image from "next/image";
import { usePDF } from "react-to-pdf";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableCellShort,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import getDataNilai from "@/data/dataNilai";

const Component = () => {
  const dataNilai = getDataNilai();
  const krs = [
    {
      sandi: "00051122",
      mataKuliah: "Pendidikan Pancasila",
      sks: "2",
      nilai: "A",
      sksxnilai: "8.0",
    },
    {
      sandi: "00051072",
      mataKuliah: "Ilmu Alamiah Dasar",
      sks: "2",
      nilai: "A-",
      sksxnilai: "7.4",
    },
    {
      sandi: "62150272",
      mataKuliah: "Teori Dan Praktek Atletik",
      sks: "4",
      nilai: "B+",
      sksxnilai: "9.9",
    },
    {
      sandi: "68050222",
      mataKuliah: "Anatomi",
      sks: "3",
      nilai: "A-",
      sksxnilai: "7.4",
    },
    {
      sandi: "16050013",
      mataKuliah: "Dasar-Dasar Rekreasi",
      sks: "2",
      nilai: "A",
      sksxnilai: "8.0",
    },
    {
      sandi: "60050302",
      mataKuliah: "Belajar Motorik",
      sks: "3",
      nilai: "B",
      sksxnilai: "6.0",
    },
    {
      sandi: "00051142",
      mataKuliah: "Bahasa Indonesia",
      sks: "2",
      nilai: "B+",
      sksxnilai: "6.6",
    },
    {
      sandi: "16050023",
      mataKuliah: "Teori dan Praktek Renang",
      sks: "2",
      nilai: "A",
      sksxnilai: "8.0",
    },
    {
      sandi: "68150212",
      mataKuliah: "Filsafat Keolahragaan",
      sks: "3",
      nilai: "A-",
      sksxnilai: "11.1",
    },
    {
      sandi: "68050532",
      mataKuliah: "Bahasa Inggris",
      sks: "2",
      nilai: "A",
      sksxnilai: "8.0",
    },
    {
      sandi: "60054082",
      mataKuliah: "Fisiologi",
      sks: "2",
      nilai: "B+",
      sksxnilai: "6.6",
    },
    {
      sandi: "68250203",
      mataKuliah: "Kewirausahaan",
      sks: "2",
      nilai: "A",
      sksxnilai: "8.0",
    },
    {
      sandi: "16050033",
      mataKuliah: "Teori Bermain",
      sks: "3",
      nilai: "A-",
      sksxnilai: "11.1",
    },
    {
      sandi: "16050042",
      mataKuliah: "Olahraga Tradisional",
      sks: "2",
      nilai: "B",
      sksxnilai: "6.0",
    },
    {
      sandi: "00051062",
      mataKuliah: "Kesehatan Masyarakat",
      sks: "3",
      nilai: "B+",
      sksxnilai: "6.6",
    },
    {
      sandi: "68350072",
      mataKuliah: "Olahraga Tradisional",
      sks: "2",
      nilai: "B",
      sksxnilai: "6.0",
    },
    {
      sandi: "68350072",
      mataKuliah: "Out Bound",
      sks: "3",
      nilai: "A",
      sksxnilai: "9.0",
    },
    {
      sandi: "00052033",
      mataKuliah: "Pendidikan Agama Islam",
      sks: "2",
      nilai: "A-",
      sksxnilai: "7.4",
    },
    {
      sandi: "16050262",
      mataKuliah: "Keselamatan olahraga rekreasi air",
      sks: "3",
      nilai: "B+",
      sksxnilai: "6.6",
    },
    {
      sandi: "63150102",
      mataKuliah: "Sarana Dan Prasarana Olalırama",
      sks: "2",
      nilai: "B-",
      sksxnilai: "5.4",
    },
    {
      sandi: "68050292",
      mataKuliah: "Perkembangan Gerak",
      sks: "2",
      nilai: "B",
      sksxnilai: "6.0",
    },
    {
      sandi: "16050292",
      mataKuliah: "Olahraga lanjut usia",
      sks: "2",
      nilai: "B+",
      sksxnilai: "6.6",
    },
    {
      sandi: "16050072",
      mataKuliah: "Olahraga Permainan",
      sks: "3",
      nilai: "A-",
      sksxnilai: "11.1",
    },
    {
      sandi: "60050132",
      mataKuliah: "Teori dan Praktek Sepak Bola",
      sks: "2",
      nilai: "B+",
      sksxnilai: "6.6",
    },
    {
      sandi: "16050252",
      mataKuliah: "Keselamatan olahraga rekreasi Jarat",
      sks: "3",
      nilai: "B",
      sksxnilai: "6.0",
    },
    {
      sandi: "60050202",
      mataKuliah: "Teori dan Praktek Pencak Silat",
      sks: "2",
      nilai: "A",
      sksxnilai: "8.0",
    },
    {
      sandi: "68050272",
      mataKuliah: "Teori dan Praktek Senam Aerobik",
      sks: "2",
      nilai: "B+",
      sksxnilai: "6.6",
    },
    {
      sandi: "68150102",
      mataKuliah: "Biomekanika",
      sks: "3",
      nilai: "A",
      sksxnilai: "9.0",
    },
    {
      sandi: "62150642",
      mataKuliah: "Manajemen Olahraga Rekreasi",
      sks: "2",
      nilai: "A-",
      sksxnilai: "7.4",
    },
    {
      sandi: "16050112",
      mataKuliah: "Sport Medicine",
      sks: "2",
      nilai: "B",
      sksxnilai: "6.0",
    },
    {
      sandi: "16050112",
      mataKuliah: "Teori dan praktek hiking",
      sks: "3",
      nilai: "A-",
      sksxnilai: "7.4",
    },
    {
      sandi: "16050152",
      mataKuliah: "Olahraga Rekreasi dan Kelestarian",
      sks: "2",
      nilai: "B+",
      sksxnilai: "6.6",
    },
    {
      sandi: "60050182",
      mataKuliah: "Teori dan Praktek Tenis Meja",
      sks: "2",
      nilai: "B",
      sksxnilai: "6.0",
    },
    {
      sandi: "16050082",
      mataKuliah: "Teori dan Praktek Voli pantai",
      sks: "2",
      nilai: "B+",
      sksxnilai: "6.6",
    },
    {
      sandi: "63150542",
      mataKuliah: "Teori dan Praktek Golf",
      sks: "3",
      nilai: "A-",
      sksxnilai: "7.4",
    },
    {
      sandi: "16050093",
      mataKuliah: "Teori dan Praktek Senam Nusantara",
      sks: "2",
      nilai: "B",
      sksxnilai: "6.0",
    },
    {
      sandi: "16050102",
      mataKuliah: "Strategi dan Bisnis Olahraga Rekreasi",
      sks: "3",
      nilai: "A",
      sksxnilai: "9.0",
    },
    {
      sandi: "60050192",
      mataKuliah: "Sosiologi Olahraga",
      sks: "2",
      nilai: "A-",
      sksxnilai: "7.4",
    },
    {
      sandi: "60050192",
      mataKuliah: "Teori dan Praktek Tenis Lapangan",
      sks: "2",
      nilai: "B+",
      sksxnilai: "6.6",
    },
    {
      sandi: "16050402",
      mataKuliah: "Dinamika Kelompok",
      sks: "3",
      nilai: "A",
      sksxnilai: "9.0",
    },
    {
      sandi: "16050412",
      mataKuliah: "Estetika Gerak dan Musik",
      sks: "2",
      nilai: "B",
      sksxnilai: "6.0",
    },
    {
      sandi: "16050422",
      mataKuliah: "Pembinaan Kesegaran Jasmani",
      sks: "3",
      nilai: "A-",
      sksxnilai: "7.4",
    },
    {
      sandi: "60050112",
      mataKuliah: "Teori dan Praktek Bola Basket",
      sks: "2",
      nilai: "B+",
      sksxnilai: "6.6",
    },
    {
      sandi: "60052012",
      mataKuliah: "Metode Penelitian",
      sks: "3",
      nilai: "A",
      sksxnilai: "9.0",
    },
    {
      sandi: "16050372",
      mataKuliah: "Psikologi Masyarakat",
      sks: "2",
      nilai: "B",
      sksxnilai: "6.0",
    },
    {
      sandi: "16050372",
      mataKuliah: "Teori dan Praktek Panjat Tebing",
      sks: "3",
      nilai: "A-",
      sksxnilai: "7.4",
    },
  ];

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <div>
      <div ref={targetRef}>
        <div className="container">
          <div className="flex flex-row justify-evenly items-center pt-16">
            <Image src="/images/unj.png" alt="logo" width="170" height="170" />
            <div className="flex flex-col text-3xl text-center space-y-3 my-auto">
              <div className="font-semibold">
                KEMENTERIAN PENDIDIKAN, KEBUDAYAAN, RISET, DAN TEKNOLOGI
              </div>
              <div className="tracking-wider text-6xl font-bold">
                UNIVERSITAS NEGERI JAKARTA
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-semibold text-center">
              Transkrip Akademik
            </div>
            <div className="text-lg text-center">Nomor: 202316056039</div>
            <div className="text-lg text-center">
              Lampiran Sertifikat Pendidik NINA : 852042023000308
            </div>
          </div>
          <div className="flex flex-row ms-11 mt-5">
            <div className="">
              <Image src="/pdfs/3x4.jpg" alt="logo" width="170" height="170" />
            </div>
            <div className="flex flex-col ms-12">
              <ol className="space-y-1">
                <li>Nama</li>
                <li>Nomor Induk Mahasiswa</li>
                <li>Tempat dan Tanggal Lahir</li>
                <li>Program Studi</li>
                <li>Bidang Studi</li>
                <li>Jenjang Program</li>
                <li>Mulai Terdaftar</li>
                <li>Tanggal Lulus</li>
                <li>Program Studi Sebelum</li>
              </ol>
            </div>
            <div className="flex flex-col ms-16">
              <ol className="space-y-1">
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
              </ol>
            </div>
            <div className="flex flex-col ms-5">
              <ol className="space-y-1">
                <li>Yusup Hamdani</li>
                <li>1605618001</li>
                <li>Cianjur, 16 Maret 1999</li>
                <li>Pendidikan Prof Guru</li>
                <li>Pendidikan Profesi</li>
                <li>2019</li>
                <li>31 Agustus 2023</li>
                <li>aaa</li>
                <li>aaa</li>
              </ol>
            </div>
          </div>
          <div className="ms-11 mt-7 flex flex-row justify-evenly">
            <Table>
              <TableCaption className="pt-20 mb-64">1 / 2</TableCaption>
              <TableHeader>
                <TableRow className="border-none">
                  <TableHead className="text-black font-semibold">
                    SANDI
                  </TableHead>
                  <TableHead className="text-center text-black font-semibold">
                    MATA KULIAH
                  </TableHead>
                  <TableHead className="text-center text-black font-semibold">
                    SKS
                  </TableHead>
                  <TableHead className="text-center text-black font-semibold">
                    NILAI
                  </TableHead>
                  <TableHead className="text-center text-black font-semibold">
                    SKS X NILAI
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {krs.map((sandi) => (
                  <TableRow key={sandi.sandi} className="border-none">
                    <TableCellShort className="font-medium w-[150px]">
                      {sandi.sandi}
                    </TableCellShort>
                    <TableCellShort>{sandi.mataKuliah}</TableCellShort>
                    <TableCellShort className="text-center w-[50px]">
                      {sandi.sks}
                    </TableCellShort>
                    <TableCellShort className="text-center w-[150px]">
                      {sandi.nilai}
                    </TableCellShort>
                    <TableCellShort className="text-center w-[300px]">
                      {sandi.sksxnilai}
                    </TableCellShort>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-semibold text-center">
              Transkrip Akademik
            </div>
            <div className="text-lg text-center">Nomor: 202316056039</div>
            <div className="text-lg text-center">
              Lampiran Sertifikat Pendidik NINA : 852042023000308
            </div>
          </div>
          <div className="ms-11 mt-7 flex flex-row justify-evenly">
            <Table>
              <TableHeader>
                <TableRow className="border-none ">
                  <TableHead className="text-black font-semibold h-10">
                    SANDI
                  </TableHead>
                  <TableHead className="text-center text-black font-semibold h-10">
                    MATA KULIAH
                  </TableHead>
                  <TableHead className="text-center text-black font-semibold h-10">
                    SKS
                  </TableHead>
                  <TableHead className="text-center text-black font-semibold h-10">
                    NILAI
                  </TableHead>
                  <TableHead className="text-center text-black font-semibold h-10">
                    SKS X NILAI
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {krs.slice(0, 20).map((sandi) => (
                  <TableRow key={sandi.sandi} className="border-none">
                    <TableCellShort className="font-medium w-[150px]">
                      {sandi.sandi}
                    </TableCellShort>
                    <TableCellShort>{sandi.mataKuliah}</TableCellShort>
                    <TableCellShort className="text-center w-[50px]">
                      {sandi.sks}
                    </TableCellShort>
                    <TableCellShort className="text-center w-[150px]">
                      {sandi.nilai}
                    </TableCellShort>
                    <TableCellShort className="text-center w-[300px]">
                      {sandi.sksxnilai}
                    </TableCellShort>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="space-y-1 mt-10 flex flex-row">
            <div className="flex flex-col ms-12">
              <ol className="space-y-1">
                <li>Jumlah Mata Kuliah</li>
                <li>Jumlah SKS</li>
                <li>Jumlah Bobot</li>
                <li className="py-4">Indeks Prestasi Kumulatif (IPK)</li>
                <li>Predikat</li>
              </ol>
            </div>
            <div className="flex flex-col ms-16">
              <ol className="space-y-1">
                <li>=</li>
                <li>=</li>
                <li>=</li>
                <li className="py-4">=</li>
                <li>=</li>
              </ol>
            </div>
            <div className="flex flex-col ms-5">
              <ol className="space-y-1">
                <li>68</li>
                <li>145</li>
                <li>515,2</li>
                <li className="py-3">
                  <MathJaxContext>
                    <MathJax>
                      {
                        "\\(\\frac{ Jumlah (SKS x Bobot)}{Total SKS} = \\frac{ 515,2 }{ 145 }\\ = \\ 3,55 \\)"
                      }
                    </MathJax>
                  </MathJaxContext>
                </li>
                <li className="font-semibold">Sangat Memuaskan</li>
              </ol>
            </div>
          </div>
          <div className="ms-[2.85rem] py-2">
            Judul Skripsi : Strategi Pengembangan Olahraga Hash di Komunitas
            Bandung Hash House Harrier
          </div>
          <div className="mt-20 flex flex-row justify-between ms-11">
            <div className="border-2 border-black p-4">
              <p>Keterangan Bobot Nilai :</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-black text-left">
                      Tingkat Penugasan
                    </TableHead>
                    <TableHead className="text-black">Nilai</TableHead>
                    <TableHead className="w-[100px] text-center text-black">
                      Bobot
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dataNilai.map((data) => (
                    <TableRow key={data.nilai} className="border-none">
                      <TableCellShort className="font-medium text-center">
                        {data.tingkatPenugasan}
                      </TableCellShort>
                      <TableCellShort className="text-left ps-6">
                        {data.nilai}
                      </TableCellShort>
                      <TableCellShort className="text-center w-[100px]">
                        {data.bobot}
                      </TableCellShort>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex flex-col w-[350px]">
              <div className="flex flex-col justify-between h-[300px] text-left">
                <div>
                  <p>Jakarta, 31 Agustus 2023</p>
                  <p>Wakil Rektor 1</p>
                </div>
                <div>
                  <p>Prof. Dr Johansyah Lubis, M.Pd</p>
                  <p>NIP. 19670508 199303 1 001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => toPDF()}>Download PDF</button>
    </div>
  );
};

const page = () => {
  return (
    <div>
      <Component />
    </div>
  );
};

export default Component;
