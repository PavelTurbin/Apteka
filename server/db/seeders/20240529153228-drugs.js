'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Drugs',
      [
        {
          name: 'Лактодепантол',
          price: '1000',
          priceDiscount: '900',
          img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/44159803_5_1649759521.jpeg',
        },
        {
          name: 'Витажиналь Инозит',
          price: '2000',
          priceDiscount: '1500',
          img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/44202603_1_1643891342.jpeg',
        },
        {
          name: 'Солгар Масло',
          price: '500',
          priceDiscount: '350',
          img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/3204807_1627481587.jpg',
        },
        {
          name: 'Йодомарин',
          price: '210',
          priceDiscount: '197',
          img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/2594999.jpg',
        },
        {
          name: 'Де-нол',
          price: '666',
          priceDiscount: '555',
          img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/1881811.jpg',
        },
        {
          name: 'VICHY DERCOS AMINEXIL',
          price: '4300',
          priceDiscount: '3400',
          img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/1595899_1687379549.jpg',
        },
        {
          name: 'Эсциталопрам',
          price: '309',
          priceDiscount: '290',
          img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/5376107.jpg',
        },
        {
          name: 'Миртазапин канон',
          price: '598',
          priceDiscount: '540',
          img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/2993911_1670241741.jpg',
        },
        {
          name: 'Дюфалак',
          price: '295',
          priceDiscount: '255',
          img: 'https://12bb6ecf-bda5-4c99-816b-12bda79f6bd9.selcdn.net/upload//Photo_Tovar/2948000_1711191926.jpg',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Drugs', null, {});
  },
};
