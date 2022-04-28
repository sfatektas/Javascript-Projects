async function getuserdata(query)
{
    let request = await fetch(`https://jsonplaceholder.typicode.com/users?username=${query}`);
    let getjson = await request.json();
    return getjson;
}

//define

var main = document.querySelector('main');

document.querySelector('#search').addEventListener('keyup',(e)=>
{
    clearui(e.target.value);
    console.log(e.target.value);
    isExisst(e.target.value);

});

isExisst = async (input) => 
{
    var users = await getuserdata(input);
    users.forEach(user => {
        if(user.username == input)
        {
            showui(user.name,user.username,user.email,user.phone,user.website)
        }
    });
}

function showui(name,username,email,phone,website)
{
    main.innerHTML = "";
    var html =`<div class="col">
    <div class="row border">
        <div class="foto col-sm-4 mt-2">
            <img src="../wallpaper.jpg" width="100%" alt="">
        </div>
        <div class="card col-sm-7 m-2 " >
            <h4 class="text-center">Contact</h4>
            <ul class="list-group list-group-flush text-center">
              <li class="list-group-item"><span class="mr-1"><b>Name :</b></span>${name}</li>
              <li class="list-group-item"><span class="mr-1"><b>UserName :</b></span>${username}</li>
              <li class="list-group-item"><span class="mr-1"><b>Email :</b></span>${email}</li>
              <li class="list-group-item"><span class="mr-1"><b>Phone :</b></span>${phone}</li>
              <li class="list-group-item"><span class="mr-1"><b>Website :</b></span>${website}</li>
            </ul>
        </div>
        </div>
    </div>`;
    main.innerHTML = html; 
}
clearui = (text) => 
{
    main.textContent = `${text} is not found`
}