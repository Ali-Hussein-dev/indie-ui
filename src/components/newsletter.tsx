import Link from "next/link"
import { Button } from "./buttons/button"
import { configs } from "@/configs"
import { Button_v6, Button_v4, Button_v5 } from "./buttons/buttons"

//======================================
export const Newsletter = () => {
  return (
    <div className="mx-auto pb-12">
      <p className="text-center text-lg text-pretty mb-5 font-medium dark:text-zinc-200">
        Get notified about new components & updates
      </p>
      <div className="mx-auto w-fit">
        <Button_v6>
          <Link href={configs.urls.newsletter}>Subscribe</Link>
        </Button_v6>{" "}
      </div>
    </div>
  )
}
