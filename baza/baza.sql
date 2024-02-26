-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2024 at 02:23 PM
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
('Korisnik1', 'Korisnik1@gmail.com', 'korisnik', 'igrac', 20),
('netko', 'netko@gmail.com', 'netko', 'igrac', 21);

-- --------------------------------------------------------

--
-- Table structure for table `pitanja`
--

CREATE TABLE `pitanja` (
  `id` tinyint(3) NOT NULL,
  `naziv` varchar(500) NOT NULL,
  `tocan_odgovor` varchar(50) NOT NULL,
  `odgovor2` varchar(50) NOT NULL,
  `odgovor3` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pitanja`
--

INSERT INTO `pitanja` (`id`, `naziv`, `tocan_odgovor`, `odgovor2`, `odgovor3`) VALUES
(1, 'Koje godine je Republika Hrvatska postala članice Europske Unije?', '2013. godine', '2011. godine', '2012. godine'),
(2, 'U kojem je gradu smještena radnja popularne kriminalističke serije “Žica”. (The Wire)', 'Baltimore', 'New York', 'Philadelphia'),
(3, 'Koji je glavni sastojak guacamole umaka?', 'Avokado', 'Luk', 'Rajčica'),
(4, 'Tko je autor \"Romea i Julije\"?', 'William Shakespeare', 'Charles Dickens', 'Jane Austen'),
(5, 'Koja je najviša planina na svijetu?', 'Mount Everest', 'Mont Blanc', 'Kilimanjaro'),
(6, ' Koji je element najzastupljeniji u Zemljinoj kori?', 'Kisik', 'Željezo', 'Silicij'),
(7, 'Koji je glavni grad Australije?', ' Canberra ', 'Sydney', 'Melbourne');

-- --------------------------------------------------------

--
-- Table structure for table `rang_lista`
--

CREATE TABLE `rang_lista` (
  `id` int(11) NOT NULL,
  `ime` int(11) NOT NULL,
  `bodovi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `korisnici`
--
ALTER TABLE `korisnici`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pitanja`
--
ALTER TABLE `pitanja`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `korisnici`
--
ALTER TABLE `korisnici`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `pitanja`
--
ALTER TABLE `pitanja`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
