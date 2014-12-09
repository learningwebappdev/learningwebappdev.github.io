$(document).ready(function(){

          new Share(".share-button");

          rePositionSidebarOnResize();

           $('body').scrollspy({ target: '#navSpy' })

      });


      function rePositionSidebarOnResize (){

        var rePositionSidebar = function (){
          if (document.documentElement.clientWidth >= 1050){

            $('.sidebarInner').affix({
                offset: {
                  top: 220,
                  bottom: 0
                }
              });

          }
          else if (document.documentElement.clientWidth < 1050){
             
            $('.sidebarInner').affix({
                offset: {
                  top: 220,
                  bottom: 0
                }
              });

          }
        };

         if(window.addEventListener){
            window.addEventListener('resize',rePositionSidebar);
            rePositionSidebar();
        }
        else{
            window.attachEvent('resize',rePositionSidebar);
            rePositionSidebar();
        }

      }


     
