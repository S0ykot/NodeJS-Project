-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2020 at 10:53 PM
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
-- Database: `research`
--

-- --------------------------------------------------------

--
-- Table structure for table `domain_research`
--

CREATE TABLE `domain_research` (
  `dom_id` int(11) NOT NULL,
  `dom_name` text NOT NULL,
  `dom_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `domain_research`
--

INSERT INTO `domain_research` (`dom_id`, `dom_name`, `dom_desc`) VALUES
(3, 'Data Science', 'test'),
(4, 'Machine Learning', 'mmmc');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `fid` int(11) NOT NULL,
  `faculty_id` varchar(11) NOT NULL,
  `faculty_fname` varchar(50) NOT NULL,
  `faculty_lname` varchar(40) NOT NULL,
  `faculty_email` varchar(30) NOT NULL,
  `faculty_contact` varchar(14) NOT NULL,
  `faculty_regDate` varchar(30) NOT NULL,
  `faculty_dept` varchar(10) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`fid`, `faculty_id`, `faculty_fname`, `faculty_lname`, `faculty_email`, `faculty_contact`, `faculty_regDate`, `faculty_dept`, `status`) VALUES
(1, '1701-1751-2', 'MOHAIMEN BIN', 'NOOR', 'niloy@aiub.edu', '12345678912', '2020-03-12', 'CS', 1);

-- --------------------------------------------------------

--
-- Table structure for table `file`
--

CREATE TABLE `file` (
  `file_id` int(11) NOT NULL,
  `fileName` varchar(30) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `file`
--

INSERT INTO `file` (`file_id`, `fileName`, `group_id`) VALUES
(1, 'abc.pdf', 1),
(2, 'fgh.pdf', 1),
(3, 'qwe.doc', 2),
(4, 'poi.docs', 2);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `rid` int(11) NOT NULL,
  `role_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`rid`, `role_name`) VALUES
(1, 'admin'),
(2, 'faculty'),
(3, 'student');

-- --------------------------------------------------------

--
-- Table structure for table `semester`
--

