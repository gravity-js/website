import { View } from '@gravity-js/client'

import { History } from './Router'

import styles from './styles'


class Root extends View {
  onCreate = () => {
    const history = new History()
    history.go('kek/cheburek')
  }

  render () {
    return <div class={styles.root}>
      <div class={styles.content}>
        <h1 class={styles.title}>
          Gravity
        </h1>
        <p class={styles.description}>
          Next generation framework for WEB
        </p>
      </div>
    </div>
  }
}


export default Root
