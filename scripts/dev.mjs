import { spawn } from 'child_process'
import { createServer } from 'vite'
import electron from 'electron'

const server = await createServer({ configFile: 'vite.config.ts' })

spawn(electron, ['.'], { stdio: 'inherit' }).once('exit', process.exit)

await server.listen()
