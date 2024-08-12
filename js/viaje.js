const modal = document.getElementById("modalV");
const cerrar = document.getElementById("close1");
const show = document.getElementById("More");

show.addEventListener("click", function()
    {
        modal.classList.add("openmodal");
       
    }

)
cerrar.addEventListener("click", function()
    {
        modal.classList.remove("openmodal");
       
    }

)

