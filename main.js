name_of_the_student_array = [] ;


function submit()
{

    var display_student_array=[];
    for(var a=1; a<=4; a++)
    {
        var name_of_the_student=document.getElementById("name_of_the_student"+a).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }

    console.log(name_of_the_student);
    var length_of_name_of_student_array = name_of_the_student_array.length

    

    

    console.log(name_of_the_student_array);

    document.getElementById("display_name").innerHTML = name_of_the_student_array
    document.getElementById("sudmit_button").style.display = "none"
    document.getElementById("sort_button").style.display = "inline-block"



}

function sorting()
{

   name_of_the_student_array.sort();
   console.log(name_of_the_student_array);
   document.getElementById("display_name"). innerHTML = name_of_the_student_array
}



