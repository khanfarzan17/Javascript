///
 const course={
    courseName:"JavaScript ",
    coursePrice:"9000",
    courseInstructor:"Hitesh"
 }

//  course.courseName="C#"
//  console.log(course.courseName);//
const {courseInstructor}=course
console.log(courseInstructor);

// change the key name in Object//
const {courseInstructor:teacher}=course// Destructing in JavaScript//
console.log(teacher);
