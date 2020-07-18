import gql from 'graphql-tag'

export const CREATE_PAYMENT = gql`
  mutation CreatePayment($input: PaymentInput!) {
    createPayment(input: $input) {
      id
    }
  }
`

export const ON_GET_RESULT_SUBSCRIPTION = gql`
  subscription GetPayment($id: ID!) {
    onGetResult(id: $id) {
      id
      status
    }
  }
`

export const GET_PROJECTS = gql`
  query GetProject($id: String!) {
    getProject(id: $id) {
      id
      name
    }
  }
`
