// Map is failed to iterate on objects so we use ForOF loop for iteraing over Objects//

const myObjects={
    js:'javaScript',
    cpp:"C++",
    jv:"Java"
}
for (const key in myObjects) {
  console.log(`${key} shortcut of this is ${myObjects[key]}`)
}


let programming=["C++","JAVA"]

for (const key in programming) {
    console.log(key)/// for in loop take the we are taking not value but index of the values//
}

/// Summary  for Array we use for of loop//
/// for Objects we use For in loop//
