import { configs } from "@/configs"
import { Button } from "@/src/components/buttons/button"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import {
  Button_v1,
  Button_v2,
  Button_v3,
  Button_v4,
  Button_v5,
  Button_v6,
} from "@/src/components/buttons/buttons"
import {
  SimpleCard_V1,
  SimpleCard_V2,
  SimpleCard_V3,
  SimpleCard_V4,
  SimpleCard_V5,
} from "@/src/components/cards/simple"
import {
  MultilayerCardV_1,
  MultilayerCardV_2,
  MultilayerCardV_3,
} from "@/src/components/cards/multi-layers"

import {
  Card_with_image_bg_v1,
  Card_with_image_bg_v2,
  Card_with_image_bg_v3,
  Card_with_image_bg_v4,
} from "@/src/components/cards/with-image-bg"

import {
  Bento_4_v1,
  Bento_4_v2,
  Bento_4_v3,
  Bento_4_v4,
} from "@/src/components/layout/bento-4"

import {
  Bento_5_v1,
  Bento_5_v2,
  Bento_5_v3,
  Bento_5_v4,
} from "@/src/components/layout/bento-5"
import {
  Bento_6_v1,
  Bento_6_v2,
  Bento_6_v3,
  Bento_6_v4,
} from "@/src/components/layout/bento-6"

import { InputBlock } from "@/src/components/inputs/inputs"
import { Header } from "@/src/components/header"
import { Footer } from "@/src/components/footer"

const variantsList = [
  { href: "#buttons", label: "Buttons" },
  { href: "#inputs", label: "Inputs" },
  { href: "#simple-cards", label: "Simple cards" },
  {
    href: "#cards-with-multi-layers",
    label: "Cards with multi layers",
  },
  { href: "#cards-with-image-bg", label: "Cards with image BG" },
  { href: "#bento-grids-4", label: "Bento grid with 4 cells" },
  { href: "#bento-grids-5", label: "Bento grid with 5 cells" },
  { href: "#bento-grids-6", label: "Bento grid with 6 cells" },
]

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col justify-center text-center overflow-hidden">
      <Header />
      <section className="mx-auto max-w-2xl h-screen center">
        <div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl mb-2 text-center font-bold mt-8">
            UI components with variants
          </h1>
          <p className="text-cneter mb-4">
            Powered by <b>Tailwindcss</b>
          </p>
          <div className="flex-row-center gap-4 mx-auto max-w-fit pt-4">
            <Button asChild>
              <Link href="/docs" className="font-semibold w-fit mx-auto">
                Docs
              </Link>
            </Button>
            <Button asChild variant={"outline"}>
              <span>
                <FaGithub />
                <Link href={configs.urls.github}>Star us on GitHub</Link>
              </span>
            </Button>
          </div>
          <div className="mx-auto pt-10 w-fit">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-5 ">
              {variantsList.map((o) => (
                <Button key={o.href} size="sm" variant={"outline"} asChild>
                  <a href={o.href} className="text-xs">
                    {o.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div
        id="buttons"
        className="mx-auto divide-y space-y-8 max-w-6xl pb-14 px-2"
      >
        <section className="max-w-xl mx-auto">
          <h2 className="text-xl mb-4 font-bold mt-10 text-left">
            Button variants
          </h2>
          <div className="flex gap-2 sm:gap-4 flex-wrap">
            <Button_v1>Click me</Button_v1>
            <Button_v2>Hover me</Button_v2>
            <Button_v3>Hover me</Button_v3>
            <Button_v4>Hover me</Button_v4>
            <Button_v5>Hover me</Button_v5>
            <Button_v6>Hover me</Button_v6>
          </div>
        </section>
        <section id="inputs" className="max-w-xl mx-auto">
          <h2 className="text-xl mb-4 font-bold mt-10 text-left">
            Input variants
          </h2>
          <div className="space-y-6 max-w-xl">
            <InputBlock placeholder="Input field (default)" />
            <InputBlock
              placeholder="Input field (ghost)"
              root={{ variant: "ghost" }}
            />
            <InputBlock
              placeholder="Input field (underlined)"
              root={{ variant: "underlined" }}
            />
            <InputBlock
              placeholder="Input field (neubrutalism)"
              root={{ variant: "neubrutalism" }}
            />
            <InputBlock
              placeholder="Input field (filled)"
              root={{ variant: "filled" }}
            />
          </div>
        </section>
        <section id="simple-cards" className="pt-8">
          <h2 className="text-xl mb-4 font-bold text-left">
            Simple card variants
          </h2>
          <div className="max-w-2xl space-y-6 mx-auto">
            <SimpleCard_V1 />
            <SimpleCard_V2 />
            <SimpleCard_V3 />
            <SimpleCard_V4 />
            <SimpleCard_V5 />
          </div>
        </section>
        <section id="cards-with-multi-layers" className="pt-8">
          <h2 className="text-xl mb-4 font-bold text-left">
            Cards variants with multi layers
          </h2>
          <div className="space-y-4 max-w-xl mx-auto">
            <MultilayerCardV_1 />
            <MultilayerCardV_2 />
            <MultilayerCardV_3 />
          </div>
        </section>
        <section id="cards-with-image-bg" className="pt-8">
          <h2 className="text-xl mb-4 font-bold text-left">
            Card variants with image BG
          </h2>
          <div className="max-w-2xl grid md:grid-cols-2 gap-4">
            <Card_with_image_bg_v1 />
            <Card_with_image_bg_v2 />
            <Card_with_image_bg_v3 />
            <Card_with_image_bg_v4 />
          </div>
        </section>
        <section id="bento-grids-4" className="pt-8">
          <h2 className="text-xl mb-4 font-bold text-left">
            Bento grid with 4 cells
          </h2>
          <div className="max-w-2xl grid gap-8 w-full">
            <Bento_4_v1 />
            <hr />
            <Bento_4_v2 />
            <hr />
            <Bento_4_v3 />
            <hr />
            <Bento_4_v4 />
          </div>
        </section>
        <section id="bento-grids-5" className="pt-8">
          <h2 className="text-xl mb-4 font-bold text-left">
            Bento grid with 5 cells
          </h2>
          <div className="max-w-2xl grid gap-12 w-full">
            <Bento_5_v1 />
            <hr />
            <Bento_5_v2 />
            <hr />
            <Bento_5_v3 />
            <hr />
            <Bento_5_v4 />
            <hr />
          </div>
        </section>
        <section id="bento-grids-6" className="pt-8">
          <h2 className="text-xl mb-4 font-bold text-left">
            Bento grid with 6 cells
          </h2>
          <div className="max-w-2xl grid gap-12 w-full">
            <Bento_6_v1 />
            <hr />
            <Bento_6_v2 />
            <hr />
            <Bento_6_v3 />
            <hr />
            <Bento_6_v4 />
            <hr />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
