import React from 'react';
import { CustomButton } from '../CustomButton';
import { cn } from '@/lib/utils';
import type { ButtonSize } from '@/types/ui/Buttons';
import { useTranslation } from 'react-i18next';

interface AddButtonProps {
  onClick: () => void;
  isSelected?: boolean;
  size?: ButtonSize;
  className?: string;
}

export const AddButton: React.FC<AddButtonProps> = ({
  onClick,
  isSelected = false,
  size = 'itemCard',
  className,
}) => {
  const { t } = useTranslation();
  return (
    <CustomButton
      onClick={onClick}
      state={isSelected ? 'selected' : 'primary'}
      size={size}
      className={cn(className)}
    >
      {isSelected ? t('ui.added') : t('ui.addToCart')}
    </CustomButton>
  );
};
