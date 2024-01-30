import * as z from "zod"

export const skyudisiumSchema = z.object({
    noSkYudisium: z.string().optional(),
    tanggalSkYudisium: z.string().optional(),
    jabatanPenandatangan: z.string().optional(),
    namaPenandatangan: z.string().optional(),
})