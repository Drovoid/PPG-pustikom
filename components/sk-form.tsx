"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { skyudisiumSchema } from "@/lib/validations/skyudisium";

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

const SkYudisiumForm = () => {
  const form = useForm<z.infer<typeof skyudisiumSchema>>({
    resolver: zodResolver(skyudisiumSchema),
    defaultValues: {
      noSkYudisium: "",
      tanggalSkYudisium: "",
      jabatanPenandatangan: "",
      namaPenandatangan: "",
    },
  });

  function onSubmit(values: z.infer<typeof skyudisiumSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="noSkYudisium"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. SK Yudisium</FormLabel>
              <FormControl>
                <Input placeholder="Ketikkan Nomor SK Yudisium" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tanggalSkYudisium"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tanggal SK Yudisium</FormLabel>
              <FormControl>
                <Input type="date" placeholder="Ketikkan Waktu Lulus" {...field} />
              </FormControl>
              <FormDescription>Format : yyyy-mm-dd</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jabatanPenandatangan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jabatan Penandatangan</FormLabel>
              <FormControl>
                <Input placeholder="Ketikkan Jabatan Pejabat Penandatangan" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="namaPenandatangan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap Penandatangan (dengan gelar)</FormLabel>
              <FormControl>
                <Input placeholder="Ketikkan Nama Pejabat Penandatangan" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Tambah</Button>
      </form>
    </Form>
  );
};

export default SkYudisiumForm;
