const apiServer = process.env.REACT_APP_API_SERVER

const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export default class ApiService
{
  async _post( operation, payload ) {
    const endpoint = `${ apiServer }/${ operation }`
    const options = {
      method: 'POST',
      headers: DEFAULT_HEADERS,
      body: JSON.stringify( payload )
    }

    const response = await fetch( endpoint, options )

    // TODO: handle HTTP error status

    return response.json()
  }

  addUser( user ) {
    return this._post( 'user', user )
  }

  authenticateUser( user ) {
    return this._post( 'user/auth', user )
  }
}
