import { Pendataan } from "@/types";

export default async function getData(): Promise<Pendataan[]> {
  // Fetch data from your API here.
  return [
    {
      no: 1,
      nim: "123456",
      noSkYudisium: "490/UN39.5.FBS/PK.04/2024",
      namaMahasiswa: "John Doe",
      programStudi: "Sastra Inggris",
      pendidikanSebelumnya: "SMA",
      jalur: "Reguler",
      ipk: 3.75,
      konfirmasi: true,
    },
    {
      no: 2,
      nim: "789012",
      noSkYudisium: "491/UN39.5.FEKON/PK.04/2024",
      namaMahasiswa: "Jane Doe",
      programStudi: "Manajemen",
      pendidikanSebelumnya: "D3",
      jalur: "Prestasi",
      ipk: 3.88,
      konfirmasi: false,
    },
    // ... tambahkan data dummy lainnya sesuai kebutuhan Anda
  ];
}
