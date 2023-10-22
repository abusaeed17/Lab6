document.addEventListener("DOMContentLoaded", function() {
    
    const likeVotes = getCookie("likeCount");
    const dislikeVotes = getCookie("dislikeCount");

    if (likeVotes) {
        document.getElementById("likeCount").textContent = likeVotes;
    }
    if (dislikeVotes) {
        document.getElementById("dislikeCount").textContent = dislikeVotes;
    }
});

function handleVote(type) {
    const voted = getCookie("voted");

    if (voted) {
        alert("You have already voted!");
        return;
    }

    if (type === "like") {
        const count = document.getElementById("likeCount");
        count.textContent = parseInt(count.textContent) + 1;
        setCookie("likeCount", count.textContent, 30);
    } else {
        const count = document.getElementById("dislikeCount");
        count.textContent = parseInt(count.textContent) + 1;
        setCookie("dislikeCount", count.textContent, 30);
    }


    setCookie("voted", "true", 30);
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
