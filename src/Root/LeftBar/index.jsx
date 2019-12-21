import Gravity, { View } from '@gravity-js/client'

import { Link } from 'lib/Router'

import styles from './styles.pcss'


class LeftBar extends View {
  render() {
    return <div class={styles.root}>
      <Link to='/motivation' class={styles.link}>
        Motivation
      </Link>
      <Link to='/getstarted' class={styles.link}>
        Get started
      </Link>
    </div>
  }
}


export default LeftBar
