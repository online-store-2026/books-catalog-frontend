import React from 'react';
import { useParams } from 'react-router-dom';
import { ItemCard } from '@/components/ItemCard';

type BookType = 'paperback' | 'kindle' | 'audiobook';

export const ItemCardPage: React.FC = () => {
  const { type } = useParams<{ type: string; bookSlug: string }>();

  const validType = type as BookType;

  if (!validType) return null;

  return <ItemCard type={validType} />;
};
