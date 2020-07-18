import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

export interface IApp {
  creds: {
    idToken: string
  },
  pageLoading: {
    enabled: boolean,
    message: string
  },
  resultDialog: {
    enabled: boolean,
    message: string
    data: any,
  },
  errorMessageCard: {
    enabled: boolean,
    message: string
  }
}

@Module({ stateFactory: true, namespaced: true, name: 'app' })
export default class App extends VuexModule implements IApp {

  public creds = {
    idToken: ''
  }

  public pageLoading = {
    enabled: false,
    message: ''
  }
  public resultDialog = {
    enabled: false,
    message: '',
    data: {}
  }
  public errorMessageCard = {
    enabled: false,
    message: ''
  }

  @Mutation
  public setIdToken(idToken: string) {
    this.creds.idToken = idToken
  }

  @Mutation
  public onPageLoading(msg: string) {
    this.pageLoading.enabled = true
    this.pageLoading.message = msg
  }

  @Mutation
  public offPageLoading() {
    this.pageLoading.enabled = false
    this.pageLoading.message = ''
  }

  @Mutation
  public onResultDialog(data: any) {
    this.resultDialog.enabled = true
    this.resultDialog.data = data
  }

  @Mutation
  public offResultDialog() {
    this.resultDialog.enabled = false
    this.resultDialog.data = {}
  }

  @Mutation
  public onErrorMessageCard(msg: string) {
    this.errorMessageCard.enabled = true
    this.errorMessageCard.message = msg
  }

  @Mutation
  public offErrorMessageCard() {
    this.errorMessageCard.enabled = false
    this.errorMessageCard.message = ''
  }
}
