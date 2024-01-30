import { redirect } from "next/navigation";

import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import PemberkasanForm from "@/components/pemberkasan-form";

export const metadata = {
  title: "Pemberkasan Yudisium",
};

export default async function PemberkasanMahasiswaPage() {
  var user = {
    name: "Fulan bin Fulan",
    nim: "1234567890",
    role: "Bakhum",
    prodi: "S1 Ilmu Komputer",
    fakultas: "Fakultas Ilmu Komputer",
    status: "Lulus",
  };
  return (
    <DashboardShell id="petunjuk-pengisian">
      <DashboardHeader
        heading="Pemberkasan Yudisium"
        text={
          user.status == "Lulus"
            ? "Perhatikan Petunjuk Pengisian"
            : "Maaf, Anda belum dinyatakan lulus, hubungi fakultas anda."
        }
      ></DashboardHeader>
      {user.status == "Lulus" ? (
        <div className="w-full h-full grid items-center mx-auto font-heading px-2 gap-5">
        <div className="w-full border-2 rounded-lg border-black p-3 space-y-3 bg-gray-300 select-text">
          <h3 className="text-xl font-semibold md:text-left text-center">
            Petunjuk Pengisian
          </h3>
          <ul className="list-outside list-disc px-4 space-y-2">
            <li>Upload Foto, sesuai dengan kriteria Sertifikat Pendidik</li>
            <li>
              Kriteria Foto Sertifikat Pendidik dapat dilihat{" "}
              <a
                className="text-blue-600 active:text-blue-400 underline"
                href="pdfs/KRITERIA FOTO PPG PRAJABATAN.pdf"
                download="KRITERIA FOTO PPG PRAJABATAN.pdf"
                target="_blank"
              >
                Disini
              </a>
            </li>
            <li>Nomor Sertifikat Pendidik akan diisi oleh Admin PPG</li>
            <li>
              Program Studi, Bidang Studi dan Jenjang Pendidikan. Tahun
              Permulaan Terdaftar, dan Nomor Induk Mahasiswa tidak dapat
              diperbaiki.
            </li>
            <li>
              Program Studi S1 adalah pendidikan terakhir sebelum masuk ke
              UNJ. Penulisan Program Studi S1 sebagai berikut:
              <br />
              <code className="bg-green-200 select-all">
                Program Studi S1 – Asal LPTK menjadi Pendidikan Biologi
                Universitas Negeri Jakarta
              </code>
            </li>
            <li>
              NIK (No.Induk Kependudukan) harus sesuai dengan KTP-sebanyak 16
              Digit
            </li>
            <li>Format tanggal lahir mengikuti format pada isian </li>
          </ul>
        </div>
        <div className="space-y-8">
          <div className="bg-red-200 rounded-lg">
            <p className="p-3 text-red-700">
              Data ini harap diisi dengan sebenar-benarnya, Tidak ada
              perbaikan data Jika Transkrip Nilai, dan tidak bisa di cetak
              ulang apabila terjadi kesalahan dalam pengisian biodata ini{" "}
            </p>
          </div>
          <PemberkasanForm />
        </div>
      </div>
      ) : (
        null
      )}
    </DashboardShell>
  );
}
