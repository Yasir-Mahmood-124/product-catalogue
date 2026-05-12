'use client';

import { useState, Fragment } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Divider,
  Breadcrumbs,
  Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import type { Category, Product } from '@/lib/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── Size Table ─────────────────────────────────────────────────────────────
function SizeTable({ sizes }: { sizes: Product['sizes'] }) {
  const isSimpleList = !sizes.columns && sizes.rows[0]?.length === 1;
  const isDimensions = sizes.columns?.length === 2;
  const isFullTable = sizes.columns && sizes.columns.length > 2;

  return (
    <Box sx={{ mt: 0.5 }}>
      {sizes.label && (
        <Typography
          sx={{
            fontFamily: 'var(--font-lora), serif',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#B8922A',
            mb: 1.5,
            fontWeight: 600,
          }}
        >
          {sizes.label}
        </Typography>
      )}

      {/* Simple list (tents, tarpaulines) */}
      {isSimpleList && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: sizes.rows.length > 6 ? '1fr 1fr' : '1fr',
            gap: '4px 24px',
          }}
        >
          {sizes.rows.map((row, i) => (
            <Typography
              key={i}
              sx={{
                fontFamily: 'var(--font-lora), serif',
                fontSize: '0.82rem',
                color: 'rgba(245,237,214,0.75)',
                lineHeight: 1.7,
              }}
            >
              {row[0]}
            </Typography>
          ))}
        </Box>
      )}

      {/* Dimensions table (bags — 2 columns) */}
      {isDimensions && (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 24px', alignItems: 'center' }}>
          {sizes.rows.map((row, i) => (
            <Fragment key={i}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-lora), serif',
                  fontSize: '0.82rem',
                  color: 'rgba(245,237,214,0.55)',
                  lineHeight: 1.8,
                }}
              >
                {row[0]}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'var(--font-lora), serif',
                  fontSize: '0.82rem',
                  color: 'rgba(245,237,214,0.85)',
                  lineHeight: 1.8,
                  fontWeight: 600,
                }}
              >
                {row[1]}
              </Typography>
            </Fragment>
          ))}
        </Box>
      )}

      {/* Full sizing table (clothing) */}
      {isFullTable && sizes.columns && (
        <Box sx={{ overflowX: 'auto' }}>
          <Box
            component="table"
            sx={{
              borderCollapse: 'collapse',
              width: '100%',
              minWidth: 260,
              '& th, & td': {
                padding: '6px 14px',
                textAlign: 'center',
                fontFamily: 'var(--font-lora), serif',
                fontSize: '0.8rem',
                borderBottom: '1px solid rgba(184,146,42,0.12)',
              },
              '& th': {
                color: 'rgba(184,146,42,0.85)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
              },
              '& td': { color: 'rgba(245,237,214,0.8)' },
              '& td:first-of-type': {
                color: '#B8922A',
                fontWeight: 700,
                textAlign: 'left',
                paddingLeft: 0,
              },
              '& th:first-of-type': { textAlign: 'left', paddingLeft: 0 },
              '& tr:last-of-type td': { borderBottom: 'none' },
            }}
          >
            <thead>
              <tr>
                {sizes.columns.map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizes.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Box>
        </Box>
      )}
    </Box>
  );
}

