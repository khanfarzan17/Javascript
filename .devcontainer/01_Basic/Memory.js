// There are two types of Memory in Javascript//
// Stack and Heap//
// stack is being used in (Primitive Datatypes) such as number, string, Boolean,null ,undefined//
//Heap is being used in (Non Primitive Datatypes) such as Array,Objects,Functions//

let channel="apna college";/* this Example show How we are using Stack */
newchannel=channel
newchannel="Chaiaurcode"
console.log(channel);
console.log(newchannel);

/*How to use heap by using its Refernece of the
 the below example shows how we accesing the userone refernce by user userTwo refernce in Function
*/

let userOne={
    userID:"123",
    userAddress:"HBR Layout"
}

let UserTwo=userOne

UserTwo.userID="234"
UserTwo.userAddress="Hennur"

console.log(userOne);

// Summarry whenever we make Changes in the Stack its Copy get changes not its original. //
//Similary whenever we make Changes in the Heap its Refernce get Changes which is its original//