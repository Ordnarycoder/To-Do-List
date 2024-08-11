const joblist = document.getElementById("job-list");
const addJobButton = document.getElementById("add-job");
const jobInput = document.querySelector('input[type="text"]');

const addJob = () => {
  const jobText = jobInput.value;

  if (jobText.trim() !== "") {

    const newJob = document.createElement("li");
    newJob.className = "list-group-item d-flex justify-content-between align-items-center job";

    const checkboxId = `checkbox-${joblist.children.length + 1}`;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "custom-checkbox";
    checkbox.id = checkboxId;

    const label = document.createElement("label");
    label.setAttribute("for", checkboxId);

    const jobTextNode = document.createTextNode(jobText);

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.textContent = "Delete Job";

    const controlsDiv = document.createElement("div");
    controlsDiv.appendChild(checkbox);
    controlsDiv.appendChild(label);
    controlsDiv.appendChild(deleteButton);

    newJob.appendChild(checkbox);
    newJob.appendChild(label);
    newJob.appendChild(jobTextNode);
    newJob.appendChild(controlsDiv);

    joblist.appendChild(newJob);

    jobInput.value = "";
  }
}

joblist.addEventListener("click", (e) => {
    if (e.target.type === "checkbox") {
        const job = e.target.closest('li');
        if (e.target.checked) {
            job.style.textDecoration = "line-through";
        } else {
            job.style.textDecoration = "none";
        }
    }
    if (e.target.tagName === "BUTTON" && e.target.textContent === "Delete Job") {
        const job = e.target.closest('li');
        joblist.removeChild(job);
    }
});

addJobButton.addEventListener("click", addJob);

jobInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { 
        e.preventDefault(); 
        addJob(); 
    }
});
