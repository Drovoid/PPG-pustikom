"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Icons } from "./icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast"
import { skyudisiumSchema } from "@/lib/validations/skyudisium";

export function EditButtonDialogAction() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="bg-yellow-100">
            <Icons.edit className="text-yellow-900" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Data SK Yudisium</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Icons.edit />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit Data SK Yudisium</DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const form = useForm<z.infer<typeof skyudisiumSchema>>({
    resolver: zodResolver(skyudisiumSchema),
    defaultValues: {
      noSkYudisium: "",
      tanggalSkYudisium: "",
      jabatanPenandatangan: "",
      namaPenandatangan: "",
    },
  });

  function onSubmit(data: z.infer<typeof skyudisiumSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("grid items-start gap-4", className)}>
        <FormField
          control={form.control}
          name="noSkYudisium"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No SK Yudisium</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan No SK Yudisium Baru" {...field} />
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
                <Input placeholder="Masukkan Tanggal SK Yudisium Baru" {...field} />
              </FormControl>
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
                <Input placeholder="Masukkan Jabatan Penandatangan Baru" {...field} />
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
              <FormLabel>Nama Penandatangan</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan Nama Penandatangan Baru" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    // <form className={cn("grid items-start gap-4", className)}>
    //   <div className="grid gap-2">
    //     <Label htmlFor="email">Email</Label>
    //     <Input type="email" id="email" defaultValue="shadcn@example.com" />
    //   </div>
    //   <div className="grid gap-2">
    //     <Label htmlFor="username">Username</Label>
    //     <Input id="username" defaultValue="@shadcn" />
    //   </div>
    //   <Button type="submit">Save changes</Button>
    // </form>
  );
}
