import { View } from '@gravity-js/browser'

import styles from './styles'


class Root extends View {
  render () {
    return <div class={styles.root}>
      Hello from gravity!
    </div>
  }
}


export default Root
