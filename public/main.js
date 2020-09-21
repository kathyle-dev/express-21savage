var thumb = document.getElementsByClassName("thumb");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumb).forEach(function(element) {
      element.addEventListener('click', function(e){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumb = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        if(e.target.classList.contains("fa-thumbs-up")){
             fetch('messages', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                 'name': name,
                 'msg': msg,
                 'value':thumb,
                 'thumbUp': "yes",
                 'thumbDown': ""
                  })
             })
             .then(response => {
               if (response.ok) return response.json()
             })
             .then(data => {
               console.log(data)
               window.location.reload(true)
             })
      }else if (e.target.classList.contains("fa-thumbs-down")){
            fetch('messages', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                'name': name,
                'msg': msg,
                'value':thumb,
                'thumbDown': "yes",
                'thumbUp': "",
                  })
            })
            .then(response => {
              if (response.ok) return response.json()
            })
            .then(data => {
              console.log(data)
              window.location.reload(true)
            })
      }

      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
