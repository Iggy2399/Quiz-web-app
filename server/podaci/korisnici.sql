-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2024 at 12:55 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baza`
--

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

CREATE TABLE `korisnici` (
  `ime_prezime` varchar(50) NOT NULL,
  `email` varchar(40) NOT NULL,
  `lozinka` varchar(25) NOT NULL,
  `uloga` varchar(10) NOT NULL,
  `id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`ime_prezime`, `email`, `lozinka`, `uloga`, `id`) VALUES
('Igor Balić', 'igor.balic.27@gmail.com', 'admin', 'admin', 1),
('Ivan Ivić', 'ivan.ivic@gmail.com', '12345', 'igrac', 2),
('Pero perić', 'pero.peric@gmail.com', 'pero', 'igrac', 3),
('Netko', 'netko@gmail.com', 'admin', 'igrac', 14),
('Igor Balić', 'igor.balic.27@gmail.com', 'admin', 'admin', 15),
('Igor Balić', 'igor.balic.27@gmail.com', 'admin', 'admin', 16),
('Igo Balić', 'igor.bali.27@gmail.com', 'admn', 'adin', 17),
('Aleksej', 'aleksej@gmail.com', 'aleksej', 'igrac', 18);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `korisnici`
--
ALTER TABLE `korisnici`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `korisnici`
--
ALTER TABLE `korisnici`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
