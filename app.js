const stack = document.querySelector(".stack");

const childrenArray = [...stack.children];
const reverseArray = childrenArray.reverse();
reverseArray.forEach((card) => stack.append(card));

const swap = (e) => {
	const card = document.querySelector(".card:last-child");
	if (e.target !== card) return;
	card.style.animation = "swap 700ms forwards";
	setTimeout(() => {
		card.style.animation = "";
		stack.prepend(card);
	}, 700);
}

stack.addEventListener("click", swap);
