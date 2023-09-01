-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: school
-- ------------------------------------------------------
-- Server version	8.0.18

-- Table structure for table `student`
DROP TABLE IF EXISTS `student`;

-- Table structure for table `course`
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `course`
INSERT INTO `course` (`id`, `title`) VALUES
(1, '1dv23'),
(2, '2dv513'),
(3, '1dv500'),
(4, '1dv512');

-- Table structure for table `grade`
DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grade` varchar(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `grade`
INSERT INTO `grade` (`id`, `grade`) VALUES
(1, '50'),
(2, '55'),
(3, '70'),
(4, '40'),
(5, '87');

-- Table structure for table `student`
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grade_id` int(11) NOT NULL DEFAULT '0',
  `course_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(45) NOT NULL,
  `phoneNumber` varchar(15) NOT NULL,
  `age` int(2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_student_grade` (`grade_id`),
  KEY `FK_student_course` (`course_id`),
  CONSTRAINT `FK_student_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`),
  CONSTRAINT `FK_student_grade` FOREIGN KEY (`grade_id`) REFERENCES `grade` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `student`
INSERT INTO `student` (`id`, `grade_id`, `course_id`, `name`, `phoneNumber`, `age`) VALUES
(1, 1, 1, 'Meriam', '43434', 12),
(2, 2, 3, 'Ahmad', '0740403431', 23),
(3, 4, 4, 'student', '072846468', 27),
(4, 5, 2, 'Ali', '0702174504', 34),
(5, 1, 3, 'Lio', '0778778788', 24),
(6, 2, 3, 'test', '0424517566', 33),
(7, 5, 4, 'Sun', '0865544566', 23);
