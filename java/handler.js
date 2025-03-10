import { loadStudent } from "./formStudent.js";

export const enableFromStudentToEdit = (e) => {
    const span = e.target;
    const DB = loadStudent();
    const infoStudent = DB[span.dataset.id_student];

    // Mostrar el cuadro de diálogo de edición
    document.querySelector("#dialog__student_edit").showModal();
    
    // Seleccionar todos los inputs dentro del formulario de edición
    const input = document.querySelector("#form__student_edit").querySelectorAll("input");

    for (let i = 0; i < input.length; i++) {
        if (input[i].name == "id") { 
            input[i].value = span.dataset.id_student;
            continue;
        }
        input[i].value = infoStudent[input[i].name];
    }
};

export const enableFromStudentToDelete = (e) => {
    const input = document.querySelector("#form__student_delete").querySelector("input[name='id']");
    const strong = document.querySelector("#form__student_delete").querySelector("strong");

    input.value = e.target.dataset.id_student;
    strong.textContent = e.target.dataset.name_student;

    // Mostrar el cuadro de diálogo de eliminación
    document.querySelector("#dialog__student_delete").showModal();
};
