function ownProperties (obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}

/* test */

/* const TestObj1 = {
    name: "test1", 
}

const TestObj2 = Object.create(TestObj1);

TestObj2.ownCity = "Piter";

console.log(TestObj2);

ownProperties (TestObj2);
 */