import React from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="">
      
      <div className="relative p-6 flex justify-center items-center min-h-screen">
        <div className="py-4 mx-auto w-2xl max-w-2xl">
          <Layout />
          <div>
            <h2 className="text-4xl pt-6 font-bold tracking-tight text-white pb-6">
              Well Hello! I'm Allen
            </h2>
            <p className="mx-0 mt-2 max-w-xl text-lg leading-8 text-gray-300">
              A full-stack blockchain engineer and a captivating pianist,
              cruising to the beats of indie and pop music 🥂
            </p>
            <div className="pt-14 flex items-center">
              <Separator orientation="vertical" className="text-white" />
              <div className="flex h-5 items-center space-x-6 text-sm">
                <Button asChild>
                  <Link href="/projects" className="font-semibold">Projects</Link>
                </Button>

                <Separator orientation="vertical" />

                <Button asChild>
                  <Link href="/about" className="font-semibold">About</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}