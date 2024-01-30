"use client";

import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { pemberkasanSchema } from "@/lib/validations/pemberkasan";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

const PemberkasanForm = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveClick = () => {
    setSelectedFile(null);
  };

  const form = useForm<z.infer<typeof pemberkasanSchema>>({
    resolver: zodResolver(pemberkasanSchema),
    defaultValues: {
      fotoSertifikatPendidik: "",
      nomorSertifikatPendidik: "",
      nomorTranskripNilai: "",
      programStudi: "",
      jenjang: "",
      bidangStudi: "",
      tahunPermulaanTerdaftar: "",
      nomorIndukMahasiswa: "15135324",
      jenisPPG: "",
      gelombangAngkatan: "",
      tahunPPG: "",
      namaSesuaiIjasahS1: "",
      programStudiS1: "",
      jenisKelamin: "",
      tanggalLahir: "",
      tempatLahir: "",
      nik: "",
      alamat: "",
      telpHp: "",
      email: "",
      namaAlamatKantor: "",
      telpKantorFax: "",
      indeksPresentasiAkhir: "",
    },
  });

  function onSubmit(values: z.infer<typeof pemberkasanSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="fotoSertifikatPendidik"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="picture">Foto Sertifikat Pendidik</FormLabel>
              <FormControl>
                <Input
                  id="picture"
                  type="file"
                  className="file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 file:border file:border-solid file:border-gray-700 file:rounded-md border-gray-300"
                  {...field}
                  onChange={handleFileChange}
                />
              </FormControl>
              {selectedFile && (
                <div className="mt-2 relative w-full">
                  <Image
                    src={selectedFile}
                    alt="Preview"
                    width={500}
                    height={500}
                    className="mx-auto"
                  />
                  <button
                    onClick={handleRemoveClick}
                    className="absolute top-0 right-0 rounded-md bg-red-500 text-white py-1 px-2"
                    aria-label="Remove image"
                  >
                    X
                  </button>
                </div>
              )}
              <FormDescription>
                Kriteria Foto Sertifikat Pendidik terdapat pada{" "}
                <a href="#petunjuk-pengisian" className="underline">
                  Petunjuk Pengisian
                </a>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nomorSertifikatPendidik"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Sertifikat Pendidik</FormLabel>
              <FormControl>
                <Input
                  disabled
                  placeholder="Masukkan Nomor Sertifikat Pendidik"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nomorTranskripNilai"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Transkrip Nilai</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan Nomor Transkrip Nilai"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="programStudi"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Program Studi</FormLabel>
              <FormControl>
                <Input
                  disabled
                  placeholder="Pendidikan Profesi Guru"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jenjang"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jenjang</FormLabel>
              <FormControl>
                <Input disabled placeholder="Profesi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bidangStudi"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bidang Studi</FormLabel>
              <FormControl>
                <Input
                  disabled
                  placeholder="Pendidikan Profesi Guru"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tahunPermulaanTerdaftar"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tahun Permulaan Terdaftar</FormLabel>
              <FormControl>
                <Input
                  disabled
                  placeholder="Pendidikan Profesi Guru"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nomorIndukMahasiswa"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Induk Mahasiswa</FormLabel>
              <FormControl>
                <Input disabled placeholder="NIM" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jenisPPG"
          render={({ field }) => (
            <FormItem className="space-y-3 rounded-lg p-3 pb-4 border-2 border-gray-200">
              <FormLabel>Jenis PPG</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Dalam Jabatan" />
                    </FormControl>
                    <FormLabel className="font-normal">Dalam Jabatan</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Prajabat" />
                    </FormControl>
                    <FormLabel className="font-normal">Prajabat</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gelombangAngkatan"
          render={({ field }) => (
            <FormItem className="space-y-3 rounded-lg p-3 pb-4 border-2 border-gray-200">
              <FormLabel>Gelombang Angkatan</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="1" />
                    </FormControl>
                    <FormLabel className="font-normal">1</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="2" />
                    </FormControl>
                    <FormLabel className="font-normal">2</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="3" />
                    </FormControl>
                    <FormLabel className="font-normal">3</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tahunPPG"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tahun PPG</FormLabel>
              <FormControl>
                <Input disabled placeholder="Masukkan Tahun PPG" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="namaSesuaiIjasahS1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Sesuai Ijasah S1</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan Nama Sesuai Ijasah S1"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="programStudiS1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Program Studi S1</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan Program Studi S1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jenisKelamin"
          render={({ field }) => (
            <FormItem className="space-y-3 rounded-lg p-3 pb-4 border-2 border-gray-200">
              <FormLabel>Jenis Kelamin</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Laki-laki" />
                    </FormControl>
                    <FormLabel className="font-normal">Laki-laki</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Perempuan" />
                    </FormControl>
                    <FormLabel className="font-normal">Perempuan</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tanggalLahir"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tanggal Lahir</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  placeholder="Masukkan Tanggal Lahir Anda"
                  {...field}
                />
              </FormControl>
              <FormDescription>Format: Hari/Bulan/Tahun</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tempatLahir"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tempat Lahir</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan Tempat Lahir Anda" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nik"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Induk Kependudukan</FormLabel>
              <FormControl>
                <Input disabled placeholder="Masukkan NIK Anda" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="alamat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan Alamat Anda" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telpHp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telp / HP</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan Telp / HP Anda" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan alamat email Anda" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="namaAlamatKantor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama & Alamat Kantor</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan Nama & Alamat Kantor Anda"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telpKantorFax"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telp Kantor / Fax</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan Telp Kantor / Fax Anda"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="indeksPresentasiAkhir"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Indeks Presentasi Akhir</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan Indeks Presentasi Akhir Anda"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Sesuaikan dengan hasil Pra Transkrip, dengan rumus yang berlaku
                pada BPA (Buku Pedoman Akademik)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 
      tahunPermulaanTerdaftar: "",
      nomorIndukMahasiswa: "",
      jenisPPG: "",
      gelombangAngkatan: "",
      tahunPPG: "",
      namaSesuaiIjasahS1: "",
      programStudiS1: "",
      jenisKelamin: "",
      tanggalLahir: "",
      tempatLahir: "",
      nik: "",
      alamat: "",
      telpHp: "",
      email: "",
      namaAlamatKantor: "",
      telpKantorFax: "",
      indeksPresentasiAkhir: "", */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PemberkasanForm;
