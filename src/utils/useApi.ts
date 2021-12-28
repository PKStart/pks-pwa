type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export const useApi = () => {
  const baseUrl = process.env.PK_API_URL

  function getHeaders(isAuth: boolean): Headers {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    if (isAuth) {
      headers.append('Authorization', `Bearer //TODO`)
    }
    return headers
  }

  async function request<R, T>(
    path: string,
    requestBody: R | null,
    method: Method,
    isAuth: boolean
  ): Promise<T> {
    const res = await fetch(`${baseUrl}${path}`, {
      method,
      headers: getHeaders(isAuth),
      body: method === 'GET' ? undefined : JSON.stringify(requestBody),
    })
    return (await res.json()) as T
  }

  async function get<T>(path: string, isAuth: boolean): Promise<T> {
    return request<null, T>(path, null, 'GET', isAuth)
  }

  async function post<R, T>(path: string, requestBody: R, isAuth: boolean): Promise<T> {
    return request<R, T>(path, requestBody, 'POST', isAuth)
  }

  async function put<R, T>(path: string, requestBody: R, isAuth: boolean): Promise<T> {
    return request<R, T>(path, requestBody, 'PUT', isAuth)
  }

  return {
    get,
    post,
    put,
  }
}
