export const filterButtonSort = document.querySelector(".sortFilter");
export const filterButtonCategory = document.querySelector(".categoryFilter");
export let filterButtons = document.querySelectorAll(".filter-btn");
export const filtersContainer = document.querySelectorAll(".filter-container");
export let filtersOptions = document.querySelectorAll(".filterOption");
export const categoryContainer = document.querySelector(".categoryFilter");
export const searchInput = document.querySelector("#search__input");

export function displayFilterOptions(button) {
    const parent = button.closest(".filter-container");
    const options = parent.querySelector(".filter-options");
    const buttonIconUp = button.querySelector(".up");
    const buttonIconDown = button.querySelector(".down");

   
    hideOtherFilterOptions(options);
    button.classList.toggle("active");
    options.classList.toggle("hidden");
    buttonIconUp.classList.toggle("hidden");
    buttonIconDown.classList.toggle("hidden");
}

function hideOtherFilterOptions(currentOptions) {

    filtersContainer.forEach(filterContainer => {
        let filterOptions = filterContainer.querySelector(".filter-options");
        let button = filterContainer.querySelector(".filter-btn");

        if(filterOptions !== currentOptions){
            filterOptions.classList.add("hidden");
            button.classList.remove("active");
        }
    });
}

export function hideOptions(container) {
    const filterOptions = container.querySelector(".filter-options");
    let button = container.querySelector(".filter-btn");

    if(filterOptions){
        filterOptions.classList.add("hidden");
        button.classList.remove("active");
    }
}

export function addCategories(categories) {
    
    categories.forEach(category => {
        const categoryElement = document.createElement("button");
        categoryElement.dataset.value = category;
        categoryElement.dataset.type = "category";
        categoryElement.classList.add("filterOption");
        categoryElement.textContent= category;
        categoryContainer.appendChild(categoryElement);
    });

    resetDomAffiliation();
}
export function resetDomAffiliation() {
    filtersOptions = document.querySelectorAll(".filterOption");
    filterButtons = document.querySelectorAll(".filter-btn");
}