'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ease = [0.22, 1, 0.36, 1] as const;

// Shared TextField style — khaki focus, sharp corners, warm input bg
const fieldSx = {
  '& .MuiInputLabel-root': {
    fontFamily: 'var(--font-lora), "Lora", serif',
    color: '#5C5647',
    fontSize: '0.875rem',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#B8922A',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
    backgroundColor: 'rgba(255,255,255,0.55)',
    fontFamily: 'var(--font-lora), "Lora", serif',
    fontSize: '0.9rem',
    color: '#1A1A17',
    '& fieldset': {
      borderColor: 'rgba(26,26,23,0.18)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(184,146,42,0.55)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#B8922A',
      borderWidth: '1.5px',
    },
  },
};

const contactDetails = [
  {
    icon: <EmailIcon sx={{ color: '#B8922A', fontSize: '1.15rem', mt: '2px', flexShrink: 0 }} />,
    label: 'Email',
    value: 'info@example.com',
    href: 'mailto:info@example.com',
  },
  {
    icon: <PhoneIcon sx={{ color: '#B8922A', fontSize: '1.15rem', mt: '2px', flexShrink: 0 }} />,
    label: 'Phone',
    value: '+1 (000) 000-0000',
    href: 'tel:+10000000000',
  },
  {
    icon: <LocationOnIcon sx={{ color: '#B8922A', fontSize: '1.15rem', mt: '2px', flexShrink: 0 }} />,
    label: 'Location',
    value: 'United Kingdom',
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);
  const detailsRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: '-60px 0px' });
  const detailsInView = useInView(detailsRef, { once: true, margin: '-60px 0px' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with real API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* ── Page Header ── */}
        <Box
          component="section"
          sx={{
            position: 'relative',
            backgroundColor: '#1E1E1B',
            py: { xs: 9, md: 12 },
            px: { xs: 3, md: 6 },
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              pointerEvents: 'none',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, transparent 50%, rgba(10,10,8,0.5) 100%)',
              pointerEvents: 'none',
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 720, mx: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <Typography
                sx={{
                  color: '#B8922A',
                  fontSize: '0.68rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-lora), "Lora", serif',
                  mb: 2,
                }}
              >
                Reach Out to Us
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: '#F5EDD6',
                  fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4rem' },
                  lineHeight: 1.1,
                  mb: 2.5,
                  fontWeight: 700,
                }}
              >
                Get in{' '}
                <Box component="span" sx={{ color: '#B8922A' }}>
                  Touch
                </Box>
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45, ease }}
            >
              <Box sx={{ width: 56, height: 2, backgroundColor: '#B8922A', mx: 'auto', mb: 2.5 }} />
              <Typography
                sx={{
                  color: 'rgba(245,237,214,0.62)',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  lineHeight: 1.8,
                  fontFamily: 'var(--font-lora), "Lora", serif',
                }}
              >
                Whether it&apos;s a custom order, a bulk enquiry, or simply a question about our
                work — our team is ready to assist.
              </Typography>
            </motion.div>
          </Box>
        </Box>

        {/* ── Two-column Content ── */}
        <Box
          component="section"
          sx={{
            backgroundColor: '#F5EDD6',
            py: { xs: 8, md: 12 },
            px: { xs: 2, sm: 4, md: 6 },
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          }}
        >
          <Box
            sx={{
              maxWidth: 1160,
              mx: 'auto',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1.15fr 1fr' },
              gap: { xs: 5, lg: '60px' },
              alignItems: 'stretch',
            }}
          >
            {/* ── Left: Contact Form ── */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 40 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease }}
              style={{ height: '100%' }}
            >
              <Box
                sx={{
                  backgroundColor: '#FAF4E8',
                  border: '1px solid rgba(184,146,42,0.2)',
                  pt: { xs: 3.5, md: 5 },
                  px: { xs: 3.5, md: 5 },
                  pb: 0,
                  position: 'relative',
                  height: '100%',
                  boxSizing: 'border-box',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 3,
                    height: '100%',
                    backgroundColor: '#B8922A',
                  },
                }}
              >
                {/* Form header */}
                <Typography
                  sx={{
                    color: '#B8922A',
                    fontSize: '0.68rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-lora), "Lora", serif',
                    mb: 1,
                  }}
                >
                  Send a Message
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#1A1A17',
                    fontSize: { xs: '1.6rem', md: '2rem' },
                    lineHeight: 1.15,
                    mb: 0.75,
                  }}
                >
                  We&apos;d love to hear from you
                </Typography>
                <Box sx={{ width: 44, height: 2, backgroundColor: '#B8922A', mb: 4 }} />

                {submitted ? (
                  /* Success state */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        py: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <CheckCircleOutlineIcon sx={{ fontSize: '3rem', color: '#B8922A' }} />
                      <Typography
                        variant="h4"
                        sx={{ color: '#1A1A17', fontSize: '1.4rem' }}
                      >
                        Message Sent
                      </Typography>
                      <Typography
                        sx={{
                          color: '#5C5647',
                          fontSize: '0.9rem',
                          fontFamily: 'var(--font-lora), "Lora", serif',
                          lineHeight: 1.75,
                          maxWidth: 360,
                        }}
                      >
                        Thank you for reaching out. We&apos;ll be in touch with you shortly.
                      </Typography>
                      <Button
                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                        variant="outlined"
                        sx={{
                          mt: 1,
                          borderColor: '#B8922A',
                          color: '#B8922A',
                          borderWidth: 1.5,
                          fontSize: '0.75rem',
                          letterSpacing: '0.12em',
                          '&:hover': { backgroundColor: '#B8922A', color: '#1A1A17', borderColor: '#B8922A' },
                        }}
                      >
                        Send Another
                      </Button>
                    </Box>
                  </motion.div>
                ) : (
                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      sx={{ ...fieldSx, mb: 3 }}
                    />

                    {/* Email + Phone */}
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                        gap: 2.5,
                        mb: 3,
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        sx={fieldSx}
                      />
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        sx={fieldSx}
                      />
                    </Box>

                    {/* Message */}
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      sx={{ ...fieldSx, mb: 4 }}
                    />

                    {/* Submit */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={loading}
                      sx={{
                        backgroundColor: '#1E1E1B',
                        color: '#F5EDD6',
                        py: 1.8,
                        fontSize: '0.78rem',
                        letterSpacing: '0.15em',
                        fontWeight: 700,
                        borderRadius: 0,
                        fontFamily: 'var(--font-lora), "Lora", serif',
                        border: '1.5px solid transparent',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          borderColor: '#1E1E1B',
                          color: '#1A1A17',
                        },
                        '&.Mui-disabled': {
                          backgroundColor: 'rgba(26,26,23,0.35)',
                          color: 'rgba(245,237,214,0.5)',
                        },
                      }}
                    >
                      {loading ? 'Sending…' : 'Send Message'}
                    </Button>
                  </Box>
                )}
              </Box>
            </motion.div>

            {/* ── Right: Contact Details ── */}
            <motion.div
              ref={detailsRef}
              initial={{ opacity: 0, y: 40 }}
              animate={detailsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.15, ease }}
              style={{ height: '100%' }}
            >
              <Box
                sx={{
                  backgroundColor: '#1E1E1B',
                  border: '1px solid rgba(184,146,42,0.2)',
                  p: { xs: 3.5, md: 5 },
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    pointerEvents: 'none',
                  },
                }}
              >
                {/* Details header */}
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography
                    sx={{
                      color: '#B8922A',
                      fontSize: '0.68rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-lora), "Lora", serif',
                      mb: 1,
                    }}
                  >
                    Contact Information
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#F5EDD6',
                      fontSize: { xs: '1.6rem', md: '2rem' },
                      lineHeight: 1.15,
                      mb: 0.75,
                    }}
                  >
                    How to reach us
                  </Typography>
                  <Box sx={{ width: 44, height: 2, backgroundColor: '#B8922A', mb: 5 }} />

                  {/* Detail items */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {contactDetails.map((item, i) => (
                      <Box
                        key={item.label}
                        sx={{
                          display: 'flex',
                          gap: 2,
                          py: 3,
                          borderBottom: i < contactDetails.length - 1
                            ? '1px solid rgba(184,146,42,0.12)'
                            : 'none',
                        }}
                      >
                        <Box sx={{ mt: '1px' }}>{item.icon}</Box>
                        <Box>
                          <Typography
                            sx={{
                              color: 'rgba(245,237,214,0.4)',
                              fontSize: '0.67rem',
                              letterSpacing: '0.18em',
                              textTransform: 'uppercase',
                              fontFamily: 'var(--font-lora), "Lora", serif',
                              mb: 0.5,
                            }}
                          >
                            {item.label}
                          </Typography>
                          {item.href ? (
                            <Typography
                              component="a"
                              href={item.href}
                              target={undefined}
                              rel={undefined}
                              sx={{
                                color: '#F5EDD6',
                                fontSize: '0.9rem',
                                fontFamily: 'var(--font-lora), "Lora", serif',
                                lineHeight: 1.6,
                                textDecoration: 'none',
                                whiteSpace: 'pre-line',
                                transition: 'color 0.2s ease',
                                '&:hover': { color: '#B8922A' },
                              }}
                            >
                              {item.value}
                            </Typography>
                          ) : (
                            <Typography
                              sx={{
                                color: '#F5EDD6',
                                fontSize: '0.9rem',
                                fontFamily: 'var(--font-lora), "Lora", serif',
                                lineHeight: 1.6,
                                whiteSpace: 'pre-line',
                              }}
                            >
                              {item.value}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  {/* Decorative quotation */}
                  <Box
                    sx={{
                      mt: 5,
                      pt: 4,
                      borderTop: '1px solid rgba(184,146,42,0.2)',
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'rgba(184,146,42,0.5)',
                        fontSize: { xs: '1.15rem', md: '1.3rem' },
                        fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif',
                        fontStyle: 'italic',
                        lineHeight: 1.6,
                      }}
                    >
                      &ldquo;Every great piece of kit starts with a conversation.&rdquo;
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}