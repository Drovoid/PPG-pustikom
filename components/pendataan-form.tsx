"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  nim: z.string().min(10, {
    message: "Nomor Induk Mahasiswa minimal 10 Digit.",
  }),
})

export function PendataanForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nim: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="nim"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Induk Mahasiswa</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan NIM" {...field} />
              </FormControl>
              <FormDescription>
                Tambahkan Nomor Induk Mahasiswa Untuk Pemberkasan
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Tambah</Button>
      </form>
    </Form>
  )
}
