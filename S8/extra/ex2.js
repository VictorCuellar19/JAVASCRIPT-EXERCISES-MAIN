fetch("http://localhost:3000/diary")
.then(FirstResponse => FirstResponse.json())
.then(SecondResponse => {
    const diaryNotes = orderDiaryNotes(diary);
    createDiaryNotes(SecondResponse)
});

const orderDiaryNotes = (diary) => {
    return diary.sort((a, b) => new Date(a.date) - new Date(b.date))
}

const createDiaryNotes = (diaryNotes) => {
    for (const diaryNote of diaryNotes) {
        const myDiv = document.createElement('div');
        myDiv.innerHTML = `<h3>${diaryNote.title}</h3>
                            <h5>${diaryNote.date}</h5>
                            <p>${diaryNote.description}</p>`

        const myButton = document.createElement('button');
        myButton.textContent = 'X';
        myButton.addEventListener('click', () => {removeDiaryNote(myDiv)})
        myDiv.appendChild(myButton);
        document.body.appendChild(myDiv);
    }
}

const removeDiaryNote = (diaryNotes$$) => {
    diaryNotes$$.remove();
}