import getAbsolutePath from '../utils/getAbsolutePath'


class History {
  canUseNative = Boolean(window.history)

  go = (path, state={}) => {
    const absolutePath = getAbsolutePath(path)
    const href = window.location.origin + absolutePath
    if (this.canUseNative) {
      window.history.pushState(state, '', href)
    } else {
      window.location.href = href
    }
    return absolutePath
  }

  onChange = callback => {

  }
}


export default History
