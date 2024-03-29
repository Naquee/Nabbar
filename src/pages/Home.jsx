import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProductsCard from '../components/ProductsCard'


 const products = [
      {   
          "id" : 1,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005_FH1-124_224x224_crop_center.jpg?v=1645650744",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0006_FH1-123_224x224_crop_center.jpg?v=1645650741",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0008_FH1-117copy_224x224_crop_center.jpg?v=1645650744",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0010_FH1-356_224x224_crop_center.jpg?v=1645650744"
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 0,
          "rating" : 0
      },
      {   
          "id" : 2,
          "name" : "BANANA KICKS",
          "color" : "AQUA BLUE",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0006s_0003_FH1-164_224x224_crop_center.jpg?v=1645653336",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0006s_0000_FH1-170_224x224_crop_center.jpg?v=1645653336",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0006s_0001_FH1-166_224x224_crop_center.jpg?v=1645653336",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0006s_0002_FH1-165_224x224_crop_center.jpg?v=1645653336",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0006s_0004_FH1-163_224x224_crop_center.jpg?v=1645650808"
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 1,
          "rating" : 5
      },
      {   
          "id" : 3,
          "name" : "BANANA KICKS",
          "color" : "BURGUNDY RED",
          "gender" : "MEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005s_0004_FH1-140_224x224_crop_center.jpg?v=1645653324",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005s_0001_FH1-145_224x224_crop_center.jpg?v=1645653324",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005s_0002_FH1-142_224x224_crop_center.jpg?v=1645653324",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005s_0003_FH1-141_224x224_crop_center.jpg?v=1645653324",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005s_0005_FH1-139_224x224_crop_center.jpg?v=1645650932"
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 1,
          "rating" : 5
      },
       {   
          "id" : 4,
          "name" : "BANANA KICKS",
          "color" : "NATURAL WHITE",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000s_0005_FH1-129_224x224_crop_center.jpg?v=1645653297",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000s_0000_FH1-128_224x224_crop_center.jpg?v=1645653297",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000s_0001_FH1-131_224x224_crop_center.jpg?v=1645653297",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000s_0008_FH1-133_224x224_crop_center.jpg?v=1645651041"
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 5,
          "name" : "BANANA KICKS",
          "color" : "NATURAL WHITE",
          "gender" : "MEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000s_0005_FH1-129_224x224_crop_center.jpg?v=1645653297",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000s_0000_FH1-128_224x224_crop_center.jpg?v=1645653297",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000s_0001_FH1-131_224x224_crop_center.jpg?v=1645653297"
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 6,
          "name" : "BANANA KICKS",
          "color" : "BURGUNDY RED",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005s_0004_FH1-140_224x224_crop_center.jpg?v=1645653324",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005s_0001_FH1-145_224x224_crop_center.jpg?v=1645653324",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005s_0002_FH1-142_224x224_crop_center.jpg?v=1645653324",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005s_0003_FH1-141_224x224_crop_center.jpg?v=1645653324",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005s_0005_FH1-139_224x224_crop_center.jpg?v=1645650932"
          ],
          "sizes" : [3,4,5,6,7],
          "reviews" : 5,
          "rating" : 4
      },
      {   
          "id" : 7,
          "name" : "SOFTKNIT LOAFERS",
          "color" : "ALL-BLACK",
          "gender" : "MEN",
          "original_price" : "3,499",
          "final_price" : "2,649",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0007s_0000_FH1-254_85bda839-96d7-4e79-b8de-52833862d659_224x224_crop_center.jpg?v=1646035848",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0007s_0001_FH1-253_62f5ff53-ddb8-4c81-8274-d512c38ec384_224x224_crop_center.jpg?v=1646035848",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0007s_0003_FH1-259_8f20d244-8902-4ccf-ad12-f1f61a9b0a62_224x224_crop_center.jpg?v=1646035848",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0007s_0005_FH1-255_c799e0af-23d5-403b-8397-c97642bad647_224x224_crop_center.jpg?v=1646035848"
          ],
          "sizes" : [3,5,6,7,8,9,11],
          "reviews" : 0,
          "rating" : 0
      },
      {   
          "id" : 8,
          "name" : "SOFTKNIT LOAFERS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "3,499",
          "final_price" : "2,649",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0007s_0000_FH1-254_85bda839-96d7-4e79-b8de-52833862d659_224x224_crop_center.jpg?v=1646035848",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0007s_0001_FH1-253_62f5ff53-ddb8-4c81-8274-d512c38ec384_224x224_crop_center.jpg?v=1646035848",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0007s_0003_FH1-259_8f20d244-8902-4ccf-ad12-f1f61a9b0a62_224x224_crop_center.jpg?v=1646035848",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0007s_0005_FH1-255_c799e0af-23d5-403b-8397-c97642bad647_224x224_crop_center.jpg?v=1646035848"
          ],
          "sizes" : [3,5,6,7,8],
          "reviews" : 0,
          "rating" : 0
      },
      {   
          "id" : 9,
          "name" : "SOFTKNIT LOAFERS",
          "color" : "BLACK & GREY (BLACK SOLE)",
          "gender" : "MEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0001s_0001_FH1-320_224x224_crop_center.jpg?v=1646037672",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0001s_0004_FH1-324_224x224_crop_center.jpg?v=1646037672",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0001s_0005_FH1-323_224x224_crop_center.jpg?v=1646037672",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0001s_0004_FH1-403_224x224_crop_center.jpg?v=1646037670"
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 1,
          "rating" : 3
      },
      {   
          "id" : 10,
          "name" : "SOFTKNIT LOAFERS",
          "color" : "BLACK & GREY (BLACK SOLE)",
          "gender" : "WOMEN",
          "original_price" : "3,499",
          "final_price" : "2,649",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0001s_0001_FH1-320_224x224_crop_center.jpg?v=1646037672",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0001s_0004_FH1-324_224x224_crop_center.jpg?v=1646037672",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0001s_0005_FH1-323_224x224_crop_center.jpg?v=1646037672",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0001s_0004_FH1-403_224x224_crop_center.jpg?v=1646037670"
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 2
      },
      {   
          "id" : 11,
          "name" : "SOFTKNIT LOAFERS",
          "color" : "BLACK & RED (BLACK SOLE)",
          "gender" : "WOMEN",
          "original_price" : "3,499",
          "final_price" : "2,649",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0004_FH1-332_224x224_crop_center.jpg?v=1646037310",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0002_FH1-334_224x224_crop_center.jpg?v=1646037309",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0003_FH1-333_224x224_crop_center.jpg?v=1646037308",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000s_0008_FH1-401_224x224_crop_center.jpg?v=1646037311"
          ],
          "sizes" : [6,7,8,9],
          "reviews" : 9,
          "rating" : 4
      },
      {   
          "id" : 12,
          "name" : "SOFTKNIT LOAFERS",
          "color" : "BLACK & RED (BLACK SOLE)",
          "gender" : "MEN",
          "original_price" : "3,499",
          "final_price" : "2,649",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0004_FH1-332_224x224_crop_center.jpg?v=1646037310",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0002_FH1-334_224x224_crop_center.jpg?v=1646037309",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0003_FH1-333_224x224_crop_center.jpg?v=1646037308",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000s_0008_FH1-401_224x224_crop_center.jpg?v=1646037311"
          ],
          "sizes" : [6,7,8,9,10,11,12],
          "reviews" : 4,
          "rating" : 2
      },
      {   
          "id" : 13,
          "name" : "SOFTKNIT LOAFERS",
          "color" : "WHITE & NAVY",
          "gender" : "MEN",
          "original_price" : "3,499",
          "final_price" : "2,649",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0004s_0002_FH1-284_224x224_crop_center.jpg?v=1646066714",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0004s_0000_FH1-286_224x224_crop_center.jpg?v=1646066714",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0004s_0013_FH1-287_224x224_crop_center.jpg?v=1646066714",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0004s_0005_FH1-289_224x224_crop_center.jpg?v=1646066714"
          ],
          "sizes" : [6,7,8,9,10,11,12],
          "reviews" : 0,
          "rating" : 0
      },
      {   
          "id" : 14,
          "name" : "SOFTKNIT LOAFERS",
          "color" : "WHITE & NAVY",
          "gender" : "WOMEN",
          "original_price" : "3,499",
          "final_price" : "2,649",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0004s_0002_FH1-284_224x224_crop_center.jpg?v=1646066714",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0004s_0000_FH1-286_224x224_crop_center.jpg?v=1646066714",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0004s_0013_FH1-287_224x224_crop_center.jpg?v=1646066714",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0004s_0005_FH1-289_224x224_crop_center.jpg?v=1646066714"
          ],
          "sizes" : [6,7,8,9,10,11,12],
          "reviews" : 0,
          "rating" : 0
      },
      {   
          "id" : 15,
          "name" : "LINEN SNEAKERS",
          "color" : "BURGUNDY-RED",
          "gender" : "WOMEN",
          "original_price" : "4,799",
          "final_price" : "3,499",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0004_FH1-226_224x224_crop_center.jpg?v=1645653545",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0001_FH1-230_224x224_crop_center.jpg?v=1645653545",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0003_FH1-227_224x224_crop_center.jpg?v=1645653545",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005_FH1-225_224x224_crop_center.jpg?v=1645652133"
          ],
          "sizes" : [6,7,8,11],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 16,
          "name" : "LINEN SNEAKERS",
          "color" : "LAVENDER",
          "gender" : "WOMEN",
          "original_price" : "4,799",
          "final_price" : "3,499",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000s_0002_FH1-244_224x224_crop_center.jpg?v=1645653458",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000s_0000_FH1-246_224x224_crop_center.jpg?v=1645653458",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000s_0001_FH1-245_224x224_crop_center.jpg?v=1645653458",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000s_0005_FH1-248_224x224_crop_center.jpg?v=1645652282"
          ],
          "sizes" : [4,5,6,7,8],
          "reviews" : 0,
          "rating" : 0
      },
      {   
          "id" : 17,
          "name" : "LINEN SNEAKERS",
          "color" : "BURGUNDY-RED",
          "gender" : "MEN",
          "original_price" : "4,799",
          "final_price" : "3,499",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0004_FH1-226_224x224_crop_center.jpg?v=1645653545",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0001_FH1-230_224x224_crop_center.jpg?v=1645653545",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0003_FH1-227_224x224_crop_center.jpg?v=1645653545",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005_FH1-225_224x224_crop_center.jpg?v=1645652133"
          ],
          "sizes" : [6,7,8,9,1011],
          "reviews" : 0,
          "rating" : 0
      },
       {   
          "id" : 18,
          "name" : "LINEN SNEAKERS",
          "color" : "OLIVE-BLACK (BLACK SOLE)",
          "gender" : "MEN",
          "original_price" : "4,799",
          "final_price" : "3,499",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000_FH1-187_224x224_crop_center.jpg?v=1645652332",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0003_FH1-191_224x224_crop_center.jpg?v=1645652334",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005_FH1-188_224x224_crop_center.jpg?v=1645652334"
          ],
          "sizes" : [6,7,8,11],
          "reviews" : 0,
          "rating" : 0
      },
      {   
          "id" : 19,
          "name" : "LINEN SNEAKERS",
          "color" : "OLIVE-BLACK (BLACK SOLE)",
          "gender" : "WOMEN",
          "original_price" : "4,799",
          "final_price" : "3,499",
          "images" : [
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0000_FH1-187_224x224_crop_center.jpg?v=1645652332",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0003_FH1-191_224x224_crop_center.jpg?v=1645652334",
              "https://cdn.shopify.com/s/files/1/0258/2485/4100/products/1000x1000_0005_FH1-188_224x224_crop_center.jpg?v=1645652334"
          ],
          "sizes" : [4,5,6,7,8],
          "reviews" : 0,
          "rating" : 0
      },
      {   
          "id" : 20,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 21,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 22,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 23,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 24,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 25,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 26,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 27,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 28,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 29,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 30,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 31,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
       {   
          "id" : 32,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 33,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 34,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 35,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 36,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 37,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 38,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 39,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 40,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 41,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 42,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 43,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 44,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 45,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
       {   
          "id" : 46,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 47,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 48,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 49,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 50,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 51,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 52,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 53,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 54,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 55,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 56,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 57,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 58,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
       {   
          "id" : 59,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      },
      {   
          "id" : 60,
          "name" : "BANANA KICKS",
          "color" : "ALL-BLACK",
          "gender" : "WOMEN",
          "original_price" : "4,999",
          "final_price" : "3,999",
          "images" : [
          ],
          "sizes" : [3,4,5,6,7,8],
          "reviews" : 2,
          "rating" : 5
      }
  ]


const Home = () => {
  return (
    <Box>
      <SimpleGrid columns={{base:1,md:2,lg:3}} spacing="10">
   {products.map((item) => {
    return (
      <ProductsCard key={products.id} {...item}/>
    )
   })}
        
      </SimpleGrid>
    </Box>
  )
}

export default Home