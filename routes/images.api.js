const express = require('express');
const cloudinary = require('cloudinary').v2; // Cloudinary SDK
const router = express.Router();


// Cloudinary 설정
cloudinary.config({
  cloud_name: 'duvv5smtd',
  api_key: '927989368172677',
  api_secret: 'P4pwOHmh5g6YDcUJAfNL31yDrhk'
});

// 이미지 가져오기 엔드포인트
router.get('/', async (req, res) => {
  try {
    const { tags } = req.query;

    const result = await cloudinary.search
      .expression(`tags=${tags}`)
      .execute();

    res.json(result.resources);

  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

module.exports= router
