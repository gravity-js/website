import Gravity, { View } from '@gravity-js/client'

import { Router } from 'lib/Router'

import LeftBar from './LeftBar'

import styles from './styles.pcss'


class Root extends View {
  render = () => {
    return <div class={styles.root}>
      <LeftBar />
      <div class={styles.content}>
        <h1 class={styles.title}>
          Gravity
        </h1>
        <p class={styles.description}>
          Next generation framework for WEB
        </p>

        <Router>
          {[
            { path: '/motivation', match: () => <div>motivation</div> },
            { path: '/getstarted', match: () => <div>Get started</div> },
          ]}
        </Router>
      </div>
    </div>
  }
}


export default Root
