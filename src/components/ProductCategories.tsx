'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const categories = [
  {
    ordinal: '01',
    title: 'Historical Clothing & Apparel',
    shortTitle: 'Clothing\n& Apparel',
    description:
      'Authentic uniforms, tunics, greatcoats, and period garments — stitched to exact historical patterns for the discerning reenactor.',
    href: '/products/historical-clothing',
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 8L8 16L14 18V40H34V18L40 16L32 8C30 12 26 14 24 14C22 14 18 12 16 8Z"
          stroke="#B8922A" strokeWidth="1.5" strokeLinejoin="round" fill="none"
        />
        <line x1="14" y1="23" x2="34" y2="23" stroke="#B8922A" strokeWidth="1" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    ordinal: '02',
    title: 'Tents & Shelters',
    shortTitle: 'Tents\n& Shelters',
    description:
      'Canvas bell tents, ridge tents, and period-accurate camp shelters — built to endure the elements and honour history.',
    href: '/products/tents-shelters',
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="24,6 42,40 6,40" stroke="#B8922A" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <line x1="24" y1="6" x2="24" y2="40" stroke="#B8922A" strokeWidth="1" strokeDasharray="3 2" />
        <rect x="20" y="30" width="8" height="10" stroke="#B8922A" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    ordinal: '03',
    title: 'Bags & Canvas Accessories',
    shortTitle: 'Bags &\nCanvas Accessories',
    description:
      'Haversacks, kit bags, cartridge pouches, and canvas accessories crafted with period-correct hardware and stitching.',
    href: '/products/bags-canvas',
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="18" width="28" height="22" stroke="#B8922A" strokeWidth="1.5" fill="none" />
        <path d="M17 18V14C17 11.8 19 10 21 10H27C29 10 31 11.8 31 14V18" stroke="#B8922A" strokeWidth="1.5" />
        <line x1="10" y1="26" x2="38" y2="26" stroke="#B8922A" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="24" cy="22" r="2" stroke="#B8922A" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: i * 0.15,
      ease,
    },
  }),
};

export default function ProductCategories() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px 0px' });

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{
        backgroundColor: '#F5EDD6',
        py: { xs: 9, md: 14 },
        px: { xs: 2, sm: 4, md: 6 },
        // Subtle grain texture on parchment
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 7, md: 10 } }}>
          <Typography
            sx={{
              color: '#B8922A',
              fontSize: '0.68rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-lora), "Lora", serif',
              mb: 1.5,
            }}
          >
            Browse by Category
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: '#1A1A17',
              fontSize: { xs: '2.2rem', md: '3rem' },
              lineHeight: 1.1,
            }}
          >
            Our Collections
          </Typography>
          <Box sx={{ width: 56, height: 2, backgroundColor: '#B8922A', mx: 'auto', mt: 2.5 }} />
        </Box>
      </motion.div>

      {/* Cards grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: { xs: 3, md: '28px' },
          maxWidth: 1240,
          mx: 'auto',
        }}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.href}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
            style={{ display: 'flex' }}
          >
            <NextLink href={cat.href} style={{ textDecoration: 'none', display: 'flex', width: '100%' }}>
              <Box
                sx={{
                  position: 'relative',
                  backgroundColor: '#1E1E1B',
                  border: '1px solid rgba(184,146,42,0.18)',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(184,146,42,0.7)',
                    boxShadow: '0 24px 64px rgba(0,0,0,0.45)',
                    '& .top-bar': { transform: 'scaleX(1)' },
                    '& .cta-arrow': { transform: 'translateX(6px)' },
                    '& .cat-heading': { color: '#B8922A' },
                    '& .ordinal': { opacity: 0.14 },
                  },
                }}
              >
                {/* Animated top accent bar */}
                <Box
                  className="top-bar"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    backgroundColor: '#B8922A',
                    transformOrigin: 'left',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.4s ease',
                    zIndex: 2,
                  }}
                />

                {/* Top section: ordinal + icon */}
                <Box
                  sx={{
                    position: 'relative',
                    pt: 4,
                    px: { xs: 3.5, md: 4 },
                    pb: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Icon */}
                  <Box sx={{ mt: 0.5 }}>{cat.icon}</Box>

                  {/* Ordinal — decorative large number */}
                  <Typography
                    className="ordinal"
                    sx={{
                      fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif',
                      fontSize: '5.5rem',
                      fontWeight: 700,
                      lineHeight: 1,
                      color: '#B8922A',
                      opacity: 0.08,
                      transition: 'opacity 0.3s ease',
                      userSelect: 'none',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {cat.ordinal}
                  </Typography>
                </Box>

                {/* Separator */}
                <Box sx={{ mx: { xs: 3.5, md: 4 }, mb: 3, height: 1, backgroundColor: 'rgba(184,146,42,0.2)' }} />

                {/* Content */}
                <Box sx={{ px: { xs: 3.5, md: 4 }, pb: { xs: 3.5, md: 4.5 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h3"
                    className="cat-heading"
                    sx={{
                      color: '#F5EDD6',
                      fontSize: { xs: '1.55rem', md: '1.7rem' },
                      lineHeight: 1.2,
                      mb: 2.5,
                      whiteSpace: 'pre-line',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {cat.shortTitle}
                  </Typography>

                  <Typography
                    sx={{
                      color: 'rgba(245,237,214,0.55)',
                      fontSize: '0.855rem',
                      lineHeight: 1.8,
                      fontFamily: 'var(--font-lora), "Lora", serif',
                      flexGrow: 1,
                      mb: 4,
                    }}
                  >
                    {cat.description}
                  </Typography>

                  {/* CTA */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mt: 'auto',
                      pt: 2.5,
                      borderTop: '1px solid rgba(184,146,42,0.15)',
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'rgba(184,146,42,0.75)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-lora), "Lora", serif',
                        fontWeight: 600,
                      }}
                    >
                      View Collection
                    </Typography>
                    <ArrowForwardIcon
                      className="cta-arrow"
                      sx={{
                        fontSize: '0.85rem',
                        color: 'rgba(184,146,42,0.75)',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </NextLink>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
