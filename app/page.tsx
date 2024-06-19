import { configs } from "../configs"
import { Button } from "@/components/buttons/button"
import Link from "next/link"
import { FaChevronRight, FaGithub } from "react-icons/fa"
import {
  Button_v1,
  Button_v2,
  Button_v3,
  Button_v4,
  Button_v5,
  Button_v6,
} from "@/components/buttons/buttons"
import {
  SimpleCard_V1,
  SimpleCard_V2,
  SimpleCard_V3,
  SimpleCard_V4,
  SimpleCard_V5,
  SimpleCard_V6,
} from "@/components/cards/simple"
import {
  MultilayerCardV_1,
  MultilayerCardV_2,
  MultilayerCardV_3,
} from "@/components/cards/multi-layers"

import {
  Card_with_image_bg_v1,
  Card_with_image_bg_v2,
  Card_with_image_bg_v3,
  Card_with_image_bg_v4,
} from "@/components/cards/with-image-bg"

import {
  Bento_4_v1,
  Bento_4_v2,
  Bento_4_v3,
  Bento_4_v4,
} from "@/components/layout/bento-4"

import {
  Bento_5_v1,
  Bento_5_v2,
  Bento_5_v3,
  Bento_5_v4,
} from "@/components/layout/bento-5"
import {
  Bento_6_v1,
  Bento_6_v2,
  Bento_6_v3,
  Bento_6_v4,
} from "@/components/layout/bento-6"
import { InputBlock } from "@/components/inputs/inputs"
import { Header } from "@/components/homepage/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import { LuArrowLeft, LuArrowRight } from "react-icons/lu"

