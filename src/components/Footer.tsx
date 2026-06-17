'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import NextLink from 'next/link';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { SxProps, Theme } from '@mui/material/styles';
import logo from '@/Images/logo/product-catalogue-logo.png';

const ease = [0.22, 1, 0.36, 1] as const;

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Historical Clothing & Apparel', href: '/products/historical-clothing' },
  { label: 'Tents & Shelters', href: '/products/tents-shelters' },
  { label: 'Bags & Canvas Accessories', href: '/products/bags-canvas' },
  { label: 'Contact Us', href: '/contact' },
];

const contactItems = [
  {
    icon: <EmailIcon sx={{ fontSize: '1rem', color: '#B8922A', mt: '2px', flexShrink: 0 }} />,
    label: 'Khaimahpk@gmail.com',
    href: 'mailto:Khaimahpk@gmail.com',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: '1rem', color: '#B8922A', mt: '2px', flexShrink: 0 }} />,
    label: '03138612346',
    href: 'tel:+923138612346',
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: '1rem', color: '#B8922A', mt: '2px', flexShrink: 0 }} />,
    label: 'WhatsApp Us',
    href: 'https://wa.me/923138612346',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: '1rem', color: '#B8922A', mt: '2px', flexShrink: 0 }} />,
    label: '105-C Small Industrial Estate, Sialkot, Pakistan — 51480',
    href: null,
  },
];

const linkStyle: SxProps<Theme> = {
  color: 'rgba(245,237,214,0.6)',
  fontSize: '0.82rem',
  fontFamily: 'var(--font-lora), "Lora", serif',
  letterSpacing: '0.03em',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  display: 'block',
  mb: 1.5,
  '&:hover': { color: '#B8922A' },
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' });

  return (
    <Box
      component="footer"
      ref={ref}
      sx={{
        backgroundColor: '#141412',
        borderTop: '1px solid rgba(184,146,42,0.25)',
        pt: { xs: 7, md: 9 },
        pb: 0,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 3, md: 6 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1.6fr 1fr 1fr' },
          gap: { xs: 5, md: 6 },
          pb: { xs: 6, md: 8 },
        }}
      >
        {/* Column 1 — Logo & tagline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0, ease }}
        >
        <Box>
          <NextLink href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Box
              sx={{
                backgroundColor: '#F5EDD6',
                px: 1.5,
                py: 0.75,
                display: 'inline-flex',
                alignItems: 'center',
                borderLeft: '3px solid #B8922A',
                mb: 2,
              }}
            >
              <Image
                src={logo}
                alt="Company Logo"
                height={48}
                style={{ objectFit: 'contain', width: 'auto', display: 'block' }}
              />
            </Box>
          </NextLink>
          <Typography
            sx={{
              color: 'rgba(245,237,214,0.5)',
              fontSize: '0.83rem',
              lineHeight: 1.8,
              fontFamily: 'var(--font-lora), "Lora", serif',
              mt: 2,
              maxWidth: 300,
            }}
          >
            Faithful reproductions of historical military garments, canvas shelters, and
            period accessories — crafted for collectors, reenactors, and the field.
          </Typography>

          {/* Khaki accent line */}
          <Box sx={{ width: 48, height: 2, backgroundColor: '#B8922A', mt: 3 }} />
        </Box>
        </motion.div>

        {/* Column 2 — Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15, ease }}
        >
        <Box>
          <Typography
            sx={{
              color: '#F5EDD6',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-lora), "Lora", serif',
              fontWeight: 700,
              mb: 3,
            }}
          >
            Quick Links
          </Typography>
          {quickLinks.map((link) => (
            <Box
              key={link.href}
              component={NextLink}
              href={link.href}
              sx={linkStyle}
            >
              {link.label}
            </Box>
          ))}
        </Box>
        </motion.div>

        {/* Column 3 — Contact */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.3, ease }}
        >
        <Box>
          <Typography
            sx={{
              color: '#F5EDD6',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-lora), "Lora", serif',
              fontWeight: 700,
              mb: 3,
            }}
          >
            Get in Touch
          </Typography>
          {contactItems.map((item) => (
            <Box
              key={item.label}
              component={item.href ? 'a' : 'div'}
              {...(item.href ? {
                href: item.href,
                target: item.href.startsWith('http') ? '_blank' : undefined,
                rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined,
              } : {})}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                mb: 2,
                textDecoration: 'none',
                '&:hover span': { color: '#B8922A' },
              }}
            >
              {item.icon}
              <Typography
                component="span"
                sx={{
                  color: 'rgba(245,237,214,0.6)',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-lora), "Lora", serif',
                  transition: 'color 0.2s ease',
                  lineHeight: 1.5,
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
        </motion.div>
      </Box>

      {/* Bottom copyright bar */}
      <Divider sx={{ borderColor: 'rgba(184,146,42,0.15)' }} />
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 3, md: 6 },
          py: 3,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography
          sx={{
            color: 'rgba(245,237,214,0.3)',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-lora), "Lora", serif',
            letterSpacing: '0.04em',
          }}
        >
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
        <Typography
          sx={{
            color: 'rgba(184,146,42,0.4)',
            fontSize: '0.7rem',
            fontFamily: 'var(--font-lora), "Lora", serif',
            letterSpacing: '0.06em',
          }}
        >
          Crafted for History. Built for the Field.
        </Typography>
      </Box>
    </Box>
  );
}
