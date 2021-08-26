$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:3,
        responsive:{
            320:{
                items:1
            },
            480:{
                items:1,
            },
            640:{
                items:1
            },
            842:{
                items:2
            },
            992:{
                items:3
            },
        }
        
    });
  });
  $(document).ready(function(){
    $('.owl-carousel-banner').owlCarousel({
        items:1
    });
  });

//   counter section
  var client=setInterval(carstocks,10);
  let count1=1;

  function carstocks(){
    count1++;
    document.querySelector('.counter1').innerHTML= count1;

    // stop count
    if(count1==1200){
        clearInterval(client);
    }
  }

  var awards=setInterval(carawards,10);
  let count2=1;

  function carawards(){
    count2++;
    document.querySelector('.counter2').innerHTML= count2;

    // stop count
    if(count2==600){
        clearInterval(awards);
    }
  }
  var branch=setInterval(dillerbranches,10);
  let count3=1;

  function dillerbranches(){
    count3++;
    document.querySelector('.counter3').innerHTML= count3;

    // stop count
    if(count3==800){
        clearInterval(branch);
    }
  }
  var happy=setInterval(happyclient,10);
  let count4=1;

  function happyclient(){
    count4++;
    document.querySelector('.counter4').innerHTML= count4;

    // stop count
    if(count4==1500){
        clearInterval(happy);
    }
  }
