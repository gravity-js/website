import normalizePath from '../utils/normalizePath'


class History {
  canUseNative = Boolean(window.history)

  go = (path, state={}) => {
    // TODO make getAbsPath instead normalizePath
    let [ normalPath, isAbsolute ] = normalizePath(path)
    if (!isAbsolute) path = `${window.location.pathname}/${normalPath}`
    console.log(path)
    window.history.pushState(state, '', path)
  }

  onChange = callback => {

  }
}


export default History
