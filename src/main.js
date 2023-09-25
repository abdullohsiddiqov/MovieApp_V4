import * as d from './DOMelms';
const search = document.querySelector(".form-control");
let count_movie = document.querySelector(".count-movie");
export async function GetData() {
    const response = await fetch('http://localhost:4000/api/movies');
    const movies = response.json();
    return movies;
}
async function Main(){ 
    const movie = await GetData();
    let currentPage = 1;
    let rows = 5;
    function DisplayList(arrData , rowPerPage , page) { 
        const postsElm = document.querySelector('.tbody');
        postsElm.innerHTML = '';
        page--;

        const start = rowPerPage * page;
        const end = start + rowPerPage;
        const paginatedData = arrData.slice(start, end);
        let coun = 0;
        paginatedData.forEach((elm)=>{ 
            coun++;
            count_movie.innerHTML = coun
            let ParentElement = document.createElement("tr");
            ParentElement.classList.add("tr");

            const postElm = document.createElement('td');
            const genrElement = document.createElement('td');
            const StockElm = document.createElement('td');
            const RateElm = document.createElement('td')

            RateElm.innerHTML = `${elm.dailyRentalRate}`;

            StockElm.innerHTML = `${elm.numberInStock}`

            genrElement.innerHTML = `${elm.genre.name}`

            postElm.innerHTML = `${elm.title}`

            ParentElement.append(postElm , genrElement , StockElm , RateElm);
            search.addEventListener("input", ()=>{ 
                if(postElm.innerHTML === search.value){ 
                    ParentElement.append(postElm , genrElement , StockElm , RateElm);
                    postsElm.innerHTML = '';
                    postsElm.append(ParentElement);
                }
            })
            ParentElement.append(postElm , genrElement , StockElm , RateElm);
            postsElm.append(ParentElement);
        });
    }
    function DisplayPagination(arrData , rowPerPage){ 
        const paginationElm = document.querySelector(".pagination");
        const pagesCount = Math.ceil(arrData.length / rowPerPage);
        const li = document.createElement('li');
        li.classList.add("page-item");
        for(let i = 0; i < pagesCount; i++){ 
            const aElm = DisplayPaginationBtn(i + 1);
            li.append(aElm);
        }
        paginationElm.append(li)
    }
    function DisplayPaginationBtn(page){ 
        const a = document.createElement("a");
        a.classList.add("page-link")
        a.innerHTML = page;

        if(currentPage == page){
            a.classList.add("active");
        }
        a.addEventListener("click",()=>{ 
            currentPage = page; 
            DisplayList(movie , rows , currentPage);

            let active = document.querySelector(".page-link.active");
            active.classList.remove("active");

            a.classList.add("active");

            search.value = "";
        });
        return a;
    }
    DisplayList(movie , rows , currentPage);
    DisplayPagination(movie , rows);
}
export function init(){ 
    Main();
}