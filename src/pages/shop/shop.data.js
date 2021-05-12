const SHOP_DATA = [
  {
    id: 1,
    title: "Hats",

    items: [
      {
        id: 1,
        name: "Brown hat",
        imageUrl:
          "https://www.hutstuebele.com/pic/Julia-straw-hat-with-wide-brim-by-SEEBERGER.44539a.jpg",
        price: 25,
      },
      {
        id: 2,
        name: "Blue hat",
        imageUrl:
          "http://cdn.shopify.com/s/files/1/1350/3365/products/77B2_411B_SAMPLESIZE_f9da78ae-c1eb-4581-8c1e-9362c417db9a.jpg?v=1595403792",
        price: 18,
      },
      {
        id: 3,
        name: "Brown",
        imageUrl:
          "http://cdn.shopify.com/s/files/1/1350/3365/products/95B2_412G.jpg?v=1595422486",
        price: 35,
      },
      {
        id: 4,
        name: "Grey",
        imageUrl:
          "https://suziwong.co.uk/wp-content/uploads/2018/08/LGND-Grey-Hat.jpg",
        price: 25,
      },
    ],
  },
  {
    id: 2,
    title: "Sneakers",
    items: [
      {
        id: 10,
        name: "Adidas",
        imageUrl:
          "https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/0/0000206693174_02_kk.jpg",
        price: 220,
      },
      {
        id: 11,
        name: "Adidas2",
        imageUrl:
          "https://assets.adidas.com/images/w_600,f_auto,q_auto/459ff194c35e45ea91b1a8ba00fc4876_9366/NMD_R1_Sko_Svart_B42200_01_standard.jpg",
        price: 280,
      },
      {
        id: 12,
        name: "Black",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdyZ7RVqA54iP4uiPS0kkIs3yKi3JKwu1fw5Fk_nHpHXOVdUTEcwBE8_gY-UZ0T4kplg&usqp=CAU",
        price: 110,
      },
      {
        id: 13,
        name: "Nike white",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkheUeI9E5yRBcKBk3bywnwr29F-is60Z49a5JsRo_Mhv2HEasJjkd7D7WZcTrsxJgfYBpddY&usqp=CAc",
        price: 160,
      },
    ],
  },
  {
    id: 3,
    title: "Jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl:
          "http://www.bolf.eu//eng_pl_Mens-Leather-Jacket-Black-Bolf-1107-75137_2.jpg",
        price: 125,
      },
      {
        id: 19,
        name: " Jacket",
        imageUrl:
          "https://defected.com/media/catalog/product/cache/442d5fd4af877e1b76296cac12243bd1/d/e/def_0204_001.jpg",
        price: 90,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl:
          "https://images.riverisland.com/is/image/RiverIsland/grey-hooded-bomber-jacket_397596_main?$productImageLarge$",
        price: 90,
      },
      {
        id: 21,
        name: "Brown jacket",
        imageUrl:
          "https://ae01.alicdn.com/kf/H13098fee60cb4ffbbd1023030cdcc2cdZ/FLAVOR-New-Men-s-Real-Leather-Jacket-with-Removable-Hood-Brown-Jacket-Genuine-Leather-Warm-Coat.jpg",
        price: 165,
      },
    ],
  },
  {
    id: 4,
    title: "Womens",
    items: [
      {
        id: 23,
        name: "BluTanktop",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71nqV9iFmYL._SL1500_.jpg",
        price: 25,
      },
      {
        id: 24,
        name: "Flora",
        imageUrl:
          "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/7/_109204727.jpg?h=365&w=240&dpr=2",
        price: 20,
      },
      {
        id: 25,
        name: "Floral",
        imageUrl:
          "https://media.missguided.com/i/missguided/DD925864_01?fmt=jpeg&fmt.jpeg.interlaced=true&$product-page__main--2x$",
        price: 80,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl:
          "https://assets.vogue.com/photos/5f341f6f4721c86585cbb800/3:4/w_1080,h_1440,c_limit/fullsizeoutput_6bcd_1_1080x.jpg",
        price: 80,
      },
    ],
  },
  {
    id: 5,
    title: "Mens",
    items: [
      {
        id: 30,
        name: "CamVest",
        imageUrl:
          "https://ae01.alicdn.com/kf/HTB1MSG8a6LuK1Rjy0Fhq6xpdFXae/Mens-Vest-Jacket-Men-Casual-Sleeveless-Streetwear-Warm-Vest-Man-Winter-Fashion-Body-Warmer-Coat-Men.jpg",
        price: 325,
      },
      {
        id: 31,
        name: "T-shirt",
        imageUrl:
          "https://i.pinimg.com/originals/66/d5/de/66d5de38749e52db946dab7f013d737e.jpg",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White",
        imageUrl:
          "https://di2ponv0v5otw.cloudfront.net/posts/2018/04/01/5ac0ff7272769b6e78279ca3/m_5ac0ff75daa8f63cb1d715e1.jpeg",
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F32%2F65%2F3265a55c80d39b58494aaa3f4c842341196c05a1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B3%5D&call=url[file:/product/main]",
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