const content = {
  button: {
    title: "Buttons variants",
    id: "buttons",
    docUrl: "/docs/buttons",
  },
  input: {
    title: "Input variants",
    id: "inputs",
    docUrl: "/docs/inputs",
  },
  simpleCards: {
    title: "Simple card variants",
    id: "simple-cards",
    docUrl: "/docs/cards-simple",
  },
  cardsWithMultiLayers: {
    title: "Cards with multi layers",
    id: "cards-with-multi-layers",
    docUrl: "/docs/cards-multi-layers",
  },
  cardsWithImageBg: {
    title: "Cards with image BG",
    id: "cards-with-image-bg",
    docUrl: "/docs/cards-with-image-bg",
  },
  bentoGrids4: {
    title: "Bento grid with 4 cells",
    id: "bento-grids-4",
    docUrl: "/docs/bento-4",
  },
  bentoGrids5: {
    title: "Bento grid with 5 cells",
    id: "bento-grids-5",
    docUrl: "/docs/bento-4",
  },
  bentoGrids6: {
    title: "Bento grid with 6 cells",
    id: "bento-grids-6",
    docUrl: "/docs/bento-4",
  },
}
const VariantsCard = ({
  id,
  title,
  docUrl,
  children,
}: {
  id: string
  title: string
  docUrl: string
  children: React.ReactNode
}) => (
  <section id={id}>
    <div className="flex-row-between mt-10 mb-4 gap-1 border-b py-1 rounded-sm">
      <h3 className="text-xl font-bold text-left">{title}</h3>
      <Link href={docUrl} className="flex-row-end gap-2">
        Get code <FaChevronRight />
      </Link>
    </div>
    <div className="w-full">{children}</div>
  </section>
)
export default function HomePage() {
  return (
    <main className="min-h-screen text-center">
      <Header />
      <div className="flex-col justify-center flex overflow-hidden">
        <section className="mx-auto max-w-2xl h-screen center">
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl mb-2 text-center font-bold mt-8">
              UI components with variants
            </h1>
            <p className="text-cneter mb-4">
              Powered by <b>Tailwindcss</b>
            </p>
            <div className="flex-row-center gap-4 mx-auto max-w-fit py-4">
              <Button asChild>
                <Link href="/docs" className="font-semibold w-fit mx-auto">
                  Docs
                </Link>
              </Button>
              <Button asChild variant={"outline"} leftIcon={<FaGithub />}>
                <Link href={configs.urls.github}>Star us on GitHub</Link>
              </Button>
            </div>
            <div className="mx-auto pt-10 w-fit">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-5 ">
                {Object.values(content).map((o) => (
                  <Button key={o.id} size="sm" variant={"outline"} asChild>
                    <a href={`#${o.id}`} className="text-xs">
                      {o.title}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="mx-auto divide-y space-y-8 max-w-6xl pb-14 px-2">
          <VariantsCard
            id={content.button.id}
            title={content.button.title}
            docUrl={content.button.docUrl}
          >
            <div className="flex gap-2 sm:gap-5 flex-wrap max-w-2xl">
              <Button_v1>Click me</Button_v1>
              <Button_v2>Hover me</Button_v2>
              <Button_v3>Hover me</Button_v3>
              <Button_v4>Hover me</Button_v4>
              <Button_v5>Hover me</Button_v5>
              <Button_v6>Hover me</Button_v6>
              <Button rightIcon={<LuArrowRight />} variant="outline">
                <span>Hover me</span>
              </Button>
              <Button leftIcon={<LuArrowLeft />} variant="outline">
                <span>Hover me</span>
              </Button>
            </div>
          </VariantsCard>
          <VariantsCard
            id={content.input.id}
            title={content.input.title}
            docUrl={content.input.docUrl}
          >
            <div className="space-y-6 max-w-2xl">
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
          </VariantsCard>
          <VariantsCard
            id={content.simpleCards.id}
            title={content.simpleCards.title}
            docUrl={content.simpleCards.docUrl}
          >
            <div className="max-w-2xl space-y-10 md:space-y-16 pt-4 mx-auto">
              <SimpleCard_V1 />
              <SimpleCard_V2 />
              <SimpleCard_V3 />
              <SimpleCard_V4 />
              <SimpleCard_V5 />
              <SimpleCard_V6 />
            </div>
          </VariantsCard>
          <VariantsCard
            id={content.cardsWithMultiLayers.id}
            title={content.cardsWithMultiLayers.title}
            docUrl={content.cardsWithMultiLayers.docUrl}
          >
            <div className="max-w-xl mx-auto space-y-4">
              <MultilayerCardV_1 />
              <MultilayerCardV_2 />
              <MultilayerCardV_3 />
            </div>
          </VariantsCard>
          <VariantsCard
            id={content.cardsWithImageBg.id}
            title={content.cardsWithImageBg.title}
            docUrl={content.cardsWithImageBg.docUrl}
          >
            <div className="max-w-2xl grid md:grid-cols-2 gap-4">
              <Card_with_image_bg_v1 />
              <Card_with_image_bg_v2 />
              <Card_with_image_bg_v3 />
              <Card_with_image_bg_v4 />
            </div>
          </VariantsCard>
          <VariantsCard
            id={content.bentoGrids4.id}
            title={content.bentoGrids4.title}
            docUrl={content.bentoGrids4.docUrl}
          >
            <div className="max-w-2xl grid gap-8 w-full">
              <Bento_4_v1 />
              <hr />
              <Bento_4_v2 />
              <hr />
              <Bento_4_v3 />
              <hr />
              <Bento_4_v4 />
            </div>
          </VariantsCard>
          <VariantsCard
            id={content.bentoGrids5.id}
            title={content.bentoGrids5.title}
            docUrl={content.bentoGrids5.docUrl}
          >
            <div className="max-w-2xl grid gap-12 w-full">
              <Bento_5_v1 />
              <hr />
              <Bento_5_v2 />
              <hr />
              <Bento_5_v3 />
              <hr />
              <Bento_5_v4 />
            </div>
          </VariantsCard>
          <VariantsCard
            id={content.bentoGrids6.id}
            title={content.bentoGrids6.title}
            docUrl={content.bentoGrids6.docUrl}
          >
            <div className="max-w-2xl grid gap-12 w-full">
              <Bento_6_v1 />
              <hr />
              <Bento_6_v2 />
              <hr />
              <Bento_6_v3 />
              <hr />
              <Bento_6_v4 />
            </div>
          </VariantsCard>
        </div>
        <Newsletter />
      </div>
      <Footer />
    </main>
  )
}
