const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// 이미지 파일들이 들어 있는 디렉토리 경로
const imagesDirectory = path.join(__dirname, "src", "img", "ex");

// 모든 이미지 파일을 가져옴
const files = fs.readdirSync(imagesDirectory);

// ex1, ex2 제외한 나머지 이미지 파일 처리
files.forEach((file) => {
  if (file !== "") {
    // 이미지 파일의 전체 경로
    const inputFilePath = path.join(imagesDirectory, file);
    const outputFilePath = path.join(imagesDirectory, "resized", file);

    // 이미지 크기 조정 (80% 품질로 크기 조정)
    sharp(inputFilePath)
      .resize(800) // 가로 크기를 800px로 설정, 세로는 비율에 맞춰 자동으로 조정
      .jpeg({ quality: 80 }) // JPEG로 변환하고 품질을 80으로 설정
      .toFile(outputFilePath, (err, info) => {
        if (err) {
          console.error("Error resizing image:", file, err);
        } else {
          console.log("Image resized:", file, info);
        }
      });
  }
});
