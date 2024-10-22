import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import styles from '/styles/appointment.module.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Head from 'next/head';
import AppointmentBody from '@/components/AppointmentBody';

function MakeAppointment() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    date: '',
    doctor: '',
    description: '',
    name: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
       <Head>
        <title>MakeAppointment - HealthSync</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AppointmentBody/>
      <Footer />
      
    </>
  );
}

export default MakeAppointment;
