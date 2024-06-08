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

import { InputBlock } from "@/src/components/inputs/inputs"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col justify-center text-center pb-8">
      <section className="mx-auto max-w-2xl h-screen center">
        <div>
          <span className="text-2xl font-bold">Indie UI</span>
          <h1 className="text-xl sm:text-3xl md:text-5xl mb-2 text-center font-bold mt-8">
            UI components with variants
          </h1>
          <p className="text-cneter mb-4">
            Powered by <b>Tailwindcss</b>
          </p>
          <div className="flex-row-center gap-4 mx-auto max-w-fit pt-4">
            <Button asChild>
              <Link
                href="/docs"
                className="text-lg font-semibold w-fit mx-auto"
              >
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
        </div>
      </section>
      <div className="mx-auto divide-y space-y-8 max-w-6xl pb-14 px-2">
        <section className="max-w-xl mx-auto">
          <h2 className="text-xl mb-4 font-bold mt-10 text-left">
            Button Variants
          </h2>
          <div className="flex gap-2 sm:gap-4 flex-wrap">
            <Button_v1>Hover me</Button_v1>
            <Button_v2>Hover me</Button_v2>
            <Button_v3>Hover me</Button_v3>
            <Button_v4>Hover me</Button_v4>
            <Button_v5>Hover me</Button_v5>
            <Button_v6>Hover me</Button_v6>
          </div>
        </section>
        <section className="max-w-xl mx-auto">
          <h2 className="text-xl mb-4 font-bold mt-10 text-left">
            Input Variants
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
        <section className="pt-8">
          <h2 className="text-xl mb-4 font-bold text-left">
            Simple Card Variants
          </h2>
          <div className="max-w-2xl space-y-6 mx-auto">
            <SimpleCard_V1 />
            <SimpleCard_V2 />
            <SimpleCard_V3 />
            <SimpleCard_V4 />
            <SimpleCard_V5 />
          </div>
        </section>
        <section className="pt-8">
          <h2 className="text-xl mb-4 font-bold text-left">
            Cards Variants with multi layers
          </h2>
          <div className="space-y-4 max-w-xl mx-auto">
            <MultilayerCardV_1 />
            <MultilayerCardV_2 />
            <MultilayerCardV_3 />
          </div>
        </section>
        <section className="pt-8">
          <h2 className="text-xl mb-4 font-bold text-left">
            Card Variants with image BG
          </h2>
          <div className="max-w-2xl grid md:grid-cols-2 gap-4">
            <Card_with_image_bg_v1 />
            <Card_with_image_bg_v2 />
            <Card_with_image_bg_v3 />
            <Card_with_image_bg_v4 />
          </div>
        </section>
      </div>
    </main>
  )
}
