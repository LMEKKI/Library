let myLibrary = [];
const cardcontainer = document.querySelector(".card-container");
const form = document.querySelector("#form-add-book");

const openDialogButton = document.querySelector("#add-book-btn");
const cancelButton = document.querySelector("#cancel");
const confirmButton = document.querySelector("#confirm");
const dialog = document.querySelector("#dialog-add-book");

openDialogButton.addEventListener("click", () => {
	dialog.showModal();
});

cancelButton.addEventListener("click", () => {
	dialog.close();
});

confirmButton.addEventListener("click", (e) => {
	e.preventDefault();
	submitBookForm();
	form.reset();
});

function Book(author, title, pages, read, id) {
	this.id = id;
	this.author = author;
	this.title = title;
	this.pages = pages;
	this.read = read;
}

function submitBookForm() {
	const author = document.querySelector("#author").value;
	const title = document.querySelector("#title").value;
	const pages = document.querySelector("#pages").value;
	const read = document.querySelector("#read").checked;
	addBookToLibrary(author, title, pages, read);
	dialog.close();
	alert("Book added!");
}

function createCard(book) {
	const card = document.createElement("Div");
	card.id = book.id;
	const title = document.createElement("p");
	const author = document.createElement("p");
	const pages = document.createElement("p");
	const read = document.createElement("input");
	read.setAttribute("type", "checkbox");
	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", (e) => {});

	read.addEventListener("click", (e) => {
		const id = e.target.parentElement.id;

		changeBookread(id);
	});

	card.classList.add("card", book.id);
	{
		title;
	}
	card.append(title, author, pages, read, deleteButton);
	title.textContent = book.title;
	author.textContent = book.author;
	pages.textContent = book.pages;
	read.checked = book.read;

	myLibrary.map((book) => {
		if (card.className != book.id) {
			cardcontainer.append(card);
		}
	});
}

function changeBookread(id) {
	console.log(id);

	let temp = myLibrary.map((card) => {
		if (card.id == id) {
			card.read = !card.read;
			return card;
		}
	});
	console.log(myLibrary);
	myLibrary = temp;
}

function addBookToLibrary(author, title, pages, read) {
	id = crypto.randomUUID();
	const book = new Book(author, title, pages, read, id);
	myLibrary.push(book);

	createCard(book);
}
