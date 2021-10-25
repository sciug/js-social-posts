const postContainer = document.getElementById("posts_container")





const posts = [



    {author: "Rose Mary",
    authorAvatar: "https://unsplash.it/300/300?image=",
    postImage: "https://unsplash.it/400/300?image=",
    likes: 0,
    postDate: "today",
    id: "firstPost",
    postContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque inventore modi illo eaque cum, nam rem? Dolorem, sunt optio? Magni consequatur provident ea asse velit!"
    },

    {author: "John Doe",
    authorAvatar: "https://unsplash.it/700/700?image=",
    postImage: "https://unsplash.it/500/300?image=",
    likes: 0,
    postDate: "today",
    id: "secondPost",
    postContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque inventore modi illo eaque cum, nam rem? Dolorem, sunt optio? Magni consequatur provident ea asse velit!"
    },

    {author: "Ruby Tuesday",
    authorAvatar: "https://unsplash.it/600/600?image=",
    postImage: "https://unsplash.it/600/300?image=",
    likes: 0,
    postDate: "yesterday",
    id: "thirdPost",
    postContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque inventore modi illo eaque cum, nam rem? Dolorem, sunt optio? Magni consequatur provident ea asse velit!"
    }

]




for(let i = 0; i <posts.length; i++){

   
    const post = posts[i]
    const postElement = document.createElement("div")
    postElement.classList.add("post", "mb-5", "p-3")
    postElement.setAttribute("id", `${post.id}`)

    function addLike(){
        post.likes += 1
    }



    postElement.innerHTML = `<div class="info d-flex">
            <div class="author_img">
            <img src="${post.authorAvatar}" class="img-fluid" alt="profile_pic">
        </div>

        <div class="author_date">
            <h4>${post.author}</h4>
            <p>${post.postDate}</p>
        </div>

    </div>
    <div class="post_image">
        <img src="${post.postImage}"  alt="">
    </div>
    <div class="likes d-flex align-items-center justify-content-between">
        <button class="likeBtn" onclick="addLike()">👍 mi piace</button>
        <p class="m-0">piace a ${post.likes} persone</p>
    </div>
`




postContainer.append(postElement)
    

}


