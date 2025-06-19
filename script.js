/*  Sélection des éléments du DOM */
const form = document.getElementById('ajouter-employer');
const employeeList = document.getElementById('list-employer');

/*  Récupération des employés depuis le localStorage ou initialisation d'un tableau vide */
let employees = JSON.parse(localStorage.getItem('employees')) || [];

/*  Fonction pour afficher la liste des employés */
function displayEmployees() {
    employeeList.innerHTML = ''; /* retourne une liste vide */
    employees.forEach((employee, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${employee.name} ${employee.surname}</span>
            <span>${employee.email}</span>
            <span>${employee.position}</span>
            <button onclick="deleteEmployee(${index})">Supprimer</button>
        `;
        employeeList.appendChild(li);
    });
}

 /* Fonction pour ajouter un employé à la liste */
function addEmployee(event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    const position = document.getElementById('position');

    /*  Validation du formulaire */
    if (!name || !surname || !email || !position) {
        alert('Tous les champs sont requis!');
        return;
    }

    /*  Validation de l'email fournis */
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        alert('Veuillez entrer un email valide!');
        return;
    }

    /*  l'employé est ajouter à la liste */
    const newEmployee = { 
        name: name.value, 
        surname: surname.value, 
        email: email.value, 
        position: position.value 
    };
    employees.push(newEmployee);

    /*  les donnes sont sauvegarder dans le localStorage */
    localStorage.setItem('employees', JSON.stringify(employees));

    /*  Réinitialisation du formulaire */
    form.reset();

    /*  Rafraîchir la liste des employés */
    displayEmployees();
}

   /* Fonction pour supprimer un employé de la liste */
function deleteEmployee(index) {
    employees.splice(index, 1);
    localStorage.setItem('employees', JSON.stringify(employees));
    displayEmployees();
}

form.addEventListener('submit', addEmployee);

/*  Afficher les employés au chargement de la page */
displayEmployees();
