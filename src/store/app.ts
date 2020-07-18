import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

export interface IApp {
  creds: {
    idToken: string
  },
  pageLoading: {
    enabled: boolean,
    message: string
  },
  confirmDialog: {
    enabled: boolean,
    status: string
    message: string
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
  public confirmDialog = {
    enabled: false,
    status: '',
    message: ''
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
  public onConfirmDialog(params: { status: 'success' | 'failed', msg: string }) {
    this.confirmDialog.enabled = true
    this.confirmDialog.status = params.status
    this.confirmDialog.message = params.msg
  }

  @Mutation
  public offConfirmDialog() {
    this.confirmDialog.enabled = false
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
