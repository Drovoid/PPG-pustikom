import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[url('/images/background-login.jpg')] bg-center bg-no-repeat bg-cover">
      <Card className="w-11/12 sm:w-[900px] py-10 space-y-2">
        <CardHeader>
          <div className="flex flex-row mx-auto space-x-3 sm:mb-0 mb-3">
            <Image
              src="/unj.png"
              alt="Logo UNJ"
              width={50}
              height={50}
              sizes="(max-width: 768px) 100vw, 700px"
              className="sm:w-10 sm:h-10 w-6 h-6 rounded-full"
            />
            <CardTitle className="sm:text-4xl text-xl font-bold text-black my-auto text-center tracking-wide">
              Sistem Informasi PPG
            </CardTitle>
          </div>
          <CardDescription className="text-lg text-red-600 font-semibold sm:text-center text-left tracking-wider">
            Mahasiswa dapat Login dengan menggunakan <span className="sm:block hidden"></span> username dan password akun
            SIAKAD
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-5 w-full mx-auto">
            <Input
              id="username"
              type="text"
              placeholder="Username"
              className="sm:w-7/12 mx-auto"
            />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className="sm:w-7/12 mx-auto"
            />
            <Button className="bg-green-700 sm:w-7/12 w-full mx-auto">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
