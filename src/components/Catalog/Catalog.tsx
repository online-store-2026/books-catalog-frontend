import { getPaperbacks } from '@/api/products';
import { GridContainer } from '../GridContainer/GridContainer';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';
import type { Product } from '@/types/Product';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

export const Catalog = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<number | 'all'>('all');

  const currentProducts =
    itemsPerPage === 'all' ? product : (
      product.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      )
    );

  const totalPages =
    itemsPerPage === 'all' ? 1 : Math.ceil(product.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    getPaperbacks()
      .then(setProduct)
      .catch(() => console.log('Error'));
  }, []);

  return (
    <GridContainer className="overflow-hidden">
      <div className="col-span-full flex flex-col items-start mb-8">
        <h1 className="text-[#313237] text-[32px] md:text-[48px] font-manrope font-bold leading-tight tracking-[-0.01em] md:tracking-[-0.02em] mb-2">
          Paper books
        </h1>
        <p className="text-[#89939A] text-[14px] font-manrope font-medium">
          {`${product.length} books`}
        </p>
      </div>

      <div className="col-span-2 md:col-span-4 lg:col-span-4 text-left mb-[24px]">
        <label className="text-[#89939A] text-[12px] font-manrope font-medium mb-[3px]">
          Sort by
        </label>
        <Select defaultValue="newest">
          <SelectTrigger className="w-full h-[40px] rounded-[8px] border-[#E2E6E9] bg-white font-manrope text-[#313237] text-[14px] font-bold">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="alphabetically">Alphabetically</SelectItem>
              <SelectItem value="cheapest ">Cheapest </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="col-span-2 md:col-span-3 lg:col-span-3 text-left mb-[24px]">
        <label className="text-[#89939A] text-[12px] font-manrope font-medium mb-[3px]">
          Items on page
        </label>
        <Select
          defaultValue="all"
          onValueChange={(value) => {
            if (value === 'all') {
              setItemsPerPage('all');
            } else {
              setItemsPerPage(Number(value));
            }
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-full h-[40px] rounded-[8px] border-[#E2E6E9] bg-white font-manrope text-[#313237] text-[14px] font-bold">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="16">16</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="col-span-full h-0" />

      {currentProducts.map((_currentProduct, index) => (
        <div
          key={index}
          className="
            col-span-4
            md:col-span-6
            lg:col-span-6
            h-[440px]
            w-full
            max-w-[288px]
            bg-red-600
            mb-[24px]
            justify-self-center
          "
        />
      ))}

      <div className="col-span-full flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
              />
            </PaginationItem>
            {pageNumbers.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </GridContainer>
  );
};
