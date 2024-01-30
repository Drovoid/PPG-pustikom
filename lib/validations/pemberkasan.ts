import * as z from "zod"

export const pemberkasanSchema = z.object({
    fotoSertifikatPendidik: z.string().optional(),
    nomorSertifikatPendidik: z.string().optional(),
    nomorTranskripNilai: z.string().optional(),
    programStudi: z.string().optional(),
    jenjang: z.string().optional(),
    bidangStudi: z.string().optional(),
    tahunPermulaanTerdaftar: z.string().optional(),
    nomorIndukMahasiswa: z.string().min(16).optional(),
    jenisPPG: z.string().optional(),
    gelombangAngkatan: z.string().optional(),
    tahunPPG: z.string().optional(),
    namaSesuaiIjasahS1: z.string().optional(),
    programStudiS1: z.string().optional(),
    jenisKelamin: z.string().optional(),
    tanggalLahir: z.string().optional(),
    tempatLahir: z.string().optional(),
    nik: z.string().optional(),
    alamat: z.string().optional(),
    telpHp: z.string().optional(),
    email: z.string().optional(),
    namaAlamatKantor: z.string().optional(),
    telpKantorFax: z.string().optional(),
    indeksPresentasiAkhir: z.string().optional(),
})

// 1.	Nomor Sertifikat Pendidik : Sudah terisi Otomatis
// 2.	Nomor Transkrip Nilai : Sudah terisi Otomatis
// 3.	Program Studi : Pendidikan Profesi Guru, Sudah terisi Otomatis
// 4.	Jenjang : Profesi 
// 5.	Bidang Studi : Sudah terisi Otomatis
// 6.	Tahun Permulaan Terdaftar : Sudah terisi Otomatis
// 7.	Nomor Induk Mahasiswa : Sudah terisi Otomatis
// 8.	Jenis PPG : Dalam Jabatan / Prajabatan
// 9.	Gelombang / Angkatan : 1, 2, 3
// 10.	Tahun PPG : Sudah terisi Otomatis
// 11.	Nama Sesuai Ijasah S1 : Sudah di munculkan, tapi mahasiswa bisa edit
// 12.	Program Studi S1 : Sudah terisi Otomatis
// 13.	Jenis Kelamin : Sudah terisi Otomatis, bisa di edit
// 14.	Tanggal Lahir : Sudah terisi Otomatis
// 15.	Tempat Lahir : Sudah terisi Otomatis, bisa di edit
// 16.	NIK : Sudah terisi Otomatis
// 17.	Alamat : Sudah terisi Otomatis, bisa di edit
// 18.	Telp/Hp : Sudah terisi Otomatis, bisa di edit
// 19.	Email : Sudah terisi Otomatis, bisa di edit
// 20.	Nama & Alamat Kantor :
// 21.	Telp Kantor / Fax :
// 22.	Indeks Presentasi Akhir : (Sesuaikan dengan hasil Pra Transkrip, dengan rumus yang berlaku pada BPA (Buku Pedoman Akademik)
