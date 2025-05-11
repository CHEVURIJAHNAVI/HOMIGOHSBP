import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Link,
  Divider,
} from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';  // Importing useTranslation hook

const primaryColor = '#00007d';

export default function Home() {
  const { t } = useTranslation(); // Access the translation function

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', py: 6, bgcolor: '#ADD8E6' }}>
        <img
          src="image.png"
          alt={t('headerBannerAlt')}
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
        />
        <Typography variant="h3" fontWeight="bold" color={primaryColor} mt={3}>
          {t('welcomeMessage')}
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          {t('homeDescription')}
        </Typography>
      </Box>

      {/* Our Story */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" fontWeight="bold" color={primaryColor} gutterBottom>
          {t('ourStoryTitle')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t('ourStoryDescription')}
        </Typography>
      </Container>

      {/* Features Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold" color={primaryColor} gutterBottom>
          {t('keyFeaturesTitle')}
        </Typography>
        <Grid container spacing={4} justifyContent="center" mt={2}>
          {[
            'secureLogins',
            'easyServiceBooking',
            'dashboardAnalytics',
            'realTimeTracking',
            'customerSupport',
            'multiplePaymentOptions',
            'invoiceHistoryManagement',
            'verifiedProfessionals',
          ].map((feature, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ p: 3, textAlign: 'center', bgcolor: '#ffffff', boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {t(feature)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Reviews Section */}
      <Box sx={{ bgcolor: '#f1f3f5', py: 6 }}>
        <Container>
          <Typography variant="h4" align="center" fontWeight="bold" color={primaryColor} gutterBottom>
            {t('reviewsTitle')}
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={2}>
            {[
              { name: t('customerName'), quote: t('customerQuote') },
              { name: t('eventManagerName'), quote: t('eventManagerQuote') },
              { name: t('workingMomName'), quote: t('workingMomQuote') },
              { name: t('freelancerName'), quote: t('freelancerQuote') },
              { name: t('seniorCitizenName'), quote: t('seniorCitizenQuote') },
              { name: t('startupOwnerName'), quote: t('startupOwnerQuote') },
              { name: t('tenantName'), quote: t('tenantQuote') },
              { name: t('propertyManagerName'), quote: t('propertyManagerQuote') },
            ].map((review, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card sx={{ p: 3 }}>
                  <Typography variant="body1" fontStyle="italic" color="text.secondary">
                    {review.quote}
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold" mt={2}>
                    - {review.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: primaryColor, color: 'white', pt: 6, pb: 2 }} component="footer">
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t('quickLinks')}
              </Typography>
              {['aboutUs', 'contactUs', 'termsConditions', 'privacyPolicy'].map((text, i) => (
                <Link
                  key={i}
                  href={`/${text.toLowerCase().replace(/ & | /g, '-')}`}
                  color="inherit"
                  underline="hover"
                  display="block"
                  mb={1}
                >
                  {t(text)}
                </Link>
              ))}
            </Grid>

            {/* Follow Us */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t('followUs')}
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <Link href="https://facebook.com" color="inherit" underline="hover" target="_blank" rel="noreferrer">
                  <Facebook fontSize="small" sx={{ mr: 1 }} /> Facebook
                </Link>
                <Link href="https://twitter.com" color="inherit" underline="hover" target="_blank" rel="noreferrer">
                  <Twitter fontSize="small" sx={{ mr: 1 }} /> Twitter
                </Link>
                <Link href="https://instagram.com" color="inherit" underline="hover" target="_blank" rel="noreferrer">
                  <Instagram fontSize="small" sx={{ mr: 1 }} /> Instagram
                </Link>
                <Link href="https://linkedin.com" color="inherit" underline="hover" target="_blank" rel="noreferrer">
                  <LinkedIn fontSize="small" sx={{ mr: 1 }} /> LinkedIn
                </Link>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, bgcolor: 'grey.700' }} />
          <Typography variant="body2" color="grey.400" align="center">
            © 2025 Home Services Portal. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
