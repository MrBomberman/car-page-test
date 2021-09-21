const title = document.querySelector('#title');
const description = document.querySelector('#description');
const fueltType = document.querySelector('#fuelType');
const trimLevel = document.querySelector('#trimLevel');
const gearBox = document.querySelector('#gearBox');
const make = document.querySelector('#make');
const optionTitle = document.querySelector('#optionTitle');
const optionCode = document.querySelector('#optionCode');
const model = document.querySelector("#model");
const garageName = document.querySelector("#name");
const email = document.querySelector("#email");
const owner = document.querySelector("#owner");
const btnEdit = document.querySelector("#edit");
const form = document.querySelector(".formGarage");
const btnSubmit = document.querySelector("#submit");
const finalName = document.querySelector("#finalName");
const finalEmail = document.querySelector("#finalEmail");
const finalOwner = document.querySelector("#finalOwner");


let editing = false;

btnEdit.addEventListener('click', () => {
    editing = !editing
    if (editing) {
        btnEdit.innerHTML = 'CANCEL'
        form.style.cssText = 'display:block'
        window.setTimeout(function () {
            form.style.opacity = 1;
            form.style.transform = 'scale(1)';
        }, 0);
        btnSubmit.addEventListener('click', (e) => {
            editing = false;
            e.preventDefault();
            btnEdit.innerHTML = 'EDIT'
            form.style.opacity = 0;
            form.style.transform = 'scale(0)';
            window.setTimeout(function () {
                form.style.display = 'none';
            }, 700);
            garageName.value = garageName.value;
            email.value = email.value;
            owner.value = owner.value;
            finalName.innerHTML = garageName.value;
            finalEmail.innerHTML = email.value;
            finalOwner.innerHTML = owner.value;
        })
    } else {
        btnEdit.innerHTML = 'EDIT'
        form.style.opacity = 0;
        form.style.transform = 'scale(0)';
        window.setTimeout(function () {
            form.style.display = 'none';
        }, 700);
        garageName.value = finalName.innerHTML;
        email.value = finalEmail.innerHTML;
        owner.value = finalOwner.innerHTML;
    }
})


// fetching data

async function getData() {
    const response = await fetch('http://109.236.74.74:9900/getdata')
    const data = await response.json();
    const Car = data.Item;
    const Garage = data.Garage;
    title.innerHTML = Car.Title;
    description.innerHTML = Car.Description;
    fueltType.innerHTML = Car.KeyValues.FuelType;
    trimLevel.innerHTML = Car.KeyValues.TrimLevel;
    gearBox.innerHTML = Car.KeyValues.GearBox;
    make.innerHTML = Car.Original.Make;
    optionTitle.innerHTML = Car.Original.CarOptions.Title;
    optionCode.innerHTML = Car.Original.CarOptions.Code;
    model.innerHTML = Car.Original.Model

    garageName.value = Garage.Name;
    email.value = Garage.Email;
    owner.value = Garage.Owner;

    finalName.innerHTML = garageName.value;
    finalEmail.innerHTML = email.value;
    finalOwner.innerHTML = owner.value;

}

getData()