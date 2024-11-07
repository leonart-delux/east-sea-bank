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
-- Table structure for table `chuyen_tien`
--

DROP TABLE IF EXISTS `chuyen_tien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chuyen_tien` (
  `MaGD` char(10) NOT NULL,
  `STKGoc` char(10) DEFAULT NULL,
  `STKDich` char(10) DEFAULT NULL,
  `SoTien` int DEFAULT NULL,
  `NoiDung` varchar(150) DEFAULT NULL,
  `ThoiGian` date DEFAULT NULL,
  PRIMARY KEY (`MaGD`),
  KEY `FK_ChuyenTien_TaiKhoan` (`STKGoc`),
  KEY `FK_ChuyenTien_TaiKhoan1` (`STKDich`),
  CONSTRAINT `FK_ChuyenTien_TaiKhoan` FOREIGN KEY (`STKGoc`) REFERENCES `tai_khoan` (`SoTaiKhoan`),
  CONSTRAINT `FK_ChuyenTien_TaiKhoan1` FOREIGN KEY (`STKDich`) REFERENCES `tai_khoan` (`SoTaiKhoan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chuyen_tien`
--

LOCK TABLES `chuyen_tien` WRITE;
/*!40000 ALTER TABLE `chuyen_tien` DISABLE KEYS */;
/*!40000 ALTER TABLE `chuyen_tien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khach_hang`
--

DROP TABLE IF EXISTS `khach_hang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khach_hang` (
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
-- Dumping data for table `khach_hang`
--

LOCK TABLES `khach_hang` WRITE;
/*!40000 ALTER TABLE `khach_hang` DISABLE KEYS */;
/*!40000 ALTER TABLE `khach_hang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khoan_vay`
--

DROP TABLE IF EXISTS `khoan_vay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khoan_vay` (
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
  CONSTRAINT `FK_KhoanVay_TaiKhoan` FOREIGN KEY (`SoTaiKhoan`) REFERENCES `tai_khoan` (`SoTaiKhoan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khoan_vay`
--

LOCK TABLES `khoan_vay` WRITE;
/*!40000 ALTER TABLE `khoan_vay` DISABLE KEYS */;
/*!40000 ALTER TABLE `khoan_vay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ky_han`
--

DROP TABLE IF EXISTS `ky_han`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ky_han` (
  `MaKyHan` char(10) NOT NULL,
  `ThoiGianKyHan` int DEFAULT NULL,
  `KhoangKyHan` char(10) DEFAULT NULL,
  PRIMARY KEY (`MaKyHan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ky_han`
--

LOCK TABLES `ky_han` WRITE;
/*!40000 ALTER TABLE `ky_han` DISABLE KEYS */;
/*!40000 ALTER TABLE `ky_han` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loai_hinh_tiet_kiem`
--

DROP TABLE IF EXISTS `loai_hinh_tiet_kiem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loai_hinh_tiet_kiem` (
  `MaLoaiHinh` char(10) NOT NULL,
  `TenLoaiHinh` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`MaLoaiHinh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loai_hinh_tiet_kiem`
--

LOCK TABLES `loai_hinh_tiet_kiem` WRITE;
/*!40000 ALTER TABLE `loai_hinh_tiet_kiem` DISABLE KEYS */;
/*!40000 ALTER TABLE `loai_hinh_tiet_kiem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhan_vien`
--

DROP TABLE IF EXISTS `nhan_vien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhan_vien` (
  `MaNhanVien` char(10) NOT NULL,
  `HoTen` varchar(50) DEFAULT NULL,
  `SDT` varchar(50) DEFAULT NULL,
  `NgaySinh` date DEFAULT NULL,
  `DiaChi` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`MaNhanVien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhan_vien`
--

LOCK TABLES `nhan_vien` WRITE;
/*!40000 ALTER TABLE `nhan_vien` DISABLE KEYS */;
/*!40000 ALTER TABLE `nhan_vien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tai_khoan`
--

DROP TABLE IF EXISTS `tai_khoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tai_khoan` (
  `SoTaiKhoan` char(10) NOT NULL,
  `MaKH` char(10) NOT NULL,
  `SoDu` int DEFAULT NULL,
  `TinhTrang` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`SoTaiKhoan`),
  KEY `FK_TaiKhoan_KhachHang` (`MaKH`),
  CONSTRAINT `FK_TaiKhoan_KhachHang` FOREIGN KEY (`MaKH`) REFERENCES `khach_hang` (`MaKH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tai_khoan`
--

LOCK TABLES `tai_khoan` WRITE;
/*!40000 ALTER TABLE `tai_khoan` DISABLE KEYS */;
/*!40000 ALTER TABLE `tai_khoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thanh_toan_vay`
--

DROP TABLE IF EXISTS `thanh_toan_vay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thanh_toan_vay` (
  `MaThanhToan` char(10) NOT NULL,
  `MaVay` char(10) DEFAULT NULL,
  `KhoanTienThanhToan` int DEFAULT NULL,
  `NgayThanhToan` date DEFAULT NULL,
  `TrangThai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`MaThanhToan`),
  KEY `FK_ThanhToanVay_KhoanVay` (`MaVay`),
  CONSTRAINT `FK_ThanhToanVay_KhoanVay` FOREIGN KEY (`MaVay`) REFERENCES `khoan_vay` (`MaVay`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thanh_toan_vay`
--

LOCK TABLES `thanh_toan_vay` WRITE;
/*!40000 ALTER TABLE `thanh_toan_vay` DISABLE KEYS */;
/*!40000 ALTER TABLE `thanh_toan_vay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tuy_chon_sau_khi_het_han`
--

DROP TABLE IF EXISTS `tuy_chon_sau_khi_het_han`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tuy_chon_sau_khi_het_han` (
  `MaTuyChon` char(10) NOT NULL,
  `TenTuyChon` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`MaTuyChon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tuy_chon_sau_khi_het_han`
--

LOCK TABLES `tuy_chon_sau_khi_het_han` WRITE;
/*!40000 ALTER TABLE `tuy_chon_sau_khi_het_han` DISABLE KEYS */;
/*!40000 ALTER TABLE `tuy_chon_sau_khi_het_han` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vi_tiet_kiem`
--

DROP TABLE IF EXISTS `vi_tiet_kiem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vi_tiet_kiem` (
  `MaVi` char(10) NOT NULL,
  `SoTaiKhoan` char(10) DEFAULT NULL,
  `MaKyHan` char(10) DEFAULT NULL,
  `MaLoaiHinhTK` char(10) DEFAULT NULL,
  `MaTuyChon` char(10) DEFAULT NULL,
  `TienGoc` int DEFAULT NULL,
  `TienTai` int DEFAULT NULL,
  `NgayGui` date DEFAULT NULL,
  `Lai` float DEFAULT NULL,
  PRIMARY KEY (`MaVi`),
  KEY `FK_ViTietKiem_KyHan` (`MaKyHan`),
  KEY `FK_ViTietKiem_LoaiHinhTietKiem` (`MaLoaiHinhTK`),
  KEY `FK_ViTietKiem_TaiKhoan` (`SoTaiKhoan`),
  KEY `FK_ViTietKiem_TuyChonSauKhiHetHan` (`MaTuyChon`),
  CONSTRAINT `FK_ViTietKiem_KyHan` FOREIGN KEY (`MaKyHan`) REFERENCES `ky_han` (`MaKyHan`),
  CONSTRAINT `FK_ViTietKiem_LoaiHinhTietKiem` FOREIGN KEY (`MaLoaiHinhTK`) REFERENCES `loai_hinh_tiet_kiem` (`MaLoaiHinh`),
  CONSTRAINT `FK_ViTietKiem_TaiKhoan` FOREIGN KEY (`SoTaiKhoan`) REFERENCES `tai_khoan` (`SoTaiKhoan`),
  CONSTRAINT `FK_ViTietKiem_TuyChonSauKhiHetHan` FOREIGN KEY (`MaTuyChon`) REFERENCES `tuy_chon_sau_khi_het_han` (`MaTuyChon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vi_tiet_kiem`
--

LOCK TABLES `vi_tiet_kiem` WRITE;
/*!40000 ALTER TABLE `vi_tiet_kiem` DISABLE KEYS */;
/*!40000 ALTER TABLE `vi_tiet_kiem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yeu_cau_vay`
--

DROP TABLE IF EXISTS `yeu_cau_vay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yeu_cau_vay` (
  `MaYeuCau` char(10) NOT NULL,
  `SoTaiKhoan` char(10) DEFAULT NULL,
  `LoaiVay` varchar(50) DEFAULT NULL,
  `KhoanVay` int DEFAULT NULL,
  `NgayYeuCau` date DEFAULT NULL,
  `TrangThai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`MaYeuCau`),
  KEY `FK_YeuCauVay_TaiKhoan` (`SoTaiKhoan`),
  CONSTRAINT `FK_YeuCauVay_TaiKhoan` FOREIGN KEY (`SoTaiKhoan`) REFERENCES `tai_khoan` (`SoTaiKhoan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yeu_cau_vay`
--

LOCK TABLES `yeu_cau_vay` WRITE;
/*!40000 ALTER TABLE `yeu_cau_vay` DISABLE KEYS */;
/*!40000 ALTER TABLE `yeu_cau_vay` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-07 11:21:34
