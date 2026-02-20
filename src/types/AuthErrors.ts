export const FirebaseAuthError = {
  InvalidCredential: 'auth/invalid-credential',
  WrongPassword: 'auth/invalid-credential',
  EmailAlreadyInUse: 'auth/email-already-in-use',
  InvalidEmail: 'auth/invalid-email',
  PopupClosedByUser: 'auth/popup-closed-by-user',
} as const;

export type FirebaseAuthErrorType =
  (typeof FirebaseAuthError)[keyof typeof FirebaseAuthError];
