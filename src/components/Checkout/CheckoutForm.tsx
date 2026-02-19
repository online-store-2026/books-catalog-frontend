import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema } from '@/utils/checkoutSchema.ts';
import type { CheckoutFormValues } from '@/utils/checkoutSchema.ts';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Button } from '@/components/ui/button.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormValues) => void;
  isLoading?: boolean;
}

const COUNTRIES = [
  'Ukraine',
  'United States',
  'United Kingdom',
  'Germany',
  'France',
  'Poland',
  'Canada',
  'Australia',
  'Other',
];

const FieldError = ({ message }: { message?: string }) =>
  message ? <p className="text-xs text-red-500 mt-1">{message}</p> : null;

export const CheckoutForm = ({ onSubmit, isLoading }: CheckoutFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormValues>({ resolver: zodResolver(checkoutSchema) });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-10"
    >
      <div className="flex flex-col gap-5">
        <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400">
          Contact information
        </p>

        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              placeholder="John"
              className={errors.firstName ? 'border-red-500' : ''}
              {...register('firstName')}
            />
            <FieldError message={errors.firstName?.message} />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              placeholder="Doe"
              className={errors.lastName ? 'border-red-500' : ''}
              {...register('lastName')}
            />
            <FieldError message={errors.lastName?.message} />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            className={errors.email ? 'border-red-500' : ''}
            {...register('email')}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+380 xx xxx xx xx"
            className={errors.phone ? 'border-red-500' : ''}
            {...register('phone')}
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400">
          Delivery address
        </p>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="address">Street address</Label>
          <Input
            id="address"
            placeholder="123 Main Street, Apt 4B"
            className={errors.address ? 'border-red-500' : ''}
            {...register('address')}
          />
          <FieldError message={errors.address?.message} />
        </div>

        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="Kyiv"
              className={errors.city ? 'border-red-500' : ''}
              {...register('city')}
            />
            <FieldError message={errors.city?.message} />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="zip">ZIP / Postal code</Label>
            <Input
              id="zip"
              placeholder="01001"
              className={errors.zip ? 'border-red-500' : ''}
              {...register('zip')}
            />
            <FieldError message={errors.zip?.message} />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Country</Label>
          <Select
            onValueChange={(val) =>
              setValue('country', val, { shouldValidate: true })
            }
          >
            <SelectTrigger className={errors.country ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {COUNTRIES.map((c) => (
                <SelectItem
                  key={c}
                  value={c}
                >
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError message={errors.country?.message} />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="h-14 text-sm font-bold tracking-widest uppercase"
      >
        {isLoading ?
          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        : 'Proceed to Payment'}
      </Button>
    </form>
  );
};
