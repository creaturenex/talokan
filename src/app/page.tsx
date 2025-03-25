import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/talokan.webp")',
        }}
      />

      <div className="absolute inset-0 z-10 bg-amber-500/50" />
      {/* think how to change bg for darkmode */}
      {/* <div className="absolute inset-0 z-15 bg-black/20" />  */}

      <Navbar />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4 gap-4">
        <h1 className="text-7xl cinzel-700">TALOKAN</h1>
        <h2 className="text-2xl font-medium">
          Another deck builder for Magic: The Gathering
        </h2>
        <div className="">
          <div className="flex items-center justify-center gap-2">
            <span className="text-zinc-200">Search by:</span>
            <div className="bg-zinc-950/50 rounded-full mb-2 flex flex-row items-center justify-around gap-1 px-3 h-9 text-white">
              <button className="hover:ring-2 focus:ring-2 ring-amber-500 rounded-full px-3 text-sm focus:bg-amber-400/50 focus:text-zinc-900">
                Decks
              </button>
              <button className="hover:ring-2 focus:ring-2 ring-amber-500 rounded-full px-3 text-sm focus:bg-amber-400/50 focus:text-zinc-900">
                Cards
              </button>
            </div>
          </div>

          <div
            className="bg-zinc-900/95 flex flex-row items-center justify-center
        text-zinc-300
        rounded-full px-4 gap-1
        hover:ring-[#3F00FF] hover:ring-2
        focus-visible:border-ring
        focus-visible:ring-ring/50
        focus-visible:ring-[3px]
        focus-visible:ring-[#3F00FF]
        "
          >
            <Search className="w-4 h-4" />
            <Input
              className="w-[400px] placeholder:text-zinc-300 focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
              type="text"
              placeholder="Search"
            />
          </div>

          <Button className="bg-[#ff003f]"/>
          <Button className="bg-[#ff3f00]"/>
          <Button className="bg-[#ffbf00]"/>
          <Button className="bg-[#009688]"/>
          <Button className="bg-[#006064]"/>
          



        </div>

        <Cards />
      </div>
    </div>
  );
}
