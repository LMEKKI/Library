const myLibrary = [];
const cardcontainer = document.querySelector(".card-container");
const form = document.querySelector("#form-add-book");

const openDialogButton = document.querySelector("#add-book-btn");
const cancelButton = document.querySelector("#cancel");
const confirmButton = document.querySelector("#confirm");
const dialog = document.querySelector("#dialog-add-book");

openDialogButton.addEventListener("click", () => {
	dialog.showModal();
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
	dialog.close("animalNotChosen");
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
	displayBooks();
}

function createCard(book) {
	const card = document.createElement("Div");
	const title = document.createElement("p");
	const author = document.createElement("p");
	const pages = document.createElement("p");
	const read = document.createElement("p");
	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";

	card.classList.add("card", book.id);
	card.appendChild(title, author, pages, read);
	title.textContent = book.title;
	author.textContent = book.author;
	pages.textContent = book.pages;
	read.textContent = book.read;
	cardcontainer.append(card);
}

function displayBooks() {
	const listOfCard = Array.from(cardcontainer.children);

	cardcontainer.replaceChildren();
	myLibrary.map((book) => {
		listOfCard.map((card) => {
			if (card.className != book.id) {
				createCard(book);
			}
		});
	});
}

function addBookToLibrary(author, title, pages, read) {
	id = crypto.randomUUID();
	const book = new Book(author, title, pages, read, id);
	myLibrary.push(book);
}
