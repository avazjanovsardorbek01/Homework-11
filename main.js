async function getUsers() {
  try {
    const users = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((response) => response.json());

    const table = document.createElement("table");
    table.classList.add("table", "table-dark", "table-hover");
    const headerRow = table.createTHead().insertRow();
    const headers = [
      "ID",
      "Ism",
      "Foydalanuvchi nomi",
      "Elektron pochta",
      "Shahar",
    ];
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });

    const tbody = table.createTBody();
    users.forEach((user) => {
      const row = tbody.insertRow();
      row.classList.add("table-row");
      const cellId = row.insertCell();
      cellId.textContent = user.id;
      const cellName = row.insertCell();
      cellName.textContent = user.name;
      const cellUsername = row.insertCell();
      cellUsername.textContent = user.username;
      const cellEmail = row.insertCell();
      cellEmail.textContent = user.email;
      const cellCity = row.insertCell();
      cellCity.textContent = user.address.city;
    });

    document.getElementById("data").appendChild(table);
  } catch (error) {
    console.error(error);
  }
}

getUsers();
