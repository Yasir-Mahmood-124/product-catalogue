'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        backgroundColor: '#1E1E1B',
        minHeight: { xs: '88vh', md: '92vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          pointerEvents: 'none',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,8,0.55) 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        },
      }}
    >
      {/* Decorative top rule — animates in from center */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
        style={{
          position: 'absolute',
          top: 48,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 80,
          height: 2,
          backgroundColor: '#B8922A',
          zIndex: 1,
          transformOrigin: 'center',
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          px: { xs: 3, sm: 6, md: 8 },
          maxWidth: 860,
          mx: 'auto',
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease }}
        >
          <Typography
            sx={{
              color: '#B8922A',
              fontSize: { xs: '0.7rem', md: '0.75rem' },
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-lora), "Lora", serif',
              mb: 3,
            }}
          >
            Heritage Craftsmanship · Since Antiquity
          </Typography>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
        >
          <Typography
            variant="h1"
            sx={{
              color: '#F5EDD6',
              fontSize: { xs: '2.6rem', sm: '3.8rem', md: '5rem', lg: '5.8rem' },
              lineHeight: 1.08,
              mb: 3,
              fontWeight: 700,
            }}
          >
            Crafted for History.
            <Box component="span" sx={{ display: 'block', color: '#B8922A' }}>
              Built for the Field.
            </Box>
          </Typography>
        </motion.div>

        {/* Sub-copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
        >
          <Typography
            sx={{
              color: 'rgba(245,237,214,0.7)',
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              lineHeight: 1.75,
              mb: 5,
              maxWidth: 560,
              mx: 'auto',
              fontFamily: 'var(--font-lora), "Lora", serif',
            }}
          >
            Authentic military surplus, historical clothing, and canvas goods — faithfully
            reproduced for reenactors, collectors, and the field.
          </Typography>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.8, ease }}
        >
          <Button
            component={NextLink}
            href="/products"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#B8922A',
              color: '#1A1A17',
              px: { xs: 4, md: 6 },
              py: 1.6,
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              fontWeight: 700,
              '&:hover': {
                backgroundColor: '#9E7A20',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 28px rgba(184,146,42,0.4)',
              },
              transition: 'all 0.22s ease',
            }}
          >
            Explore Products
          </Button>
        </motion.div>
      </Box>

      {/* Decorative bottom rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.9, ease }}
        style={{
          position: 'absolute',
          bottom: 48,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 80,
          height: 2,
          backgroundColor: '#B8922A',
          zIndex: 1,
          transformOrigin: 'center',
        }}
      />
    </Box>
  );
}
