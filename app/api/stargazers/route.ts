import { type NextRequest, NextResponse} from 'next/server'
import { getStargazers } from '@/lib/get-stargazer';

export const dynamic = 'force-dynamic'

export const GET = async (req: NextRequest) => {

    const data = await getStargazers({owner: "ali-hussein-dev", repo: "indie-ui"}).catch(console.error)

    return NextResponse.json(data)
}