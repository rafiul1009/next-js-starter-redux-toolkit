import CryptoJS from 'crypto-js';
const permissionKey = "lakjsd-lasdjfir";

export function encryptString(str) {
  try {
    return CryptoJS.AES.encrypt(JSON.stringify({ str }), permissionKey).toString();
  } catch (error) {
    return '';
  }
}

export function decryptString(str) {
  try {
    const dec_perm = CryptoJS.AES.decrypt(str, permissionKey).toString(CryptoJS.enc.Utf8);
    return JSON.parse(dec_perm).str;
  } catch (error) {
    return '';
  }
}

export function encryptSHA256(str) {
  try {
    return CryptoJS.SHA256(str).toString();
  } catch (error) {
    return '';
  }
}