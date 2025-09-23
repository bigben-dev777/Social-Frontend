interface AuthHeader {
  Authorization: string
}

export function getAuthorizedTokenHeader(): Partial<AuthHeader> {
  const token = localStorage.getItem('token')
  const header = token ? { Authorization: `Bearer ${token}` } : {}

  return header
}

export function setTokenAtLocal(token: string): void {
  localStorage.setItem('token', token);
}
