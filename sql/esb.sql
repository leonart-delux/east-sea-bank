CREATE DATABASE  IF NOT EXISTS `esb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `esb`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: esb
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chuyentien`
--

DROP TABLE IF EXISTS `chuyentien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chuyentien` (
  `MaGD` char(10) NOT NULL,
  `STKGoc` char(10) DEFAULT NULL,
  `STKDich` char(10) DEFAULT NULL,
  `SoTien` int DEFAULT NULL,
  `NoiDung` varchar(150) DEFAULT NULL,
  `ThoiGian` date DEFAULT NULL,
  PRIMARY KEY (`MaGD`),
  KEY `FK_ChuyenTien_TaiKhoan` (`STKGoc`),
  KEY `FK_ChuyenTien_TaiKhoan1` (`STKDich`),
  CONSTRAINT `FK_ChuyenTien_TaiKhoan` FOREIGN KEY (`STKGoc`) REFERENCES `taikhoan` (`SoTaiKhoan`),
  CONSTRAINT `FK_ChuyenTien_TaiKhoan1` FOREIGN KEY (`STKDich`) REFERENCES `taikhoan` (`SoTaiKhoan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `MaKH` char(10) NOT NULL,
  `HoTen` varchar(50) DEFAULT NULL,
  `SDT` varchar(50) DEFAULT NULL,
  `DiaChi` varchar(150) DEFAULT NULL,
  `NgaySinh` date DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `CCCD` varchar(50) DEFAULT NULL,
  `NgayMoTaiKhoan` date DEFAULT NULL,
  `DiemTinDung` int DEFAULT NULL,
  PRIMARY KEY (`MaKH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `khoanvay`
--

DROP TABLE IF EXISTS `khoanvay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khoanvay` (
  `MaVay` char(10) NOT NULL,
  `SoTaiKhoan` char(10) DEFAULT NULL,
  `LoaiVay` varchar(50) DEFAULT NULL,
  `KhoanVay` int DEFAULT NULL,
  `KyHan` int DEFAULT NULL,
  `NgayBatDau` date DEFAULT NULL,
  `NgayKetThuc` date DEFAULT NULL,
  `LaiSuat` float DEFAULT NULL,
  PRIMARY KEY (`MaVay`),
  KEY `FK_KhoanVay_TaiKhoan` (`SoTaiKhoan`),
  CONSTRAINT `FK_KhoanVay_TaiKhoan` FOREIGN KEY (`SoTaiKhoan`) REFERENCES `taikhoan` (`SoTaiKhoan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `kyhan`
--

DROP TABLE IF EXISTS `kyhan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kyhan` (
  `MaKyHan` char(10) NOT NULL,
  `ThoiGianKyHan` int DEFAULT NULL,
  `KhoangKyHan` char(10) DEFAULT NULL,
  PRIMARY KEY (`MaKyHan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `loaihinhtietkiem`
--

DROP TABLE IF EXISTS `loaihinhtietkiem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaihinhtietkiem` (
  `MaLoaiHinh` char(10) NOT NULL,
  `TenLoaiHinh` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`MaLoaiHinh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mucgui`
--

DROP TABLE IF EXISTS `mucgui`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mucgui` (
  `MaMucGui` char(10) NOT NULL,
  `MucToiThieu` int DEFAULT NULL,
  `MucToiDa` int DEFAULT NULL,
  PRIMARY KEY (`MaMucGui`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien` (
  `MaNhanVien` char(10) NOT NULL,
  `HoTen` varchar(50) DEFAULT NULL,
  `SDT` varchar(50) DEFAULT NULL,
  `NgaySinh` date DEFAULT NULL,
  `DiaChi` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`MaNhanVien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `phuongthucnhanlai`
--

DROP TABLE IF EXISTS `phuongthucnhanlai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phuongthucnhanlai` (
  `MaPhuongThuc` char(10) NOT NULL,
  `TenPhuongThuc` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`MaPhuongThuc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoan` (
  `SoTaiKhoan` char(10) NOT NULL,
  `MaKH` char(10) NOT NULL,
  `SoDu` int DEFAULT NULL,
  `TinhTrang` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`SoTaiKhoan`),
  KEY `FK_TaiKhoan_KhachHang` (`MaKH`),
  CONSTRAINT `FK_TaiKhoan_KhachHang` FOREIGN KEY (`MaKH`) REFERENCES `khachhang` (`MaKH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `thanhtoanvay`
--

DROP TABLE IF EXISTS `thanhtoanvay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thanhtoanvay` (
  `MaThanhToan` char(10) NOT NULL,
  `MaVay` char(10) DEFAULT NULL,
  `KhoanTienThanhToan` int DEFAULT NULL,
  `NgayThanhToan` date DEFAULT NULL,
  `TrangThai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`MaThanhToan`),
  KEY `FK_ThanhToanVay_KhoanVay` (`MaVay`),
  CONSTRAINT `FK_ThanhToanVay_KhoanVay` FOREIGN KEY (`MaVay`) REFERENCES `khoanvay` (`MaVay`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tuychonsaukhihethan`
--

DROP TABLE IF EXISTS `tuychonsaukhihethan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tuychonsaukhihethan` (
  `MaTuyChon` char(10) NOT NULL,
  `TenTuyChon` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`MaTuyChon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vitietkiem`
--

DROP TABLE IF EXISTS `vitietkiem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vitietkiem` (
  `MaVi` char(10) NOT NULL,
  `SoTaiKhoan` char(10) DEFAULT NULL,
  `MaMucGui` char(10) DEFAULT NULL,
  `MaKyHan` char(10) DEFAULT NULL,
  `MaPhuongThuc` char(10) DEFAULT NULL,
  `MaLoaiHinhTK` char(10) DEFAULT NULL,
  `MaTuyChon` char(10) DEFAULT NULL,
  `TienGoc` int DEFAULT NULL,
  `TienTai` int DEFAULT NULL,
  `NgayGui` date DEFAULT NULL,
  `Lai` float DEFAULT NULL,
  PRIMARY KEY (`MaVi`),
  KEY `FK_ViTietKiem_KyHan` (`MaKyHan`),
  KEY `FK_ViTietKiem_LoaiHinhTietKiem` (`MaLoaiHinhTK`),
  KEY `FK_ViTietKiem_MucGui` (`MaMucGui`),
  KEY `FK_ViTietKiem_PhuongThucNhanLai` (`MaPhuongThuc`),
  KEY `FK_ViTietKiem_TaiKhoan` (`SoTaiKhoan`),
  KEY `FK_ViTietKiem_TuyChonSauKhiHetHan` (`MaTuyChon`),
  CONSTRAINT `FK_ViTietKiem_KyHan` FOREIGN KEY (`MaKyHan`) REFERENCES `kyhan` (`MaKyHan`),
  CONSTRAINT `FK_ViTietKiem_LoaiHinhTietKiem` FOREIGN KEY (`MaLoaiHinhTK`) REFERENCES `loaihinhtietkiem` (`MaLoaiHinh`),
  CONSTRAINT `FK_ViTietKiem_MucGui` FOREIGN KEY (`MaMucGui`) REFERENCES `mucgui` (`MaMucGui`),
  CONSTRAINT `FK_ViTietKiem_PhuongThucNhanLai` FOREIGN KEY (`MaPhuongThuc`) REFERENCES `phuongthucnhanlai` (`MaPhuongThuc`),
  CONSTRAINT `FK_ViTietKiem_TaiKhoan` FOREIGN KEY (`SoTaiKhoan`) REFERENCES `taikhoan` (`SoTaiKhoan`),
  CONSTRAINT `FK_ViTietKiem_TuyChonSauKhiHetHan` FOREIGN KEY (`MaTuyChon`) REFERENCES `tuychonsaukhihethan` (`MaTuyChon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `yeucauvay`
--

DROP TABLE IF EXISTS `yeucauvay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yeucauvay` (
  `MaYeuCau` char(10) NOT NULL,
  `SoTaiKhoan` char(10) DEFAULT NULL,
  `LoaiVay` varchar(50) DEFAULT NULL,
  `KhoanVay` int DEFAULT NULL,
  `NgayYeuCau` date DEFAULT NULL,
  `TrangThai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`MaYeuCau`),
  KEY `FK_YeuCauVay_TaiKhoan` (`SoTaiKhoan`),
  CONSTRAINT `FK_YeuCauVay_TaiKhoan` FOREIGN KEY (`SoTaiKhoan`) REFERENCES `taikhoan` (`SoTaiKhoan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-07  9:57:33
