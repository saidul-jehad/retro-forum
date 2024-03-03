

// all post data
const loadData = () => {
    const postContainer = document.getElementById('post-container')
    const url = "https://openapi.programming-hero.com/api/retro-forum/posts"
    fetch(url)
        .then((data) => data.json())
        .then((data) => {
            const posts = data.posts
            // console.log(posts);

            for (const post of posts) {
                // console.log(post);
                const cards = document.createElement('div')
                cards.innerHTML = `
                <!-- first card -->
                <div class="bg-[#F3F3F5] flex gap-6 lg:p-10 p-3 rounded-3xl  ">
                    <!-- image -->
                    <div class="w-[72px] h-[72px]">
                        <img class="rounded-2xl" src="${post.image}" alt="">
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

                            <button class ="count-btn" onclick="countHandler(${this.clas})">  <img src="./images/Group.png" alt=""></button>
                        </div>
                    </div>
                </div>
                `

                postContainer.appendChild(cards)
            }
        })
}



// latest post
const loadData2 = () =>{
    fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    .then((data) => data.json())
    .then((data) => console.log(data))
}




loadData()


// count add 
