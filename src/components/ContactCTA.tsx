'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        position: 'relative',
        backgroundColor: '#1E1E1B',
        overflow: 'hidden',
        py: { xs: 8, md: 10 },
        px: { xs: 3, md: 6 },
        // Texture overlay
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          pointerEvents: 'none',
        },
        // Khaki left border accent
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: 4,
          height: '100%',
          backgroundColor: '#B8922A',
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease }}
        style={{ position: 'relative', zIndex: 1 }}
      >
      <Box
        sx={{
          maxWidth: 760,
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <Typography
          sx={{
            color: '#B8922A',
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-lora), "Lora", serif',
            mb: 2,
          }}
        >
          Custom Orders Welcome
        </Typography>

        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            color: '#F5EDD6',
            fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' },
            lineHeight: 1.2,
            mb: 2.5,
          }}
        >
          Have a custom order or inquiry?
          <Box component="span" sx={{ display: 'block', color: '#B8922A' }}>
            We&apos;d love to hear from you.
          </Box>
        </Typography>

        {/* Body */}
        <Typography
          sx={{
            color: 'rgba(245,237,214,0.65)',
            fontSize: { xs: '0.9rem', md: '1rem' },
            lineHeight: 1.75,
            mb: 5,
            fontFamily: 'var(--font-lora), "Lora", serif',
          }}
        >
          Whether you need a bespoke uniform, a bulk tent order, or specialist canvas work —
          our craftsmen are ready to discuss your requirements.
        </Typography>

        {/* CTA button */}
        <Button
          component={NextLink}
          href="/contact"
          variant="outlined"
          size="large"
          sx={{
            borderColor: '#B8922A',
            color: '#B8922A',
            borderWidth: 1.5,
            px: { xs: 4, md: 6 },
            py: 1.6,
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            fontWeight: 700,
            '&:hover': {
              backgroundColor: '#B8922A',
              color: '#1A1A17',
              borderColor: '#B8922A',
              transform: 'translateY(-1px)',
              boxShadow: '0 6px 24px rgba(184,146,42,0.3)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          Contact Us
        </Button>
      </Box>
      </motion.div>
    </Box>
  );
}
