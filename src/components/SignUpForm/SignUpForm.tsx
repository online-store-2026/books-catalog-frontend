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
import { COLORS } from '@/constants/colors';
import { useAuth } from '@/context/authContext';
import { doCreateUserWithEmailAndPassword } from '@/firebase/auth';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export const SignUpForm = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      if (password === confirmPassword && password.length >= 8) {
        await doCreateUserWithEmailAndPassword(email, password);
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
      <Card>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your information below to create your account
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
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="confirm-password">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                />
              </Field>
              <FieldGroup>
                <Field>
                  <Button
                    className={cn(COLORS.green, 'cursor-pointer')}
                    type="submit"
                  >
                    Create Account
                  </Button>
                  <FieldDescription className="px-6 text-center">
                    Already have an account? <Link to={'/login'}>Sign in</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
