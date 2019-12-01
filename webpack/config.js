import path from 'path'


const ROOT_PATH = path.resolve(__dirname, '../')
const SRC_PATH = path.resolve(ROOT_PATH, './src')
const DIST_PATH = path.resolve(ROOT_PATH, './dist')
const MODULES_PATH = path.resolve(ROOT_PATH, './node_modules')

const HOST = '127.0.0.1'
const PORT = '8001'


export {
  ROOT_PATH,
  SRC_PATH,
  DIST_PATH,
  MODULES_PATH,
  HOST,
  PORT,
}
