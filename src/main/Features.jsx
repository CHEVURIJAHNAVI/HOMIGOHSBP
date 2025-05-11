import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Avatar,
  Box,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';

// Feature highlights
const features = [
  { title: 'Direct Selling', description: 'Farmers sell directly to customers, eliminating middlemen.' },
  { title: 'Fresh Produce', description: 'Get farm-fresh fruits and vegetables delivered to your door.' },
  { title: 'Fair Pricing', description: 'Fair prices for farmers, affordable rates for customers.' },
  { title: 'Real-Time Updates', description: 'Live updates on market prices and product availability.' },
  { title: 'Easy Payments', description: 'Seamless and secure digital payment options.' },
  { title: 'Farmer Support', description: 'Training and support programs to empower farmers.' },
];

// User reviews
const reviews = [
  {
    name: 'Aarav Sharma',
    profile: 'https://randomuser.me/api/portraits/men/32.jpg',
    review: 'FarmXpress made it possible for me to sell my harvest without worrying about middlemen. Profits doubled!',
  },
  {
    name: 'Priya Desai',
    profile: 'https://randomuser.me/api/portraits/women/44.jpg',
    review: 'I love the freshness of the vegetables. It feels good to directly support farmers.',
  },
  {
    name: 'Rohan Verma',
    profile: 'https://randomuser.me/api/portraits/men/65.jpg',
    review: 'Seamless app experience! Buying directly from farmers has never been easier.',
  },
  {
    name: 'Meera Patel',
    profile: 'https://randomuser.me/api/portraits/women/68.jpg',
    review: 'As a farmer, FarmXpress helped me reach a larger customer base without any hassle.',
  },
  {
    name: 'Vikram Singh',
    profile: 'https://randomuser.me/api/portraits/men/12.jpg',
    review: 'Fair prices and fast delivery. I now buy everything for my kitchen via FarmXpress.',
  },
  {
    name: 'Sneha Reddy',
    profile: 'https://randomuser.me/api/portraits/women/23.jpg',
    review: 'FarmXpress has been a game-changer for farmers like me who want independence.',
  },
];

const Features = () => (
  <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
    {/* Our Story */}
    <Box mb={8}>
      <Typography variant="h4" align="center" fontWeight="bold" color="#2E8B57" gutterBottom>
        Our Story
      </Typography>
      <Typography variant="body1" align="center" color="#6C757D" sx={{ maxWidth: '800px', mx: 'auto' }}>
        FarmXpress was born out of a mission to bridge the gap between hardworking farmers and customers seeking
        fresh, affordable produce. We believe in empowering farmers by giving them a platform to sell directly, ensuring
        they get the rewards they deserve while customers enjoy the best quality at the best price.
      </Typography>
    </Box>

    {/* Features Section */}
    <Typography variant="h4" align="center" fontWeight="bold" color="#2E8B57" gutterBottom>
      Why Choose FarmXpress?
    </Typography>
    <Grid container spacing={4} sx={{ mb: 10 }}>
      {features.map((feature, index) => (
        <Grid item key={feature.title} xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" color="#2E8B57" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="#6C757D">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>

    {/* Reviews Section */}
    <Typography variant="h4" align="center" fontWeight="bold" color="#2E8B57" gutterBottom>
      What Our Users Say
    </Typography>
    <Grid container spacing={4}>
      {reviews.map((review, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card sx={{ p: 2, height: '100%' }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar src={review.profile} alt={review.name} sx={{ mr: 2 }} />
                  <Typography variant="subtitle1" fontWeight="bold">{review.name}</Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2" color="#6C757D">{review.review}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Features;
