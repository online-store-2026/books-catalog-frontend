import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useAuth } from '@/context/authContext';
import {
  doSingInWithEmailAndPassword,
  doSingInWithGoogle,
} from '@/firebase/auth';
import { Link, Navigate } from 'react-router-dom';
import { COLORS } from '@/constants/colors';
import {
  FirebaseAuthError,
  type FirebaseAuthErrorType,
} from '@/types/AuthErrors';

const getErrorMessage = (code: string) => {
  switch (code as FirebaseAuthErrorType) {
    case FirebaseAuthError.InvalidCredential:
      return 'Недійсні облікові дані.';
    case FirebaseAuthError.WrongPassword:
      return 'Невірний пароль.';
    case FirebaseAuthError.EmailAlreadyInUse:
      return 'Ця електронна пошта вже використовується.';
    case FirebaseAuthError.InvalidEmail:
      return 'Невірний формат електронної пошти.';
    case FirebaseAuthError.PopupClosedByUser:
      return 'Вхід через Google був закритий користувачем.';
    default:
      return 'Сталася помилка. Спробуйте ще раз.';
  }
};

export function LoginForm() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      setError(null);
      try {
        await doSingInWithEmailAndPassword(email, password);
        setEmail('');
        setPassword('');
      } catch (err) {
        setError(getErrorMessage((err as { code: string }).code));
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      setError(null);
      try {
        await doSingInWithGoogle();
      } catch (err) {
        setError(getErrorMessage((err as { code: string }).code));
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  return (
    <>
      {userLoggedIn && (
        <Navigate
          to={'/'}
          replace={true}
        />
      )}
      <div className={cn('flex flex-col gap-6')}>
        <Card>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="m@example.com"
                    required
                  />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </Field>
                {error && (
                  <p className="text-sm font-medium text-red-600 text-center">
                    {error}
                  </p>
                )}
                <Field>
                  <Button
                    className={cn(COLORS.green, 'cursor-pointer')}
                    type="submit"
                    disabled={isSigningIn}
                  >
                    Sign in
                  </Button>
                  <Button
                    className="cursor-pointer"
                    variant="outline"
                    type="button"
                    onClick={onGoogleSignIn}
                    disabled={isSigningIn}
                  >
                    Sign in with Google
                  </Button>
                  <FieldDescription className="text-center">
                    Don&apos;t have an account?{' '}
                    <Link to={'/signup'}>Sign up</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
