interface AuthHeader {
  Authorization: string;
}

export function getAuthorizedTokenHeader(): Partial<AuthHeader> {
  const token = localStorage.getItem('token');
  const header = token ? { Authorization: `Bearer ${token}` } : {};

  return header;
}

export function setTokenAtLocal(token: string): void {
  localStorage.setItem('token', token);
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name: string) {
  return {
    sx: {
      backgroundColor: '#141414'
    },
    children: `${name[0]}`
  };
}
