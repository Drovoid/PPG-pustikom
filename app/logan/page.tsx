import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[url('/background-login.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="flex bg-white w-11/12 h-4/6 flex-col justify-center space-y-6 lg:w-[900px] rounded-3xl overflow-visible mb-2">
        <div className="flex flex-col space-y-2 text-center container">
          <div className="flex flex-row sm:space-x-7 space-x-3 sm:mx-auto">
            <Image
              src="/images/unj.png"
              alt="Logo UNJ"
              width={50}
              height={50}
              sizes="(max-width: 768px) 100vw, 700px"
              className="sm:w-14 sm:h-14 w-6 h-6 rounded-full"
            />
            <h1 className="sm:text-5xl text-xl font-semibold text-black my-auto">
              Sistem Informasi PPG
            </h1>
          </div>
          <p className="sm:text-xl text-lg text-red-600 font-semibold sm:text-center text-left pb-4">
            Mahasiswa dapat Login dengan menggunakan{" "}
            <span className="sm:block hidden"></span> username dan password akun
            SIAKAD
          </p>
          <div className="flex flex-col space-y-4 w-full mx-auto">
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
        </div>
      </div>
    </div>
  );
}
