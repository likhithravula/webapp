const apiServer = process.env.REACT_APP_API_SERVER

const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export default class ApiService
{
  async _invoke( method, operation, payload, token ) {
    const endpoint = `${ apiServer }/${ operation }`
    const headers = { ...DEFAULT_HEADERS }

    if( token )
      headers[ 'X-Auth-Token' ] = token

    const options = { method, headers }

    if( payload )
      options.body = JSON.stringify( payload )

    const response = await fetch( endpoint, options )

    // TODO: handle HTTP error status

    return response.json()
  }

  _get( operation, payload, token ) {
    return this._invoke( 'GET', operation, payload, token )
  }

  _post( operation, payload, token ) {
    return this._invoke( 'POST', operation, payload, token )
  }

  _put( operation, payload, token ) {
    return this._invoke( 'PUT', operation, payload, token )
  }

  _delete( operation, payload, token ) {
    return this._invoke( 'DELETE', operation, payload, token )
  }

  //////////////////////////////////////////////////////////////////////////
  // User API

  addUser( user ) {
    return this._post( 'user', user )
  }

  authenticateUser( user ) {
    return this._post( `user/auth`, user )
  }

  updateUser( { id, ...user }, token ) {
    return this._put( `user/${ id }`, user, token )
  }

}
