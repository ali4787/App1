import styles from '../styles/Home.module.css';
import IndexPage from '../src/pages/index'
import { Provider } from 'react-redux';
import {store} from '../src/store'

export default function Home() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <IndexPage/>
      </div>
    </Provider>
  )
}
