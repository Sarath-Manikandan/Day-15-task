let submit=document.getElementById("submit")
submit.addEventListener("click",function(e){
    e.preventDefault();
    let address=[];
    address.push(address1.value)
    address.push(address2.value)

    let gender=document.getElementsByName("gender")
    let genderValue;
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            genderValue=gender[i].value
        }
    }
    
    let food=document.getElementsByName("food")
    let foodList=[]
    let foodCount=0;
    console.log(food)
    for(let i=0;i<food.length;i++){
        if(food[i].checked){
            foodList.push(food[i].value)
            foodCount++
        }
    }
    if(foodList.length>=2){
        result=foodList.join(", ")
    }else{
        result=alert("Choose atleast 2 options out of 5 in food")
    }

    createTable(fname.value,lname.value,address.join(" "),pin.value,genderValue,result,state.value,country.value)
    fname.value=""
    lname.value=""
    address1.value=""
    address2.value=""
    pin.value=""
    gender.value=""
    foodList=[];
    state.value=""
    country.value=""
})

function createTable(fname,lname,address,pincode,gender,food,state,country){
    let tbody=document.getElementById("tbody")
    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    td1.innerHTML=fname;
    let td2=document.createElement("td")
    td2.innerHTML=lname;
    let td3=document.createElement("td")
    td3.innerHTML=address;
    let td4=document.createElement("td")
    td4.innerHTML=pincode;
    let td5=document.createElement("td")
    td5.innerHTML=gender;
    let td6=document.createElement("td")
    td6.innerHTML=food;
    let td7=document.createElement("td")
    td7.innerHTML=state;
    let td8=document.createElement("td")
    td8.innerHTML=country;   

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
    tbody.append(tr)
}