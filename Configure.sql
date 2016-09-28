
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Creating a database
--

CREATE DATABASE `Srp_db`;


--
-- Table structure for table `host_user`
--

CREATE TABLE `Srp_db`.`user_table` (
  `uid` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

--
-- Table structure for feed table
--

CREATE TABLE `Srp_db`.`feed_table` ( 
	`fid` int(10) NOT NULL PRIMARY KEY  AUTO_INCREMENT , 
	`uid` int(11) NOT NULL,
	`ftitle` VARCHAR(150) NOT NULL , 
	 `fdesc` VARCHAR(5000) NOT NULL ) 
ENGINE = InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1; 

--
-- Table structure for equipment details table
--

CREATE TABLE `Srp_db`.`equipment_table` ( `eid` INT(5) NOT NULL PRIMARY KEY  AUTO_INCREMENT , 
	`ename` VARCHAR(150) NOT NULL , `edesc` VARCHAR(25) NOT NULL , 	`econtenturl` VARCHAR(2000) NOT NULL ) 
ENGINE = InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1; 

--
-- Table structure for disability details table
--

CREATE TABLE `Srp_db`.`disdetails_table` ( `did` INT(5) NOT NULL PRIMARY KEY  AUTO_INCREMENT , 
	`dtitle` VARCHAR(150) NOT NULL ,
	 `ddesc` VARCHAR(500) NOT NULL , 
	`dcontenturl` VARCHAR(2000) NOT NULL) 
ENGINE = InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1; 

--
-- Table structure for organisatin table 
--

CREATE TABLE `Srp_db`.`org_table` ( `oid` INT(5) NOT NULL PRIMARY KEY  AUTO_INCREMENT , 
	`otitle` VARCHAR(150) NOT NULL ,
	 `odesc` VARCHAR(500) NOT NULL ,`ocontenturl` VARCHAR(150) NOT NULL 
	 ) 
ENGINE = InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1; 

--
-- Table structure for GO table 
--

CREATE TABLE `Srp_db`.`go_table` ( `goid` INT(5) NOT NULL PRIMARY KEY  AUTO_INCREMENT , 
	`gotitle` VARCHAR(150) NOT NULL ,
	 `godesc` VARCHAR(500) NOT NULL ,`gocontenturl` VARCHAR(150) NOT NULL 
	 ) 
ENGINE = InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1; 


--
-- Table structure for Goct form table 
--

CREATE TABLE `Srp_db`.`govtform_table` ( `gfid` INT(5) NOT NULL PRIMARY KEY  AUTO_INCREMENT , 
	`gftitle` VARCHAR(150) NOT NULL ,`gfcontenturl` VARCHAR(150) NOT NULL 
	 ) 
ENGINE = InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1; 

