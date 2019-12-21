import getAbsolutePath from '../../utils/getAbsolutePath'


class History {
  canUseNative = Boolean(window.history)

  $changeCallback = null

  go = (path, state={}) => {
    const absolutePath = getAbsolutePath(path)
    const href = window.location.origin + absolutePath

    if (this.canUseNative) {
      window.history.pushState(state, '', href)
    } else {
      window.location.href = href
    }

    if (this.$changeCallback) {
      this.$changeCallback(absolutePath)
    }
  }

  onChange = callback => {
    this.$changeCallback = callback
  }
}


export default History
