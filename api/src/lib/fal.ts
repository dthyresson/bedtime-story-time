import * as fal from '@fal-ai/serverless-client'

fal.config({
  // Can also be auto-configured using environment variables:
  credentials: process.env.FAL_KEY,
})

export const generatePictureUrl = async ({
  summary,
  adjective,
  animal,
  color,
}: {
  summary: string
  adjective: string
  animal: string
  color: string
}) => {
  const prompt = `
  Illustrate: "${summary}". in ${adjective} style. paint the ${animal} the color ${color}.
  `

  const falModel = 'flux/schnell'
  // "flux/schnell";
  // "aura-flow";
  // fast-lightning-sdxl
  const options = {
    image_size: 'square',
    num_images: 1,
    num_inference_steps: 6,
    enable_safety_checker: true,
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = await fal.run(`fal-ai/${falModel}`, {
    input: { prompt },
    ...options,
  })
  const url = result.images[0].url

  return url
}
