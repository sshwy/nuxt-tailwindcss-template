import { sendStream } from 'h3'
import { createReadStream } from 'fs'
import { join } from 'path'

export default defineEventHandler(async event => {
  try {
    const slug = getRouterParam(event, 'slug')
    const dir = process.cwd()

    if (dir && slug) {
      const stream = createReadStream(join(dir, slug))
      return await sendStream(event, stream)
    }
  } catch (e) {
    throw createError({
      statusCode: 400,
      message: (e as any).message
    })
  }
})