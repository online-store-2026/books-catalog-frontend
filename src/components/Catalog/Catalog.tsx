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
import { useCallback, useEffect, useState } from 'react';
import type { Product } from '@/types/Product';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ProductCard } from '../ProductCard';

function filtredProduct(incomingProduct: Product[], sortBy: string) {
  let changedProduct = [...incomingProduct];

  changedProduct = changedProduct.filter((product) => {
    return product.lang === 'uk';
  });

  changedProduct.sort((a, b) => {
    const aPrice = a.priceDiscount ? a.priceDiscount : a.priceRegular;
    const bPrice = b.priceDiscount ? b.priceDiscount : b.priceRegular;

    switch (sortBy) {
      case 'alphabetically':
        return a.name.localeCompare(b.name);

      case 'cheapest':
        return aPrice - bPrice;

      case 'newest':
      default:
        return b.publicationYear - a.publicationYear;
    }
  });

  return changedProduct;
}

export const Catalog = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number | 'all'>(16);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = Number(searchParams.get('page') || 1);
  const sort = searchParams.get('sort') || 'newest';
  const MAX_VISIBLE = 5;

  const filtresProducts = filtredProduct(product, sort);

  const totalPages =
    itemsPerPage === 'all' ? 1 : (
      Math.ceil(filtresProducts.length / itemsPerPage)
    );

  const safePage = Math.min(pageFromUrl, totalPages || 1);

  const currentProducts =
    itemsPerPage === 'all' ? filtresProducts : (
      filtresProducts.slice(
        (safePage - 1) * Number(itemsPerPage),
        safePage * Number(itemsPerPage),
      )
    );

  let startPage = Math.max(safePage - Math.floor(MAX_VISIBLE / 2), 1);
  let endPage = startPage + MAX_VISIBLE - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - MAX_VISIBLE + 1, 1);
  }

  const visiblePages = [];

  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  useEffect(() => {
    getPaperbacks()
      .then(setProduct)
      .catch(() => console.log('Error'));
  }, []);

  const handleChangeNumber = useCallback(
    (targetPage: number) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      newSearchParams.set('page', targetPage.toString());

      navigate({
        pathname: location.pathname,
        search: `?${newSearchParams.toString()}`,
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [searchParams, navigate, location.pathname],
  );

  const handleChangeArrow = (order: 'prev' | 'next') => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    const targetPage = order === 'prev' ? safePage - 1 : safePage + 1;

    newSearchParams.set('page', targetPage.toString());

    navigate({
      pathname: location.pathname,
      search: `?${newSearchParams.toString()}`,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (totalPages === 0) return;

    if (pageFromUrl < 1) {
      handleChangeNumber(1);
      return;
    }

    if (pageFromUrl > totalPages) {
      handleChangeNumber(totalPages);
    }
  }, [pageFromUrl, totalPages, handleChangeNumber]);

  return (
    <GridContainer className="overflow-hidden">
      <div className="col-span-full flex flex-col items-start mb-8">
        <h1 className="text-[#313237] text-[32px] md:text-[48px] font-manrope font-bold leading-tight tracking-[-0.01em] md:tracking-[-0.02em] mb-2">
          Paper books
        </h1>
        <p className="text-[#89939A] text-[14px] font-manrope font-medium">
          {`${filtresProducts.length} books`}
        </p>
      </div>

      <div className="col-span-2 md:col-span-4 lg:col-span-4 text-left mb-[24px]">
        <label className="text-[#89939A] text-[12px] font-manrope font-medium mb-[3px]">
          Sort by
        </label>
        <Select
          value={sort}
          onValueChange={(value) => {
            setSearchParams((prev) => {
              const params = new URLSearchParams(prev);

              if (value) {
                params.set('sort', value);
                params.set('page', '1');
              } else {
                params.delete('sort');
              }

              return params;
            });
          }}
        >
          <SelectTrigger className="w-full h-[40px] rounded-[8px] border-[#E2E6E9] bg-white font-manrope text-[#313237] text-[14px] font-bold">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="alphabetically">Alphabetically</SelectItem>
              <SelectItem value="cheapest">Cheapest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="col-span-2 md:col-span-3 lg:col-span-3 text-left mb-[24px]">
        <label className="text-[#89939A] text-[12px] font-manrope font-medium mb-[3px]">
          Items on page
        </label>
        <Select
          defaultValue="16"
          onValueChange={(value) => {
            if (value === 'all') {
              setItemsPerPage('all');
            } else {
              setItemsPerPage(Number(value));
            }

            handleChangeNumber(1);
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

      {currentProducts.map((currentProduct) => (
        <div
          key={currentProduct.id}
          className="
            col-span-4
            md:col-span-6
            lg:col-span-6
            w-full
            max-w-[288px]
            mb-[24px]
            justify-self-center
            flex justify-center
          "
        >
          <ProductCard book={currentProduct} />
        </div>
      ))}

      <div className="col-span-full flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (safePage > 1) {
                    handleChangeArrow('prev');
                  }
                }}
              />
            </PaginationItem>
            {visiblePages.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={safePage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    handleChangeNumber(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (safePage < totalPages) {
                    handleChangeArrow('next');
                  }
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </GridContainer>
  );
};
