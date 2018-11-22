 function showOrHide(chek , pier_blok, val_blok) {
        chek = document.getElementById(chek);
        pier_blok = document.getElementById(pier_blok);
        val_blok=document.getElementById(val_blok);
        if (chek.checked) {
        val_blok.style.display = "block";
        pier_blok.style.display = "none";
        }
        else {
        val_blok.style.display = "none";
        pier_blok.style.display = "block";
        }
      }

       $(document).ready(function () {
            getRate("USD");
            $( 'input' ).on( 'click', function() {
            $(".bit").addClass("op");
            $(".bit1").removeClass("op");
          });
        });

        function Changed(){
          var a=$("#selectCountries" + " option:selected").attr('name');         
          getRate(a);
        }

        
           
        

        function onCheckboxChanged(checked){
          if(true){
            $(".bit").addClass("op");
            $(".bit1").removeClass("op");
          }            
          else{
            $(".bit").removeClass("op");
            $(".bit1").addClass("op");
          } 
        }

        function getRate(select){
        var bit= "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC"; 
        var b_url=bit+select;              
          $.get(
              b_url,
            function(data){
              var Price=data.volume.toFixed();
              $(".price_B").text("$"+Price);
               
              var Hour=data.changes.percent.hour.toFixed(2);
              if(Hour>=0){
                $(".i_b_H").text(Hour+"%").css({"color":"#70c446"});
              }
              else{
                $(".i_b_H").text(Hour+"%").css({"color":"#c80e24"});
              }

              var Day=data.changes.percent.day.toFixed(2);
              if(Day>=0){
                $(".i_b_D").text(Day+"%").css({"color":"#70c446"});
              }
              else{
                $(".i_b_D").text(Day+"%").css({"color":"#c80e24"});
              }

              var Week=data.changes.percent.week.toFixed(2);
              if(Week>=0){
                $(".i_b_W").text(Week+"%").css({"color":"#70c446"});
              }
              else{
                $(".i_b_W").text(Week+"%").css({"color":"#c80e24"});
              }

               var Month=data.changes.percent.month.toFixed(2);
              if(Month>=0){
                $(".i_b_M").text(Month+"%").css({"color":"#70c446"});
              }
              else{
                $(".i_b_M").text(Month+"%").css({"color":"#c80e24"});
              } 

              //_money
              var Hour_m=data.changes.price.hour.toFixed(2);
              if(Hour_m>=0){
                $(".i_b_H_money").text(Hour_m+"$").css({"color":"#70c446"});
              }
              else{
                $(".i_b_H_money").text(Hour_m+"$").css({"color":"#c80e24"});
              }

              var Day_m=data.changes.price.day.toFixed(2);
              if(Day_m>=0){
                $(".i_b_D_money").text(Day_m+"$").css({"color":"#70c446"});
              }
              else{
                $(".i_b_D_money").text(Day_m+"$").css({"color":"#c80e24"});
              }

              var Week_m=data.changes.price.week.toFixed(2);
              if(Week_m>=0){
                $(".i_b_W_money").text(Week_m+"$").css({"color":"#70c446"});
              }
              else{
                $(".i_b_W_money").text(Week_m+"$").css({"color":"#c80e24"});
              }

               var Month_m=data.changes.price.month.toFixed(2);
              if(Month_m>=0){
                $(".i_b_M_money").text(Month_m+"$").css({"color":"#70c446"});
              }
              else{
                $(".i_b_M_money").text(Month_m+"$").css({"color":"#c80e24"});
              }                    
            }
            );

          var lit= "https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC"; 
          var l_url=lit+select;
          $.get(
            l_url,
            function(data){
              var Price=data.volume.toFixed();
              $(".price_L").text("$"+Price);
               
              var Hour=data.changes.percent.hour.toFixed(2);
              if(Hour>=0){
                $(".i_l_H").text(Hour+"%").css({"color":"#70c446"});
              }
              else{
                $(".i_l_H").text(Hour+"%").css({"color":"#c80e24"});
              }

              var Day=data.changes.percent.day.toFixed(2);
              if(Day>=0){
                $(".i_l_D").text(Day+"%").css({"color":"#70c446"});
              }
              else{
                $(".i_l_D").text(Day+"%").css({"color":"#c80e24"});
              }

              var Week=data.changes.percent.week.toFixed(2);
              if(Week>=0){
                $(".i_l_W").text(Week+"%").css({"color":"#70c446"});
              }
              else{
                $(".i_l_W").text(Week+"%").css({"color":"#c80e24"});
              }

               var Month=data.changes.percent.month.toFixed(2);
              if(Month>=0){
                $(".i_l_M").text(Month+"%").css({"color":"#70c446"});
              }
              else{
                $(".i_l_M").text(Month+"%").css({"color":"#c80e24"});
              }  

              //_money
              var Hour_money=data.changes.price.hour.toFixed(2);
              if(Hour_money>=0){
                $(".i_l_H_money").text(Hour_money+"$").css({"color":"#70c446"});
              }
              else{
                $(".i_l_H_money").text(Hour_money+"$").css({"color":"#c80e24"});
              }

              var Day_money=data.changes.price.day.toFixed(2);
              if(Day_money>=0){
                $(".i_l_D_money").text(Day_money+"$").css({"color":"#70c446"});
              }
              else{
                $(".i_l_D_money").text(Day_money+"$").css({"color":"#c80e24"});
              }

              var Week_money=data.changes.price.week.toFixed(2);
              if(Week_money>=0){
                $(".i_l_W_money").text(Week_money+"$").css({"color":"#70c446"});
              }
              else{
                $(".i_l_W_money").text(Week_money+"$").css({"color":"#c80e24"});
              }

               var Month_money=data.changes.price.month.toFixed(2);
              if(Month_money>=0){
                $(".i_l_M_money").text(Month_money+"$").css({"color":"#70c446"});
              }
              else{
                $(".i_l_M_money").text(Month_money+"$").css({"color":"#c80e24"});
              }               
            }
            );

          var eth= "https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH"; 
          var e_url=eth+select;
          $.get(
            e_url,
            function(data){
              var Price=data.volume.toFixed();
              $(".price_E").text("$"+Price);
               
              var Hour=data.changes.percent.hour.toFixed(2);
              if(Hour>=0){
                $(".i_e_H").text(Hour+"%").css({"color":"#70c446"});
              }
              else{
                $(".i_e_H").text(Hour+"%").css({"color":"#c80e24"});
              }

              var Day=data.changes.percent.day.toFixed(2);
              if(Day>=0){
                $(".i_e_D").text(Day+"%").css({"color":"#70c446"});
              }
              else{
                $(".i_e_D").text(Day+"%").css({"color":"#c80e24"});
              }

              var Week=data.changes.percent.week.toFixed(2);
              if(Week>=0){
                $(".i_e_W").text(Week+"%").css({"color":"#70c446"});
              }
              else{
                $(".i_e_W").text(Week+"%").css({"color":"#c80e24"});
              }

               var Month=data.changes.percent.month.toFixed(2);
              if(Month>=0){
                $(".i_e_M").text(Month+"%").css({"color":"#70c446"});
              }
              else{
                $(".i_e_M").text(Month+"%").css({"color":"#c80e24"});
              } 

              //_money
              var Hour_money=data.changes.price.hour.toFixed(2);
              if(Hour_money>=0){
                $(".i_e_H_money").text(Hour_money+"$").css({"color":"#70c446"});
              }
              else{
                $(".i_e_H_money").text(Hour_money+"$").css({"color":"#c80e24"});
              }

              var Day_money=data.changes.price.day.toFixed(2);
              if(Day_money>=0){
                $(".i_e_D_money").text(Day_money+"$").css({"color":"#70c446"});
              }
              else{
                $(".i_e_D_money").text(Day_money+"$").css({"color":"#c80e24"});
              }

              var Week_money=data.changes.price.week.toFixed(2);
              if(Week_money>=0){
                $(".i_e_W_money").text(Week_money+"$").css({"color":"#70c446"});
              }
              else{
                $(".i_e_W_money").text(Week_money+"$").css({"color":"#c80e24"});
              }

               var Month_money=data.changes.price.month.toFixed(2);
              if(Month_money>=0){
                $(".i_e_M_money").text(Month_money+"$").css({"color":"#70c446"});
              }
              else{
                $(".i_e_M_money").text(Month_money+"$").css({"color":"#c80e24"});
              } 
            }
            );
        }