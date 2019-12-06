import { View } from '@gravity-js/client'

import { History, Router } from './Router'

import styles from './styles'


class Root extends View {
  onCreate = () => {
    const history = new History()
    history.go('docs')
  }

  // TODO render () {} does not work with match
  render = () => {
    return <div class={styles.root}>
      <div class={styles.content}>
        <h1 class={styles.title}>
          Gravity
        </h1>
        <p class={styles.description}>
          Next generation framework for WEB
        </p>
        <Router>
          {[
            { path: '/docs', match: () => <div>docs</div> },
            { path: '/profile/:id', match: ({ id }) => <div>profile id: { id }</div> },
          ]}
        </Router>
      </div>
    </div>
  }
}


export default Root
