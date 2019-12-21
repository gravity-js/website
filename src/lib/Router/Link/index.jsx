import Gravity, { View } from '@gravity-js/client'

import Router from '../Router'


class Link extends View {
  render() {
    const { to, onClick, ...otherProps } = this.props

    return <a
      { ...otherProps }
      href={to}
      onClick={e => {
        e.preventDefault()
        if (onClick) onClick(e)
        Router.history.go(to)
      }}
    >
      { this.children[0] }
    </a>
  }
}


export default Link
