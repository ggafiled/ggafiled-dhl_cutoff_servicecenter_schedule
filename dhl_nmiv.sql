-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2019 at 11:11 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dhl_nmiv`
--

-- --------------------------------------------------------

--
-- Table structure for table `nmiv_cut_off`
--

CREATE TABLE `nmiv_cut_off` (
  `M_Id` int(11) NOT NULL,
  `Id` int(11) NOT NULL,
  `Source` varchar(20) DEFAULT NULL,
  `Destination` varchar(20) DEFAULT NULL,
  `Time1` time NOT NULL DEFAULT '00:00:00',
  `Time2` time NOT NULL DEFAULT '00:00:00',
  `Time3` time NOT NULL DEFAULT '00:00:00',
  `Time4` time NOT NULL DEFAULT '00:00:00',
  `TimeRangeId` int(11) NOT NULL,
  `Type_ID` int(11) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nmiv_cut_off`
--

INSERT INTO `nmiv_cut_off` (`M_Id`, `Id`, `Source`, `Destination`, `Time1`, `Time2`, `Time3`, `Time4`, `TimeRangeId`, `Type_ID`) VALUES
(1, 1, 'LD', 'NCY', '20:00:00', '21:00:00', '19:30:00', '19:30:00', 3, 2),
(2, 2, 'LD', 'COY', '20:30:00', '21:25:00', '20:00:00', '00:00:00', 3, 2),
(3, 3, 'LD', 'SPILL', '20:45:00', '21:40:00', '20:15:00', '00:00:00', 3, 2),
(4, 4, '8K3S', '', '21:30:00', '00:00:00', '21:30:00', '00:00:00', 3, 2),
(5, 5, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 3, 2),
(6, 6, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 3, 2),
(7, 7, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 3, 2),
(8, 8, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 3, 2),
(9, 9, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 3, 2),
(10, 1, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 2, 2),
(11, 2, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 2, 2),
(12, 3, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 2, 2),
(13, 4, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 2, 2),
(15, 5, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 2, 2),
(16, 6, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 2, 2),
(17, 7, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 2, 2),
(18, 8, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 2, 2),
(19, 9, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 2, 2),
(169, 1, 'LD', 'BKK', '00:00:00', '14:28:00', '00:00:00', '00:00:00', 38, 2),
(170, 2, 'LD', 'JKT', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 38, 2),
(171, 3, 'LD', 'USA', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 38, 2),
(172, 4, '8K3S', 'JPN', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 38, 2),
(173, 5, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 38, 2),
(174, 6, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 38, 2),
(175, 7, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 38, 2),
(176, 8, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 38, 2),
(177, 9, '', '', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 38, 2);

-- --------------------------------------------------------

--
-- Table structure for table `nmiv_service_center`
--

CREATE TABLE `nmiv_service_center` (
  `M_Id` int(11) NOT NULL,
  `Id` int(11) NOT NULL,
  `Source` varchar(20) DEFAULT NULL,
  `Time1` time NOT NULL DEFAULT '00:00:00',
  `Time2` time NOT NULL DEFAULT '00:00:00',
  `Time3` time NOT NULL DEFAULT '00:00:00',
  `Time4` time NOT NULL DEFAULT '00:00:00',
  `Time5` time NOT NULL DEFAULT '00:00:00',
  `Time6` time NOT NULL DEFAULT '00:00:00',
  `Time7` time NOT NULL DEFAULT '00:00:00',
  `Time8` time NOT NULL DEFAULT '00:00:00',
  `Time9` time NOT NULL DEFAULT '00:00:00',
  `Time10` time NOT NULL DEFAULT '00:00:00',
  `Time11` time NOT NULL DEFAULT '00:00:00',
  `Time12` time NOT NULL DEFAULT '00:00:00',
  `Time13` time NOT NULL DEFAULT '00:00:00',
  `Time14` time NOT NULL DEFAULT '00:00:00',
  `Time15` time NOT NULL DEFAULT '00:00:00',
  `Time16` time NOT NULL DEFAULT '00:00:00',
  `TimeRangeId` int(11) NOT NULL DEFAULT 0,
  `Type_ID` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nmiv_service_center`
--

INSERT INTO `nmiv_service_center` (`M_Id`, `Id`, `Source`, `Time1`, `Time2`, `Time3`, `Time4`, `Time5`, `Time6`, `Time7`, `Time8`, `Time9`, `Time10`, `Time11`, `Time12`, `Time13`, `Time14`, `Time15`, `Time16`, `TimeRangeId`, `Type_ID`) VALUES
(1, 1, 'APD', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 1, 1),
(2, 2, 'NBK', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '23:59:00', '16:34:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 1, 1),
(3, 3, 'GDR', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 1, 1),
(4, 4, 'LZB/EGW', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 1, 1),
(5, 5, 'NKR', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 1, 1),
(6, 6, 'RMT', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 1, 1),
(7, 7, 'TZB', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 1, 1),
(8, 8, 'ZVB', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 1, 1),
(9, 9, 'PCB', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', '00:00:00', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nmiv_time_range`
--

CREATE TABLE `nmiv_time_range` (
  `Id` int(11) NOT NULL,
  `Name_display` varchar(50) NOT NULL,
  `Start_time` time NOT NULL,
  `End_time` time NOT NULL,
  `Type_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nmiv_time_range`
--

INSERT INTO `nmiv_time_range` (`Id`, `Name_display`, `Start_time`, `End_time`, `Type_ID`) VALUES
(1, 'All Time', '00:00:00', '23:59:00', 1),
(2, 'Inbound Time', '05:00:00', '09:00:00', 2),
(3, 'Outbound Time', '20:00:00', '23:59:00', 2),
(38, 'Inbound (2) Time', '10:00:00', '15:00:00', 2);

-- --------------------------------------------------------

--
-- Table structure for table `nmiv_type`
--

CREATE TABLE `nmiv_type` (
  `Type_ID` int(11) NOT NULL,
  `Type_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nmiv_type`
--

INSERT INTO `nmiv_type` (`Type_ID`, `Type_name`) VALUES
(1, 'Service Center'),
(2, 'Cut Off');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nmiv_cut_off`
--
ALTER TABLE `nmiv_cut_off`
  ADD PRIMARY KEY (`M_Id`);

--
-- Indexes for table `nmiv_service_center`
--
ALTER TABLE `nmiv_service_center`
  ADD PRIMARY KEY (`M_Id`);

--
-- Indexes for table `nmiv_time_range`
--
ALTER TABLE `nmiv_time_range`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `nmiv_type`
--
ALTER TABLE `nmiv_type`
  ADD PRIMARY KEY (`Type_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nmiv_cut_off`
--
ALTER TABLE `nmiv_cut_off`
  MODIFY `M_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;

--
-- AUTO_INCREMENT for table `nmiv_service_center`
--
ALTER TABLE `nmiv_service_center`
  MODIFY `M_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `nmiv_time_range`
--
ALTER TABLE `nmiv_time_range`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `nmiv_type`
--
ALTER TABLE `nmiv_type`
  MODIFY `Type_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
