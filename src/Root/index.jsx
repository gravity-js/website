import { View } from '@gravity-js/client'

import styles from './styles'


class Root extends View {
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
