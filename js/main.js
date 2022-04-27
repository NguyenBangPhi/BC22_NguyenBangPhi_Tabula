var services = new Services();

function getList() {
    let promise = services.fetchData();
    promise
    .then(function(result){
        renderHTML(result.data);
    })
    .catch(function(error){
        console.log(error);
    })
}
getList();


function renderHTML(arr) {
    console.log(arr);
    var content = "";
    for (let i = 0; i < arr.length; i++) {
        var info = arr[i];
        content += `
        <div class="col-lg-3 col-6 mb-4 z__in animate__animated animate__fadeIn delay${i} wow" data-wow-delay = "${(i+3)/10}s">
            <div class="item">
                <div class="item__padding">
                    <div class="item__info">
                        <div class="item__top w-100">
                        <span style="display:block;transition: .3s ease-in-out;overflow: hidden;border-radius: 15px 15px 0 0;">
                            <img src="./img/${info.hinhAnh}" class="w-100" alt="">
                        </span>
                        </div>
                        <div class="item__bot w-100 p-3">
                            <span class="country">${info.ngonNgu}</span>
                            <span class="name">${info.hoTen}</span>
                            <p>${info.moTa}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    `;    
    }
    document.getElementById("listImg").innerHTML = content;
}


