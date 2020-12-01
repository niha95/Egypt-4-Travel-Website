$(document).ready(function(){
    
    var date_input=$('.date'); 
      var options={
        format: 'mm/dd/yyyy',
        todayHighlight: true,
        numberOfMonths: 3,
        autoclose: true,
        rtl:false
      };
      date_input.datepicker(options);
    
    $("#gallery").unitegallery({
				theme_panel_position: "left"		
			});
});
