import { Transkrip } from "@/types";

export default async function getData(): Promise<Transkrip[]> {
  // Fetch data from your API here.
  return [
    {
      no: 1,
      namaMahasiswa: "Handrian Wibi",
      bidangStudi: "Teknologi Informasi",
      periodeKelulusan: "2023",
      dicetak: 2,
    },
    {
      no: 2,
      namaMahasiswa: "Siti Rahma",
      bidangStudi: "Ilmu Komputer",
      periodeKelulusan: "2022",
      dicetak: 1,
    },
    {
      no: 3,
      namaMahasiswa: "Budi Santoso",
      bidangStudi: "Manajemen Bisnis",
      periodeKelulusan: "2024",
      dicetak: 3,
    },
    {
      no: 4,
      namaMahasiswa: "Lina Indah",
      bidangStudi: "Teknik Elektro",
      periodeKelulusan: "2023",
      dicetak: 0,
    },
    {
      no: 5,
      namaMahasiswa: "Dewi Sartika",
      bidangStudi: "Akuntansi",
      periodeKelulusan: "2022",
      dicetak: 4,
    },
    {
      no: 6,
      namaMahasiswa: "Hadi Purnomo",
      bidangStudi: "Teknik Sipil",
      periodeKelulusan: "2024",
      dicetak: 1,
    },
    {
      no: 7,
      namaMahasiswa: "Ratna Indah",
      bidangStudi: "Ilmu Komunikasi",
      periodeKelulusan: "2023",
      dicetak: 2,
    },
    {
      no: 8,
      namaMahasiswa: "Ivan Pratama",
      bidangStudi: "Teknik Mesin",
      periodeKelulusan: "2022",
      dicetak: 3,
    },
    {
      no: 9,
      namaMahasiswa: "Maya Dewi",
      bidangStudi: "Hukum",
      periodeKelulusan: "2024",
      dicetak: 0,
    },
    {
      no: 10,
      namaMahasiswa: "Rizky Fauzi",
      bidangStudi: "Psikologi",
      periodeKelulusan: "2023",
      dicetak: 2,
    },
    {
      no: 11,
      namaMahasiswa: "Diana Putri",
      bidangStudi: "Kedokteran",
      periodeKelulusan: "2022",
      dicetak: 1,
    },
    {
      no: 12,
      namaMahasiswa: "Arif Rahman",
      bidangStudi: "Ilmu Politik",
      periodeKelulusan: "2024",
      dicetak: 4,
    },
    {
      no: 13,
      namaMahasiswa: "Linda Susanti",
      bidangStudi: "Teknik Kimia",
      periodeKelulusan: "2023",
      dicetak: 3,
    },
    {
      no: 14,
      namaMahasiswa: "Fahmi Rizky",
      bidangStudi: "Filsafat",
      periodeKelulusan: "2022",
      dicetak: 1,
    },
    {
      no: 15,
      namaMahasiswa: "Anita Dewi",
      bidangStudi: "Sastra Inggris",
      periodeKelulusan: "2024",
      dicetak: 2,
    },
    // ... tambahkan data dummy lainnya sesuai kebutuhan Anda
  ];
}
