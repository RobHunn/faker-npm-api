const faker = require('faker');

const buildStore = {
                header : ()=> {
                    let h1 = "===================";
                    let h3 = "Welcome to my shop!"
                    let h2 = "===================";
                    let header = [h1,h3,h2]
                    for(i = 0; i < header.length; i++){
                    console.log(header[i]);
                        }
                    },
                sentence1: (product1,product2) => {
                let sentence = [];
                for(i = 0; i <= 10 ; i++){
                let g = faker.fake(`"{{commerce.${product1}}},{{commerce.${product2}}}"`);
                let res = g.split(",");
                let str1 = res[0];
                let str2 = res[1];
                let paragraph = `${str1} - $${str2}`;
                sentence.push(paragraph);
                    } 
                    for(i = 0; i < sentence.length; i++){
                        console.log(sentence[i]);
                    }
                }
                }

buildStore.header()
buildStore.sentence1('productName','price')//switch here

// Switch any of these varibles to build your own store...
// All below are found in the *commerce* section of fake api
// Use these below!!!!
// color
// department
// productName
// price
// productAdjective
// productMaterial
// product


// my example logs
// ===================
// Welcome to YOUR shop!
// ===================
// "Incredible Plastic Ball - $56.00"
// "Handcrafted Frozen Sausages - $664.00"
// "Generic Plastic Pizza - $604.00"
// "Handmade Soft Gloves - $985.00"
// "Ergonomic Metal Hat - $746.00"
// "Fantastic Cotton Shoes - $514.00"
// "Handmade Steel Bacon - $591.00"
// "Intelligent Fresh Pants - $457.00"
// "Incredible Wooden Cheese - $350.00"
// "Awesome Plastic Mouse - $963.00"
// "Gorgeous Cotton Bacon - $816.00"