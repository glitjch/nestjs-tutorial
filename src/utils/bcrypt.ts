import * as bcrypt from 'bcrypt';

const SALT = 10;
export function encodePassword(rawPassword: string) {
  console.log('Inside bcrypt');
  return bcrypt.hashSync(rawPassword, SALT);
}

export function comparePasswords(rawPassword: string, hash: string) {
  return bcrypt.compareSync(rawPassword, hash);
}
