export const users = [
  { id: '1', username: 'admin', password: 'admin123', role: 'admin' },
  { id: '2', username: 'user', password: 'user123', role: 'user' },
];

export function authenticateUser(username: string, password: string) {
  return users.find(u => u.username === username && u.password === password) || null;
}
