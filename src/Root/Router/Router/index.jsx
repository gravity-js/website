import { View } from '@gravity-js/client'

import match from './utils/match'


class Router extends View {
  render = () => {
    const routes = this.children[0]
    const currentPath = window.location.pathname

    let result = null

    const route = routes.find(route => {
      result = match(route.path, currentPath, route.exact)
      return result
    })

    if (result) {
      return route.match(result)
    }

    return null
  }
}


export default Router
