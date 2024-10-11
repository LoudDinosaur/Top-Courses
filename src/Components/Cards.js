import React from "react";
import Card from "./Card";
import { useState } from 'react';

const Cards = (props) => {
    let courses=props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]); //for choosing and ulking the course toast
    
    function getCourses(){

        if(category ==="All"){
            let allCourses = []; //ye ek empty array bana liya
            Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses; //ab ek array mil gya hai jisme saare courses ka data hai
        }

        else{
            //main sirf specific category ka data array karunga
            return courses[category];
        }
        
    }
    return(
        <div  className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course}
                         likedCourses={likedCourses}
                         setLikedCourses={setLikedCourses}/>
                ))
            }
        </div>
    )
}

export default Cards;