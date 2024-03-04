

// all post data
const loadData = (searchCategory) => {
    const postContainer = document.getElementById('post-container')
    console.log(searchCategory);
    let url = ``;
    if(searchCategory === true){
        url = "https://openapi.programming-hero.com/api/retro-forum/posts"
    }else{
        url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchCategory}`
    }
    fetch(url)
        .then((data) => data.json())
        .then((data) => {
            const posts = data.posts
            // console.log(posts);

            postContainer.innerHTML = ''
            for (const post of posts) {
                // console.log(post);
                const cards = document.createElement('div')
                cards.innerHTML = `
                <!-- first card -->
                <div class="bg-[#F3F3F5] flex gap-2 lg:gap-6 lg:p-10 p-3 rounded-3xl  ">
                    <!-- image -->
                    <div class="w-[72px] h-[72px] relative">
                        <img class="rounded-2xl" src="${post.image}" alt="">

                        <div class=" p-[2px] rounded-full bg-white absolute -top-[6px] -right-[6px]">
                            <div id="active-color" class=" ${post.isActive? "bg-green-500" :"bg-red-500"} w-4 h-4 rounded-full">
                            </div>
                        </div>
                    </div>

                    <div class="flex-1">
                        <!-- catagory and author name-->
                        <div class="text-[14px] font-medium flex gap-4">
                            <p># <span> ${post.category} </span></p>
                            <p>Author : <span>${post.author.name}</span></p>
                        </div>

                        <!-- title and description -->
                        <div class="space-y-3 mt-3 border-b-2 border-dashed pb-3">
                            <h2 class="text-[20px] font-bold">${post.title}</h2>
                            <p class="text-[16px]">${post.description} "</p>
                        </div>

                        <!-- comment, view and post time -->
                        <div class="flex justify-between items-center">
                            <div class="flex gap-4 mt-4">
                                <p class="flex items-center justify-center gap-2"><img src="./images/comment.png" alt=""> <span>${post.comment_count} </span></p>
                                <p class="flex items-center justify-center gap-2"><img src="./images/view.png" alt=""> <span>${post.view_count} </span></p>
                                <p class="flex items-center justify-center gap-2"><img src="./images/time2.png" alt=""> <span>${post.posted_time} </span> min</p>
                            </div>

                            <button class ="count-btn mt-3" onclick="countHandler()">  <i class=" rounded-3xl p-1 fa-regular lg:fa-2x bg-[#10B981] text-white fa-envelope"></i></button>
                        </div>
                    </div>
                </div>
                `

                postContainer.appendChild(cards)
            }
        })
}



// latest post
const loadData2 = () => {
    const postContainer2 = document.getElementById('post-container2')
    fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
        .then((data) => data.json())
        .then((data) => {
            const posts = data;
            posts.forEach(post => {
                const div = document.createElement('div')
                div.innerHTML = `
            <!-- first card -->
            <div class="card card-compact  p-4 bg-base-100 shadow-xl">
                <!-- cover image -->
                <figure><img class="rounded-2xl" src="${post.cover_image} "
                        alt="Shoes" /></figure>

                <div class="mt-6 space-y-3">
                    <h2 class=""><span><i class="fa-solid fa-calendar-days"></i></span> <span>${post.author.posted_date || 'No publish date'}</span>
                    </h2>
                    <p class="font-extrabold text-lg">${post.title}</p>
                    <p class="text-[16px]">${post.description} </p>

                    <div class="profile flex gap-4 my-4 ">
                        <div class="w-11 h-11 rounded-full">
                            <img class="rounded-full" src="${post.profile_image}" alt="">
                        </div>
                        <div>
                            <p class="font-bold text-[16px]">${post.author.name} </p>
                            <p class="text-[14px]">${post.author.designation || 'Unknown'}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
                postContainer2.appendChild(div)
                // console.log(post);
            });

        })
}

const allBtn = document.getElementsByClassName('count-btn')
// console.log(allBtn);
// for(const btn of allBtn){
//     console.log(btn);
// }

loadData2()

// 
const loadDataSub = () =>{
    loadData(true);
    // console.log("log");
    document.getElementById('loader-container').classList.add('hidden')
    const container = document.getElementById('details-show-container')
    container.classList.remove("hidden")
}


const searchHandler = () => {
    // loadData()
    document.getElementById('loader-container').classList.remove('hidden')
    const postContainer = document.getElementById('post-container')

    postContainer.innerHTML = ''
    const searchInput = document.getElementById('search-input')
    const searchInputText = searchInput.value
    const searchHandler2 = () =>{
    document.getElementById('loader-container').classList.add('hidden')
        loadData(searchInputText)
    }
    setTimeout(searchHandler2, 2000)
}

setTimeout(loadDataSub, 2000)
// loadData(true)