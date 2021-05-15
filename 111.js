window.onload = function () {


  // let tablinksBtn = document.querySelectorAll('.tablinks'),
  //     tabcontentDiv = document.querySelectorAll('.tabcontent');

  // for (let tablink of tablinksBtn) {
  //     tablink.addEventListener('click', function () {
  //         tablinksBtn.forEach(el => el.classList.remove('active'));
  //         tabcontentDiv.forEach(el => el.style.display = "none");
  //         this.classList.add('active');

  //         if (this.classList.contains('btn-france')) {
  //             document.getElementById("france").style.display = "block";
  //             document.getElementById("defaultArtist").click();
  //             $('.accordion').accordion({active: 0 });
  //         }
  //         if (this.classList.contains('btn-germany')) {
  //             document.getElementById("germany").style.display = "block";
  //             document.getElementById("defaultArtist2").click();
  //             $('.accordion').accordion({active: 0 });
  //         }
  //         if (this.classList.contains('btn-italy')) {
  //             document.getElementById("italy").style.display = "block";
  //             document.getElementById("defaultArtist3").click();
  //             $('.accordion').accordion({active: 0 });
  //         }
  //         if (this.classList.contains('btn-russian')) {
  //             document.getElementById("russian").style.display = "block";
  //             document.getElementById("defaultArtist4").click();
  //             $('.accordion').accordion({active: 0 });
  //         }
  //         if (this.classList.contains('btn-spain')) {
  //             document.getElementById("spain").style.display = "block";
  //             document.getElementById("defaultArtist5").click();
  //             $('.accordion').accordion({active: 4 });
  //         }
  //     });
  // };

  let artistNameBtn = document.querySelectorAll('.artistName'),
      infoHeading = document.querySelectorAll('.info-heading');

  for (let item of artistNameBtn) {
      item.addEventListener('click', function (e) {
          artistNameBtn.forEach(el => el.classList.remove('active'));

          infoHeading.forEach(el => {
              el.parentElement.style.display = "none";

              let person = el.innerText;
              if (person === e.currentTarget.innerText) {
                  el.parentElement.style.display = "block";

                  item.classList.add('active');
              }

              if (window.innerWidth < 769) {
                  el.parentElement.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                  });
              }
          });
      });
  }
  // document.getElementById('defaultOpen').click();
}
