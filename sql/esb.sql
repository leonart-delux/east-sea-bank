/*
 Navicat Premium Dump SQL

 Source Server         : local 
 Source Server Type    : MySQL
 Source Server Version : 100427 (10.4.27-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : esb

 Target Server Type    : MySQL
 Target Server Version : 100427 (10.4.27-MariaDB)
 File Encoding         : 65001

 Date: 07/11/2024 23:37:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for chuyen_tien
-- ----------------------------
DROP TABLE IF EXISTS `chuyen_tien`;
CREATE TABLE `chuyen_tien`  (
  `Ma_GD` bigint NOT NULL AUTO_INCREMENT,
  `STK_Gui` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `STK_Nhan` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `So_Tien` float NULL DEFAULT NULL,
  `Noi_Dung` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Thoi_Gian` date NULL DEFAULT NULL,
  PRIMARY KEY (`Ma_GD`) USING BTREE,
  INDEX `FK_Chuyen_Tien_Tai_Khoan`(`STK_Gui` ASC) USING BTREE,
  INDEX `FK_Chuyen_Tien_Tai_Khoan1`(`STK_Nhan` ASC) USING BTREE,
  CONSTRAINT `FK_Chuyen_Tien_Tai_Khoan` FOREIGN KEY (`STK_Gui`) REFERENCES `tai_khoan` (`So_Tai_Khoan`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Chuyen_Tien_Tai_Khoan1` FOREIGN KEY (`STK_Nhan`) REFERENCES `tai_khoan` (`So_Tai_Khoan`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for khach_hang
-- ----------------------------
DROP TABLE IF EXISTS `khach_hang`;
CREATE TABLE `khach_hang`  (
  `Ma_KH` bigint NOT NULL AUTO_INCREMENT,
  `Ho_Ten` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `SDT` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Dia_Chi` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Ngay_Sinh` date NULL DEFAULT NULL,
  `Email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `CCCD` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Ngay_Mo_Tai_Khoan` date NULL DEFAULT NULL,
  `Diem_Tin_Dung` int NULL DEFAULT NULL,
  `ngay_cap_cccd` date NULL DEFAULT NULL,
  `noi_cap_cccd` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `gioi_tinh` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `quoc_tich` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `que_quan` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `dia_chi_thuong_tru` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `dia_chi_lien_he` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `trang_thai` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Ma_KH`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for khoan_vay
-- ----------------------------
DROP TABLE IF EXISTS `khoan_vay`;
CREATE TABLE `khoan_vay`  (
  `Ma_Vay` bigint NOT NULL AUTO_INCREMENT,
  `So_Tai_Khoan` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Loai_Vay` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Khoan_Vay` float NULL DEFAULT NULL,
  `Ky_Han` int NULL DEFAULT NULL,
  `Ngay_Bat_Dau` date NULL DEFAULT NULL,
  `Ngay_Ket_Thuc` date NULL DEFAULT NULL,
  `Lai_Suat` float NULL DEFAULT NULL,
  PRIMARY KEY (`Ma_Vay`) USING BTREE,
  INDEX `FK_Khoan_Vay_Tai_Khoan`(`So_Tai_Khoan` ASC) USING BTREE,
  CONSTRAINT `FK_Khoan_Vay_Tai_Khoan` FOREIGN KEY (`So_Tai_Khoan`) REFERENCES `tai_khoan` (`So_Tai_Khoan`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ky_han
-- ----------------------------
DROP TABLE IF EXISTS `ky_han`;
CREATE TABLE `ky_han`  (
  `Ma_Ky_Han` bigint NOT NULL AUTO_INCREMENT,
  `Thoi_Gian_Ky_Han` int NULL DEFAULT NULL,
  `Khoang_Ky_Han` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Ma_Ky_Han`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for loai_hinh_tiet_kiem
-- ----------------------------
DROP TABLE IF EXISTS `loai_hinh_tiet_kiem`;
CREATE TABLE `loai_hinh_tiet_kiem`  (
  `Ma_Loai_Hinh` bigint NOT NULL AUTO_INCREMENT,
  `Ten_Loai_Hinh` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Ma_Loai_Hinh`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for nhan_vien
-- ----------------------------
DROP TABLE IF EXISTS `nhan_vien`;
CREATE TABLE `nhan_vien`  (
  `Ma_Nhan_Vien` bigint NOT NULL AUTO_INCREMENT,
  `Ho_Ten` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `SDT` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Ngay_Sinh` date NULL DEFAULT NULL,
  `Dia_Chi` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Ma_Nhan_Vien`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tai_khoan
-- ----------------------------
DROP TABLE IF EXISTS `tai_khoan`;
CREATE TABLE `tai_khoan`  (
  `So_Tai_Khoan` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Ma_KH` bigint NOT NULL,
  `So_Du` float NULL DEFAULT NULL,
  `Tinh_Trang` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`So_Tai_Khoan`) USING BTREE,
  INDEX `fk_tai_khoan_khach_hang_idx`(`Ma_KH` ASC) USING BTREE,
  CONSTRAINT `fk_tai_khoan_khach_hang` FOREIGN KEY (`Ma_KH`) REFERENCES `khach_hang` (`Ma_KH`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for thanh_toan_vay
-- ----------------------------
DROP TABLE IF EXISTS `thanh_toan_vay`;
CREATE TABLE `thanh_toan_vay`  (
  `Ma_Thanh_Toan` bigint NOT NULL AUTO_INCREMENT,
  `Ma_Vay` bigint NULL DEFAULT NULL,
  `Khoan_Tien_Thanh_Toan` float NULL DEFAULT NULL,
  `Ngay_Thanh_Toan` date NULL DEFAULT NULL,
  `Trang_Thai` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`Ma_Thanh_Toan`) USING BTREE,
  INDEX `FK_Thanh_Toan_Vay_Khoan_Vay`(`Ma_Vay` ASC) USING BTREE,
  CONSTRAINT `FK_Thanh_Toan_Vay_Khoan_Vay` FOREIGN KEY (`Ma_Vay`) REFERENCES `khoan_vay` (`Ma_Vay`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuy_chon_sau_khi_het_han
-- ----------------------------
DROP TABLE IF EXISTS `tuy_chon_sau_khi_het_han`;
CREATE TABLE `tuy_chon_sau_khi_het_han`  (
  `Ma_Tuy_Chon` bigint NOT NULL AUTO_INCREMENT,
  `Ten_Tuy_Chon` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Ma_Tuy_Chon`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for vi_tiet_kiem
-- ----------------------------
DROP TABLE IF EXISTS `vi_tiet_kiem`;
CREATE TABLE `vi_tiet_kiem`  (
  `Ma_Vi` bigint NOT NULL AUTO_INCREMENT,
  `So_Tai_Khoan` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Ma_Ky_Han` bigint NULL DEFAULT NULL,
  `Ma_Loai_Hinh_TK` bigint NULL DEFAULT NULL,
  `Ma_Tuy_Chon` bigint NULL DEFAULT NULL,
  `Tien_Goc` float NULL DEFAULT NULL,
  `Tien_Tai` float NULL DEFAULT NULL,
  `Ngay_Gui` date NULL DEFAULT NULL,
  `Lai` float NULL DEFAULT NULL,
  PRIMARY KEY (`Ma_Vi`) USING BTREE,
  INDEX `FK_Vi_Tiet_Kiem_Ky_Han`(`Ma_Ky_Han` ASC) USING BTREE,
  INDEX `FK_ViTietKiem_LoaiHinhTietKiem`(`Ma_Loai_Hinh_TK` ASC) USING BTREE,
  INDEX `FK_ViTietKiem_TaiKhoan`(`So_Tai_Khoan` ASC) USING BTREE,
  INDEX `FK_ViTietKiem_TuyChonSauKhiHetHan`(`Ma_Tuy_Chon` ASC) USING BTREE,
  CONSTRAINT `FK_ViTietKiem_KyHan` FOREIGN KEY (`Ma_Ky_Han`) REFERENCES `ky_han` (`Ma_Ky_Han`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_ViTietKiem_LoaiHinhTietKiem` FOREIGN KEY (`Ma_Loai_Hinh_TK`) REFERENCES `loai_hinh_tiet_kiem` (`Ma_Loai_Hinh`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_ViTietKiem_TaiKhoan` FOREIGN KEY (`So_Tai_Khoan`) REFERENCES `tai_khoan` (`So_Tai_Khoan`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_ViTietKiem_TuyChonSauKhiHetHan` FOREIGN KEY (`Ma_Tuy_Chon`) REFERENCES `tuy_chon_sau_khi_het_han` (`Ma_Tuy_Chon`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;