import { exec } from 'child_process'
import { resolve } from 'path'
import { promisify } from 'util'

const execify = promisify(exec)
const rootDir = __dirname
const nuxtBin = resolve(__dirname, '..', '..', '..', 'bin', 'nuxt')

describe('cli generate', () => {
  test('nuxt generate', async () => {
    const { stdout } = await execify(`node ${nuxtBin} generate ${rootDir}`)

    expect(stdout.includes('Generated successfully')).toBe(true)
  })
})
