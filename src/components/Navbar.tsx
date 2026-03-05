'use client';

import { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '@/Images/logo/product-catalogue-logo.png';

const productLinks = [
  { label: 'Historical Clothing & Apparel', href: '/products/historical-clothing' },
  { label: 'Tents & Shelters', href: '/products/tents-shelters' },
  { label: 'Bags & Canvas Accessories', href: '/products/bags-canvas' },
];

export default function Navbar() {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const handleProductsOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(e.currentTarget);
  };
  const handleProductsClose = () => setMenuAnchor(null);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#1E1E1B',
        borderBottom: '1px solid rgba(184,146,42,0.35)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 5 }, py: 1, minHeight: { xs: 64, md: 72 } }}>
        {/* Logo */}
        <NextLink href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              backgroundColor: '#F5EDD6',
              px: 1.5,
              py: 0.75,
              display: 'inline-flex',
              alignItems: 'center',
              borderLeft: '3px solid #B8922A',
            }}
          >
            <Image
              src={logo}
              alt="Company Logo"
              height={44}
              style={{ objectFit: 'contain', width: 'auto', display: 'block' }}
              priority
            />
          </Box>
        </NextLink>

        {/* Desktop Nav Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
          <Button
            component={NextLink}
            href="/"
            sx={{
              color: '#F5EDD6',
              fontWeight: 500,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              '&:hover': { color: '#B8922A', backgroundColor: 'transparent' },
            }}
          >
            Home
          </Button>

          <Button
            endIcon={<KeyboardArrowDownIcon sx={{ fontSize: '1rem !important' }} />}
            onClick={handleProductsOpen}
            sx={{
              color: Boolean(menuAnchor) ? '#B8922A' : '#F5EDD6',
              fontWeight: 500,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              '&:hover': { color: '#B8922A', backgroundColor: 'transparent' },
            }}
          >
            Products
          </Button>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleProductsClose}
            transformOrigin={{ horizontal: 'left', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            slotProps={{
              list: { disablePadding: true },
              paper: {
                sx: {
                  mt: 0.5,
                  minWidth: 240,
                },
              },
            }}
          >
            {productLinks.map((item) => (
              <MenuItem
                key={item.href}
                component={NextLink}
                href={item.href}
                onClick={handleProductsClose}
                sx={{ py: 1.5, px: 3 }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>

          <Button
            component={NextLink}
            href="/contact"
            sx={{
              color: '#F5EDD6',
              fontWeight: 500,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              '&:hover': { color: '#B8922A', backgroundColor: 'transparent' },
            }}
          >
            Contact Us
          </Button>
        </Box>

        {/* Mobile Hamburger */}
        <IconButton
          sx={{ display: { xs: 'flex', md: 'none' }, color: '#F5EDD6' }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: '#1E1E1B',
              width: 280,
              borderLeft: '1px solid rgba(184,146,42,0.35)',
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton sx={{ color: '#F5EDD6' }} onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(184,146,42,0.25)' }} />
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton component={NextLink} href="/" onClick={() => setDrawerOpen(false)}>
              <ListItemText
                primary="Home"
                slotProps={{ primary: { sx: { color: '#F5EDD6', letterSpacing: '0.1em', fontSize: '0.85rem' } } }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setMobileProductsOpen(!mobileProductsOpen)}>
              <ListItemText
                primary="Products"
                slotProps={{ primary: { sx: { color: '#F5EDD6', letterSpacing: '0.1em', fontSize: '0.85rem' } } }}
              />
              {mobileProductsOpen ? (
                <ExpandLessIcon sx={{ color: '#B8922A' }} />
              ) : (
                <ExpandMoreIcon sx={{ color: '#B8922A' }} />
              )}
            </ListItemButton>
          </ListItem>
          <Collapse in={mobileProductsOpen}>
            {productLinks.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={NextLink}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{ pl: 4 }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: { sx: { color: '#B8922A', fontSize: '0.8rem', letterSpacing: '0.04em' } },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton component={NextLink} href="/contact" onClick={() => setDrawerOpen(false)}>
              <ListItemText
                primary="Contact Us"
                slotProps={{ primary: { sx: { color: '#F5EDD6', letterSpacing: '0.1em', fontSize: '0.85rem' } } }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
