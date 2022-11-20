/*

<div class="formandh1">
            <h1>Let's do this!</h1>
            <form action="#">
                <div class="inputandlabel">
                    <label for="fname">First name</label>
                    <input type="text" class="name" id="uname">
                </div>
                <div class="inputandlabel">
                    <label for="lname">Last name</label>
                    <input type="text" class="name" id="usrname">
                </div>
                <div class="inputandlabel">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email">
                </div>
                <div class="inputandlabel">
                    <label for="phone">Phone number</label>
                    <input type="text" id="phonenumber">
                </div>
                <div class="inputandlabel">
                    <label for="password">Password</label>
                    <input type="password" id="password">
                </div>
                <div class="inputandlabel">
                    <label for="rpassword">Repeat password</label>
                    <input type="password" id="rpassword">
                </div>
                <div class="submitorlogin">
                    <button type="submit">Submit</button>
                    <p>Already have an account?<a href="#" class="jovana">Log in</a></p>
                </div>
            </form>
        </div>

*/ 


function contactModule() {
    let formandh1=document.createElement('div');
    let h1=document.createElement('h1');
    let form=document.createElement('form');
    form.appendChild(inputOrLabel('First name','text','name'));
    form.appendChild(inputOrLabel('Last name','text','name'));
    form.appendChild(inputOrLabel('Email','email','email'));
    form.appendChild(inputOrLabel('Phonenumber','phone','phone'));
    let button=document.createElement('button');
    button.innerHTML='Submit';
    let p=document.createElement('p');
    p.innerHTML='Already have an account?';
    let a=document.createElement('a');
    a.innerHTML='Log in'
    a.classList.add('jovana')
    p.appendChild(a);
    let submitorlogin=document.createElement('div');
    submitorlogin.classList.add('submitorlogin');
    submitorlogin.appendChild(button);
    submitorlogin.appendChild(p);
    form.appendChild(submitorlogin);
    formandh1.appendChild(h1);
    formandh1.appendChild(form);
    return formandh1;
}

function inputOrLabel(naslov,tip,klasa) {
    let inputandlabel=document.createElement('div');
    let label=document.createElement('label');
    label.innerHTML=naslov;
    let input=document.createElement('input');
    input.type=tip;
    input.classList.add(klasa);
    return inputandlabel;
}

export default contactModule;