// ─── Product Detail Modal ────────────────────────────────────────────────────
function ProductModal({
  product,
  open,
  onClose,
}: {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);

  if (!product) return null;

  const total = product.images.length;
  const prev = () => setImgIndex((i) => (i - 1 + total) % total);
  const next = () => setImgIndex((i) => (i + 1) % total);

  const fields = [
    { label: 'Material', value: product.material },
    { label: 'Design',   value: product.design },
    { label: 'Usage',    value: product.usage },
  ].filter((f) => f.value);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      scroll="paper"
      slotProps={{
        paper: {
          sx: {
            backgroundColor: '#1E1E1B',
            border: '1px solid rgba(184,146,42,0.25)',
            borderRadius: 0,
            m: { xs: 1, sm: 2 },
            maxHeight: '95vh',
          },
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 10,
            color: '#F5EDD6',
            backgroundColor: 'rgba(30,30,27,0.85)',
            border: '1px solid rgba(184,146,42,0.3)',
            borderRadius: 0,
            '&:hover': { backgroundColor: 'rgba(184,146,42,0.15)' },
          }}
        >
          <CloseIcon sx={{ fontSize: '1.1rem' }} />
        </IconButton>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          }}
        >
          {/* ── Left: Image gallery ── */}
          <Box
            sx={{
              position: 'relative',
              backgroundColor: '#131311',
              minHeight: { xs: 280, sm: 380, md: 500 },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Main image */}
            <Box sx={{ position: 'relative', flex: 1, minHeight: { xs: 280, md: 400 } }}>
              {product.images[imgIndex] && (product.images[imgIndex] as { src?: string }).src !== '' && (
                <Image
                  src={product.images[imgIndex]}
                  alt={`${product.name} — image ${imgIndex + 1}`}
                  fill
                  style={{ objectFit: 'contain', padding: '16px' }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              )}

              {total > 1 && (
                <>
                  <IconButton
                    onClick={prev}
                    sx={{
                      position: 'absolute',
                      left: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#F5EDD6',
                      backgroundColor: 'rgba(30,30,27,0.7)',
                      border: '1px solid rgba(184,146,42,0.25)',
                      borderRadius: 0,
                      p: '6px',
                      '&:hover': { backgroundColor: 'rgba(184,146,42,0.2)' },
                    }}
                  >
                    <ArrowBackIosNewIcon sx={{ fontSize: '0.9rem' }} />
                  </IconButton>
                  <IconButton
                    onClick={next}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#F5EDD6',
                      backgroundColor: 'rgba(30,30,27,0.7)',
                      border: '1px solid rgba(184,146,42,0.25)',
                      borderRadius: 0,
                      p: '6px',
                      '&:hover': { backgroundColor: 'rgba(184,146,42,0.2)' },
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: '0.9rem' }} />
                  </IconButton>
                  {/* Counter */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      right: 12,
                      backgroundColor: 'rgba(30,30,27,0.8)',
                      px: 1,
                      py: 0.25,
                      border: '1px solid rgba(184,146,42,0.2)',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.68rem', color: '#B8922A', fontFamily: 'var(--font-lora), serif' }}>
                      {imgIndex + 1} / {total}
                    </Typography>
                  </Box>
                </>
              )}
            </Box>

            {/* Thumbnail strip */}
            {total > 1 && (
              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  p: 1.5,
                  overflowX: 'auto',
                  borderTop: '1px solid rgba(184,146,42,0.12)',
                  '&::-webkit-scrollbar': { height: 4 },
                  '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(184,146,42,0.4)' },
                }}
              >
                {product.images.map((img, i) => (
                  <Box
                    key={i}
                    onClick={() => setImgIndex(i)}
                    sx={{
                      position: 'relative',
                      width: 56,
                      height: 56,
                      flexShrink: 0,
                      cursor: 'pointer',
                      border: i === imgIndex
                        ? '2px solid #B8922A'
                        : '2px solid rgba(184,146,42,0.2)',
                      opacity: i === imgIndex ? 1 : 0.55,
                      transition: 'border-color 0.2s, opacity 0.2s',
                      '&:hover': { opacity: 1 },
                    }}
                  >
                    <Image
                      src={img}
                      alt={`thumb ${i + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="56px"
                    />
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* ── Right: Details ── */}
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            {/* Name */}
            <Box>
              <Typography
                sx={{
                  color: '#B8922A',
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-lora), serif',
                  mb: 1,
                }}
              >
                Product Details
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: '#F5EDD6',
                  fontSize: { xs: '1.7rem', md: '2rem' },
                  lineHeight: 1.15,
                }}
              >
                {product.name}
              </Typography>
            </Box>

            <Divider sx={{ borderColor: 'rgba(184,146,42,0.18)' }} />

            {/* Description */}
            <Typography
              sx={{
                fontFamily: 'var(--font-lora), serif',
                fontSize: '0.9rem',
                color: 'rgba(245,237,214,0.75)',
                lineHeight: 1.85,
              }}
            >
              {product.description}
            </Typography>

            {/* Spec fields */}
            {fields.length > 0 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {fields.map((f) => (
                  <Box key={f.label} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-lora), serif',
                        fontSize: '0.72rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#B8922A',
                        fontWeight: 600,
                        minWidth: 72,
                        pt: 0.15,
                      }}
                    >
                      {f.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-lora), serif',
                        fontSize: '0.875rem',
                        color: 'rgba(245,237,214,0.8)',
                        lineHeight: 1.7,
                      }}
                    >
                      {f.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}

            <Divider sx={{ borderColor: 'rgba(184,146,42,0.18)' }} />

            {/* Sizes */}
            <SizeTable sizes={product.sizes} />

            {/* Custom note */}
            <Box
              sx={{
                mt: 'auto',
                pt: 2,
                borderTop: '1px solid rgba(184,146,42,0.12)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-lora), serif',
                  fontSize: '0.8rem',
                  color: 'rgba(184,146,42,0.7)',
                  fontStyle: 'italic',
                }}
              >
                Custom colours, sizes and designs available on request.
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({
  product,
  index,
  onView,
}: {
  product: Product;
  index: number;
  onView: (p: Product) => void;
}) {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: '#1E1E1B',
        border: '1px solid rgba(184,146,42,0.15)',
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
        '&:hover': {
          borderColor: 'rgba(184,146,42,0.55)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
          transform: 'translateY(-4px)',
          '& .view-btn': { backgroundColor: '#B8922A', color: '#1E1E1B' },
          '& .ordinal': { opacity: 0.12 },
        },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingTop: '72%',
          backgroundColor: '#131311',
          overflow: 'hidden',
        }}
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
        {/* Subtle ordinal overlay */}
        <Typography
          className="ordinal"
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 12,
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: '3.5rem',
            fontWeight: 700,
            lineHeight: 1,
            color: '#B8922A',
            opacity: 0.06,
            transition: 'opacity 0.3s',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </Typography>
      </Box>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1, p: 2.5, pb: 1.5 }}>
        <Box sx={{ width: 32, height: 2, backgroundColor: '#B8922A', mb: 1.5, opacity: 0.6 }} />
        <Typography
          variant="h6"
          sx={{
            color: '#F5EDD6',
            fontSize: '1.05rem',
            lineHeight: 1.25,
            mb: 1,
          }}
        >
          {product.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'var(--font-lora), serif',
            fontSize: '0.8rem',
            color: 'rgba(245,237,214,0.5)',
            lineHeight: 1.6,
          }}
        >
          {product.teaser}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2.5, pb: 2.5, pt: 0.5 }}>
        <Button
          className="view-btn"
          onClick={() => onView(product)}
          size="small"
          sx={{
            border: '1px solid rgba(184,146,42,0.45)',
            color: '#B8922A',
            borderRadius: 0,
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-lora), serif',
            px: 2,
            py: 0.75,
            transition: 'background-color 0.2s, color 0.2s',
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}

// ─── Main CategoryPage ────────────────────────────────────────────────────────
export default function CategoryPage({ category }: { category: Category }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleView = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />

      <Box sx={{ backgroundColor: '#F5EDD6', minHeight: '100vh' }}>

        {/* ── Page Header ── */}
        <Box
          sx={{
            backgroundColor: '#1E1E1B',
            borderBottom: '1px solid rgba(184,146,42,0.2)',
            px: { xs: 3, md: 8 },
            pt: { xs: 5, md: 7 },
            pb: { xs: 5, md: 7 },
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative background ordinal */}
          <Typography
            aria-hidden
            sx={{
              position: 'absolute',
              right: { xs: -20, md: 40 },
              bottom: -20,
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: { xs: '10rem', md: '16rem' },
              fontWeight: 700,
              color: '#B8922A',
              opacity: 0.04,
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            {category.id === 'historical-clothing' ? '01'
              : category.id === 'tents-shelters' ? '02'
              : '03'}
          </Typography>

          {/* Breadcrumb */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: 'rgba(184,146,42,0.5)', fontSize: '0.85rem' }} />}
            sx={{ mb: 3 }}
          >
            <Typography
              component={NextLink}
              href="/"
              sx={{
                color: 'rgba(245,237,214,0.45)',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-lora), serif',
                textDecoration: 'none',
                '&:hover': { color: '#B8922A' },
              }}
            >
              Home
            </Typography>
            <Typography
              component={NextLink}
              href="/#collections"
              sx={{
                color: 'rgba(245,237,214,0.45)',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-lora), serif',
                textDecoration: 'none',
                '&:hover': { color: '#B8922A' },
              }}
            >
              Products
            </Typography>
            <Typography
              sx={{
                color: '#B8922A',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-lora), serif',
              }}
            >
              {category.name}
            </Typography>
          </Breadcrumbs>

          {/* Title */}
          <Box sx={{ maxWidth: 760 }}>
            <Typography
              sx={{
                color: '#B8922A',
                fontSize: '0.65rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-lora), serif',
                mb: 1.5,
              }}
            >
              Collection
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: '#F5EDD6',
                fontSize: { xs: '2.2rem', md: '3.4rem' },
                lineHeight: 1.1,
                mb: 2.5,
              }}
            >
              {category.name}
            </Typography>
            <Box sx={{ width: 56, height: 2, backgroundColor: '#B8922A', mb: 2.5 }} />
            <Typography
              sx={{
                fontFamily: 'var(--font-lora), serif',
                fontSize: { xs: '0.9rem', md: '1rem' },
                color: 'rgba(245,237,214,0.6)',
                lineHeight: 1.8,
                maxWidth: 560,
              }}
            >
              {category.tagline}
            </Typography>
          </Box>

          {/* Product count */}
          <Chip
            label={`${category.products.length} Products`}
            size="small"
            sx={{
              mt: 3,
              backgroundColor: 'transparent',
              border: '1px solid rgba(184,146,42,0.35)',
              color: 'rgba(184,146,42,0.8)',
              borderRadius: 0,
              fontFamily: 'var(--font-lora), serif',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
            }}
          />
        </Box>

        {/* ── Product Grid ── */}
        <Box
          sx={{
            px: { xs: 2, sm: 4, md: 7 },
            py: { xs: 6, md: 9 },
            maxWidth: 1400,
            mx: 'auto',
          }}
        >
          <Grid container spacing={3}>
            {category.products.map((product, i) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProductCard product={product} index={i} onView={handleView} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ── Custom Note Banner ── */}
        <Box
          sx={{
            backgroundColor: '#1E1E1B',
            borderTop: '1px solid rgba(184,146,42,0.18)',
            borderBottom: '1px solid rgba(184,146,42,0.18)',
            py: { xs: 4, md: 5 },
            px: { xs: 3, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              color: 'rgba(245,237,214,0.5)',
              fontFamily: 'var(--font-lora), serif',
              fontSize: '0.78rem',
              letterSpacing: '0.06em',
              mb: 0.75,
            }}
          >
            All products are available in custom colours, sizes and designs.
          </Typography>
          <Typography
            component={NextLink}
            href="/contact"
            sx={{
              color: '#B8922A',
              fontFamily: 'var(--font-lora), serif',
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: 600,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Contact us to enquire →
          </Typography>
        </Box>
      </Box>

      <Footer />

      {/* ── Product Detail Modal ── */}
      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onClose={handleClose}
      />
    </>
  );
}
