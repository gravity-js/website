import { View, Store, action } from '@gravity-js/client'

import History from './History'

import match from './utils/match'


class MainStore extends Store {
  url = null

  tryUpdate = url => {
    if(url === this.url) return
    this.update(url)
  }

  @action update = url => {
    this.url = url
  }
}


const mainStore = new MainStore()
const history = new History()
history.onChange(mainStore.tryUpdate)


class Router extends View {
  static history = history

  onCreate = () => ({ mainStore })

  render = () => {
    const routes = this.children[0]
    const currentPath = window.location.pathname

    let result = null

    const route = routes.find(route => {
      result = match(route.path, currentPath, route.exact)
      return result
    })

    if (result) {
      console.log('render result', result)
      return route.match(result)
    }

    return null
  }
}


export default Router
