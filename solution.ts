function formatValue(value: string | number | boolean) : string | number | boolean{
    if(typeof value === "string"){
        return value.toUpperCase();
    }else if(typeof value === 'number'){
        return value * 10
    }else{
        if(value === true){
            return false;
        }else{
            return true;
        }
    }
}


function getLength (value: unknown) : number{
    if(Array.isArray(value)){
        return value.length;
    }else if(typeof value === "string"){
        return value.length;
    }

    return 0;
}

class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

interface Item {
    title: string;
    rating: number;
}

function filterByRating  (value: Item[]) : Item[]{
    const result = value.filter(element => element.rating >= 4);

    return result;
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails (value: Book) {
    console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable}`)
}



 function doesContainNumber<T extends string | number>(value: T, arr3: T[]): boolean {
    for (let i = 0; i < arr3.length; i++) {
      if (arr3[i] === value) return true;
    }
    return false;
  }

function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {

  const arr3: T[] = [];
 
  for (let i = 0; i < arr1.length; i++) {
    if (!doesContainNumber(arr1[i], arr3)) {
      arr3.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!doesContainNumber(arr2[i], arr3)) {
      arr3.push(arr2[i]);
    }
  }

  return arr3;
}


type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
};
function calculateTotalPrice(products: Product[]): number {
  const result = products.reduce((total, product) => {
    let productTotal = product.price * product.quantity;
    if (product.discount) {
      productTotal = productTotal * (1 - product.discount / 100);
    }
    return total + productTotal;
  }, 0);

  return result;
}