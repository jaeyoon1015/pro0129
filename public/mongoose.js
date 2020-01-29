// 사용자 이름 눌렀을 때 댓글 로딩
document.querySelector('#user-list tr').forEach(function(el) {
    el.addEventListener('click', () => {
        const id = el.querySelector('td').textContent;
        getComment(id);
    })
})

// 사용자 로딩
function getUser() {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if(xhr.status === 200){
            const users = JSON.parse(xhr.responseText);
            console.log(users)
            const tbody = document.querySelector('#user-list tbody');
            tbody.innerHTML=''
            users.map(function(user) {
                var row = document.createElement('tr')
                row.addEventListener('click', () => {
                    getComment(user._id)
                })
                var td = document.createElement('td')
                td.textContent = user._id
                row.appendChild(td)
                td = document.createElement('td')
                
            })
        }
    }
}