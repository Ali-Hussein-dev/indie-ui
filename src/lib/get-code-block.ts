"use server"

import path from "path"
import { promises as fs } from "fs"

async function readFile(source: string) {
    const filepath = path.join(process.cwd(), source)
    return await fs.readFile(filepath, "utf-8")
}

export async function getCodeBlock(path: string) {
    const code = await readFile(path)
    return {
        body: code
    }
}
