/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import App from '~/store/app'

let app: App

const initialiseStores = (store: Store<any>) => {
  app = getModule(App, store)
}
const initializer = (store: Store<any>) => initialiseStores(store)
const plugins = [ initializer ]

export { initialiseStores, app, plugins }