CREATE TABLE `semester` (
  `sem_id` int(11) NOT NULL,
  `sem_name` varchar(30) NOT NULL,
  `sem_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `semester`
--

INSERT INTO `semester` (`sem_id`, `sem_name`, `sem_status`) VALUES
(1, '2019-2020, Spring', 1);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `sid` int(11) NOT NULL,
  `student_id` varchar(10) NOT NULL,
  `student_fname` varchar(50) NOT NULL,
  `student_lname` varchar(40) NOT NULL,
  `student_email` varchar(30) NOT NULL,
  `student_contact` varchar(14) NOT NULL,
  `student_credit` int(3) NOT NULL,
  `student_cgpa` float NOT NULL,
  `student_regDate` varchar(30) NOT NULL,
  `student_dept` varchar(10) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`sid`, `student_id`, `student_fname`, `student_lname`, `student_email`, `student_contact`, `student_credit`, `student_cgpa`, `student_regDate`, `student_dept`, `status`) VALUES
(1, '17-33956-1', 'Khandakar Anim Hassan', 'Adnan', 'adnan@gmail.com', '12345678912', 100, 3.99, '2020-03-11', 'CSE', 1),
(2, '17-33960-1', 'Md Atick Eashrak', 'Shuvo', 'shuvo@yahoo.com', '79845612312', 120, 3.9, '2020-03-11', 'CS', 1),
(3, '18-33999-1', 'Rahim', 'mia', 'rahim@gmail.com', '45845785487', 125, 3.66, '2020-3-13', 'CS', 1);

-- --------------------------------------------------------

--
-- Table structure for table `student_thesis`
--

CREATE TABLE `student_thesis` (
  `thesis_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `sem_id` int(11) NOT NULL,
  `subDom_id` int(11) NOT NULL,
  `external` varchar(100) NOT NULL,
  `thesis_progress` int(3) NOT NULL,
  `ext_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_thesis`
--

INSERT INTO `student_thesis` (`thesis_id`, `group_id`, `sid`, `sem_id`, `subDom_id`, `external`, `thesis_progress`, `ext_status`) VALUES
(1, 1, 1, 1, 1, 'MOHAIMEN BIN NOOR', 1, 1),
(2, 1, 2, 1, 1, 'MOHAIMEN BIN NOOR', 1, 1),
(3, 2, 3, 1, 2, 'MOHAIMEN BIN NOOR', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sub_domain`
--

CREATE TABLE `sub_domain` (
  `subDom_id` int(11) NOT NULL,
  `subDom_name` text NOT NULL,
  `subDom_desc` text NOT NULL,
  `type_id` int(11) NOT NULL,
  `dom_id` int(11) NOT NULL,
  `fid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sub_domain`
--

INSERT INTO `sub_domain` (`subDom_id`, `subDom_name`, `subDom_desc`, `type_id`, `dom_id`, `fid`) VALUES
(1, 'Food Management System', 'IOS and android', 2, 3, 1),
(2, 'Agent Robot', 'Arduno', 2, 4, 1),
(3, 'Doctor\'s Hub', 'About doctor', 2, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `thesis_type`
--

CREATE TABLE `thesis_type` (
  `type_id` int(11) NOT NULL,
  `type_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `thesis_type`
--

INSERT INTO `thesis_type` (`type_id`, `type_name`) VALUES
(1, 'SOFTWARE PROJECT 1'),
(2, 'SOFTWARE PROJECT 2'),
(3, 'THESIS BSCS'),
(4, 'THESIS MSCS'),
(5, 'THESIS CONTINUED');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` int(11) NOT NULL,
  `user_id_name` varchar(11) NOT NULL,
  `password` varchar(45) NOT NULL,
  `rid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `user_id_name`, `password`, `rid`) VALUES
(1, 'admin', 'admin', 1),
(2, '1701-1751-2', '1234', 2),
(3, '17-33956-1', 'ada', 3),
(4, '17-33960-1', 'voshu', 3),
(5, '18-33999-1', 'aiub@Rahim', 3);

-- --------------------------------------------------------

--
-- Table structure for table `verification`
--

CREATE TABLE `verification` (
  `ver_id` int(11) NOT NULL,
  `ver_fileName` varchar(30) NOT NULL,
  `sid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `domain_research`
--
ALTER TABLE `domain_research`
  ADD PRIMARY KEY (`dom_id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `file`
--
ALTER TABLE `file`
  ADD PRIMARY KEY (`file_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`rid`);

--
-- Indexes for table `semester`
--
ALTER TABLE `semester`
  ADD PRIMARY KEY (`sem_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `student_thesis`
--
ALTER TABLE `student_thesis`
  ADD PRIMARY KEY (`thesis_id`),
  ADD KEY `sid` (`sid`),
  ADD KEY `student_thesis_ibfk_1` (`subDom_id`),
  ADD KEY `sem_id` (`sem_id`);

--
-- Indexes for table `sub_domain`
--
ALTER TABLE `sub_domain`
  ADD PRIMARY KEY (`subDom_id`),
  ADD KEY `type_id` (`type_id`),
  ADD KEY `dom_id` (`dom_id`),
  ADD KEY `fid` (`fid`);

--
-- Indexes for table `thesis_type`
--
ALTER TABLE `thesis_type`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `rid` (`rid`);

--
-- Indexes for table `verification`
--
ALTER TABLE `verification`
  ADD PRIMARY KEY (`ver_id`),
  ADD KEY `sid` (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `domain_research`
--
ALTER TABLE `domain_research`
  MODIFY `dom_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `file`
--
ALTER TABLE `file`
  MODIFY `file_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `rid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `semester`
--
ALTER TABLE `semester`
  MODIFY `sem_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `student_thesis`
--
ALTER TABLE `student_thesis`
  MODIFY `thesis_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sub_domain`
--
ALTER TABLE `sub_domain`
  MODIFY `subDom_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `thesis_type`
--
ALTER TABLE `thesis_type`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `verification`
--
ALTER TABLE `verification`
  MODIFY `ver_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sub_domain`
--
ALTER TABLE `sub_domain`
  ADD CONSTRAINT `sub_domain_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `thesis_type` (`type_id`),
  ADD CONSTRAINT `sub_domain_ibfk_2` FOREIGN KEY (`dom_id`) REFERENCES `domain_research` (`dom_id`),
  ADD CONSTRAINT `sub_domain_ibfk_3` FOREIGN KEY (`fid`) REFERENCES `faculty` (`fid`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`rid`) REFERENCES `role` (`rid`);

--
-- Constraints for table `verification`
--
ALTER TABLE `verification`
  ADD CONSTRAINT `verification_ibfk_1` FOREIGN KEY (`sid`) REFERENCES `student` (`sid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
